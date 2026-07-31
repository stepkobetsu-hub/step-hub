import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const page = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const sw = fs.readFileSync(new URL('../sw.js', import.meta.url), 'utf8');

test('only the three student features require the common session', () => {
  assert.equal((page.match(/class="[^"]*requires-common[^"]*"/g) || []).length, 3);
  assert.match(page, /student-QR\/my_qr\.html/);
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
  assert.match(sw, /step-student-v5/);
});

test('student home uses purpose-specific QR, progress, grade, and video designs', () => {
  assert.match(page, /class="feature-icon"[\s\S]*?<svg/);
  assert.match(page, /class="qr requires-common"[\s\S]*?本人専用QRをすぐに表示/);
  assert.match(page, /class="progress requires-common"[\s\S]*?進捗・達成度・目標範囲/);
  assert.match(page, /class="card grade requires-common"[\s\S]*?定期テスト・通知表・志望校/);
  assert.match(page, /class="card forest"[\s\S]*?class="play"/);
  assert.match(page, /class="group-symbol"/);
});
