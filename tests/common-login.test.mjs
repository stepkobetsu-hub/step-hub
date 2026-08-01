import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const page = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const sw = fs.readFileSync(new URL('../sw.js', import.meta.url), 'utf8');
const qrShell = fs.readFileSync(new URL('../my_qr.html', import.meta.url), 'utf8');

test('the three common-session features keep their main and bottom-nav links', () => {
  assert.equal((page.match(/class="[^"]*requires-common[^"]*"/g) || []).length, 6);
  assert.match(page, /href="\.\/my_qr\.html"/);
  assert.match(qrShell, /student-QR\/my_qr\.html/);
  assert.match(page, /seiseki-kanri\/juku_app\.html/);
  assert.match(page, /foresta-step-progress\//);
  assert.doesNotMatch(page.match(/<a class="feature-card forest-card"[\s\S]*?<\/a>/)?.[0] || '', /requires-common/);
});

test('the browser stores only the common token and its expiry', () => {
  assert.match(page, /stepCommonStudentSessionToken/);
  assert.match(page, /stepCommonStudentSessionExpiresAt/);
  assert.doesNotMatch(page, /localStorage\.setItem\([^\n]*(?:password|commonStudentId)/i);
  assert.match(page, /commonPassword\.value=''/);
});

test('common session validation and logout still use the server', () => {
  assert.match(page, /action:'getCommonStudentSession',token:s\.token/);
  assert.match(page, /action:'logout',token:s\.token/);
  assert.match(page, /clearCommonSession\(\)/);
  assert.match(page, /sessionStorage\.removeItem\('stepMyQrDisplayCache'\)/);
  assert.match(sw, /step-student-v15-rollback/);
  assert.match(sw, /'\.\/my_qr\.html'/);
});

test('own QR stays inside the student app scope without an extra app splash', () => {
  assert.match(qrShell, /<iframe[^>]+student-QR\/my_qr\.html/);
  assert.doesNotMatch(qrShell, /manifest|icon-qr|camera|繧ｫ繝｡繝ｩ/);
});

test('logged-in state shows the verified student identity without a large status label', () => {
  assert.match(page, /id="commonStudentName"/);
  assert.match(page, /逕溷ｾ棚D<\/small><b id="commonStudentCode"/);
  assert.match(page, /譬｡闊主錐<\/small><b id="commonStudentCampus"/);
  assert.match(page, /renderCommonLogin\(true,r\.profile\)/);
  assert.doesNotMatch(page, /<strong>繝ｭ繧ｰ繧､繝ｳ貂医∩<\/strong>/);
});

test('student identity stays in one cute three-column row on mobile', () => {
  assert.match(page, /\.common-status\{[^}]*grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/);
  assert.match(page, /@media\(max-width:560px\)\{[^}]*[\s\S]*?\.common-status\{grid-template-columns:repeat\(3,minmax\(0,1fr\)\)\}/);
  assert.equal((page.match(/class="identity-icon"/g) || []).length, 3);
  assert.doesNotMatch(page, /id="commonLogoutButton"/);
});

test('student home keeps purpose-specific QR, progress, grade, and video cards', () => {
  assert.match(page, /class="hero-qr requires-common"[\s\S]*?閾ｪ蛻・・QR/);
  assert.match(page, /class="feature-card progress-card requires-common"[\s\S]*?莉頑律縺ｮ騾ｲ謐・);
  assert.match(page, /class="feature-card grade-card requires-common"[\s\S]*?繝・せ繝育ｵ先棡/);
  assert.match(page, /class="feature-card forest-card"[\s\S]*?譏蜒乗肢讌ｭ/);
  assert.match(page, /id="examToggle"/);
  assert.match(page, /id="admissionToggle"/);
});

test('main cards are compact and the two mascots are decorative', () => {
  assert.match(page, /\.main-grid\{[^}]*gap:16px[^}]*padding:0 8px[^}]*margin-top:20px/);
  assert.match(page, /\.feature-card\{[^}]*min-height:200px[^}]*padding:15px 10px 13px/);
  assert.match(page, /\.feature-icon\{[^}]*width:88px[^}]*height:88px/);
  assert.equal((page.match(/class="mascot /g) || []).length, 2);
  assert.match(page, /\.mascot\{pointer-events:none;user-select:none/);
  assert.doesNotMatch(page, /<div class="mascot[^>]*tabindex=/);
});

