import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const page = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const sw = fs.readFileSync(new URL('../sw.js', import.meta.url), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('../manifest.webmanifest', import.meta.url), 'utf8'));
const qrShell = fs.readFileSync(new URL('../my_qr.html', import.meta.url), 'utf8');

test('the three protected student features are available in cards and bottom navigation', () => {
  assert.equal((page.match(/class="[^"]*requires-common[^"]*"/g) || []).length, 6);
  assert.equal((page.match(/href="\.\/my_qr\.html"/g) || []).length, 2);
  assert.equal((page.match(/href="https:\/\/stepkobetsu-hub\.github\.io\/foresta-step-progress\/"/g) || []).length, 2);
  assert.equal((page.match(/href="https:\/\/stepkobetsu-hub\.github\.io\/seiseki-kanri\/juku_app\.html"/g) || []).length, 2);
  assert.doesNotMatch(page.match(/class="feature-card forest"[\s\S]*?<\/a>/)?.[0] || '', /requires-common/);
});

test('the browser stores only the common token and its expiry', () => {
  assert.match(page, /stepCommonStudentSessionToken/);
  assert.match(page, /stepCommonStudentSessionExpiresAt/);
  assert.doesNotMatch(page, /localStorage\.setItem\([^\n]*(?:password|commonStudentId)/i);
  assert.match(page, /document\.getElementById\('commonPassword'\)\.value=''/);
});

test('common session validation and confirmed logout use the server', () => {
  assert.match(page, /action:'getCommonStudentSession',token:session\.token/);
  assert.match(page, /window\.confirm\('ログアウトしますか？'\)/);
  assert.match(page, /action:'logout',token:session\.token/);
  assert.match(page, /sessionStorage\.removeItem\('stepMyQrDisplayCache'\)/);
  assert.match(sw, /step-student-v9/);
});

test('own QR stays inside the student app scope without an extra app splash', () => {
  assert.match(qrShell, /<iframe[^>]+student-QR\/my_qr\.html/);
  assert.doesNotMatch(qrShell, /manifest|icon-qr|camera|カメラ/);
});

test('logged-in state shows time-based greeting and verified identity', () => {
  assert.match(page, /function greetingForHour\(\)/);
  assert.match(page, /id="heroGreeting"/);
  assert.match(page, /id="commonStudentCode"/);
  assert.match(page, /id="commonStudentName"/);
  assert.match(page, /id="commonStudentCampus"/);
  assert.match(page, /renderCommonLogin\(true,result\.profile\)/);
  assert.match(page, /class="logged-in-home hidden"/);
});

test('adopted design hierarchy and colors are represented with lightweight UI', () => {
  assert.match(page, /class="sky"/);
  assert.match(page, /class="qr-card requires-common"/);
  assert.match(page, /class="feature-card progress requires-common"/);
  assert.match(page, /class="feature-card grade requires-common"/);
  assert.match(page, /class="feature-card forest"/);
  assert.match(page, /grid-template-columns:repeat\(3,1fr\)/);
  assert.match(page, /class="mascot"/);
  assert.doesNotMatch(page, /<img[^>]+(?:jpg|jpeg|png|webp)/i);
  assert.doesNotMatch(page, /fonts\.(?:googleapis|gstatic)\.com|cdnjs|jsdelivr/);
});

test('real links and the five-item safe-area navigation are retained', () => {
  assert.match(page, /愛知県入試制度/);
  assert.match(page, /愛知全県模試/);
  assert.match(page, /学習資料/);
  assert.match(page, /class="bottom-nav"/);
  assert.equal((page.match(/<nav class="bottom-nav"[\s\S]*?<\/nav>/)?.[0].match(/<a /g) || []).length, 5);
  assert.match(page, /env\(safe-area-inset-bottom\)/);
});

test('fictional homework, lesson dates, rewards, and unread counts are not published', () => {
  assert.doesNotMatch(page, /今日の宿題|次回の授業|7\/23|未読|ごほうび|単語20級/);
  assert.doesNotMatch(page, /notification-count|unread-count/);
});

test('PWA metadata is valid and uses the adopted sky palette', () => {
  assert.equal(manifest.name, 'STEP 塾生アプリ');
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.theme_color, '#35bfe8');
  assert.match(sw, /'\.\/index\.html'/);
  assert.match(sw, /'\.\/my_qr\.html'/);
});
