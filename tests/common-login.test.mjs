import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const page = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const sw = fs.readFileSync(new URL('../sw.js', import.meta.url), 'utf8');
const qrShell = fs.readFileSync(new URL('../my_qr.html', import.meta.url), 'utf8');

test('only the three student features require the common session', () => {
  assert.equal((page.match(/class="[^"]*requires-common[^"]*"/g) || []).length, 3);
  assert.match(page, /href="\.\/my_qr\.html"/);
  assert.match(qrShell, /student-QR\/my_qr\.html/);
  assert.match(page, /seiseki-kanri\/juku_app\.html/);
  assert.match(page, /foresta-step-progress\//);
  assert.doesNotMatch(page.match(/<a class="card forest"[\s\S]*?<\/a>/)?.[0] || '', /requires-common/);
});

test('the browser stores only the common token and its expiry', () => {
  assert.match(page, /stepCommonStudentSessionToken/);
  assert.match(page, /stepCommonStudentSessionExpiresAt/);
  assert.doesNotMatch(page, /localStorage\.setItem\([^\n]*(?:password|commonStudentId)/i);
  assert.match(page, /document\.getElementById\('commonPassword'\)\.value=''/);
});

test('common session validation and logout use the server', () => {
  assert.match(page, /action:'getCommonStudentSession',token:session\.token/);
  assert.match(page, /action:'logout',token:session\.token/);
  assert.match(page, /clearCommonSession\(\)/);
  assert.match(page, /sessionStorage\.removeItem\('stepMyQrDisplayCache'\)/);
  assert.match(sw, /step-student-v15-rollback/);
  assert.match(sw, /'\.\/my_qr\.html'/);
});

test('own QR stays inside the student app scope without an extra app splash', () => {
  assert.match(qrShell, /<iframe[^>]+student-QR\/my_qr\.html/);
  assert.doesNotMatch(qrShell, /manifest|icon-qr|camera|カメラ/);
});

test('logged-in state shows the verified student identity without a large status label', () => {
  assert.match(page, /id="commonStudentName"/);
  assert.match(page, /ID：<b id="commonStudentCode"/);
  assert.match(page, /校舎：<b id="commonStudentCampus"/);
  assert.match(page, /renderCommonLogin\(true,result\.profile\)/);
  assert.doesNotMatch(page, /<strong>ログイン済み<\/strong>/);
});

test('student home uses purpose-specific QR, progress, grade, and video designs', () => {
  assert.match(page, /class="feature-icon"[\s\S]*?<svg/);
  assert.match(page, /class="qr requires-common"[\s\S]*?本人専用QRをすぐに表示/);
  assert.match(page, /class="progress requires-common"[\s\S]*?進捗・達成度・目標範囲/);
  assert.match(page, /class="card grade requires-common"[\s\S]*?定期テスト・通知表・志望校/);
  assert.match(page, /class="card forest"[\s\S]*?class="play"/);
  assert.match(page, /class="group-symbol"/);
  assert.match(page, /\.qr \.feature-icon\{background:linear-gradient\(145deg,var\(--blue\),var\(--navy\)\)\}/);
});
