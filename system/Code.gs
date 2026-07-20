/**
 * STEP HUB 2.0 用 GAS サンプル
 * Googleスプレッドシートに以下のシートを作成:
 * 1. 今日のお知らせ
 * 2. お知らせ
 * 3. リンク設定
 */

function doGet(e) {
  const data = {
    today: getTodayNotice_(),
    links: getLinks_(),
    news: getNews_()
  };

  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function getTodayNotice_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName('今日のお知らせ');
  if (!sh) return '本日は通常授業です。';

  // A2に表示文を入れる
  const v = sh.getRange('A2').getDisplayValue();
  return v || '本日は通常授業です。';
}

function getLinks_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName('リンク設定');
  const result = {
    testUpload: '',
    forest: '',
    pastExam: '',
    forms: ''
  };
  if (!sh) return result;

  const values = sh.getDataRange().getValues();
  // A列: key / B列: url
  values.slice(1).forEach(r => {
    const key = String(r[0] || '').trim();
    const url = String(r[1] || '').trim();
    if (key && url) result[key] = url;
  });
  return result;
}

function getNews_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName('お知らせ');
  if (!sh) return [];

  const values = sh.getDataRange().getValues();
  const rows = values.slice(1);
  const today = new Date();

  return rows
    .filter(r => String(r[5] || '').trim() === '掲載')
    .map(r => ({
      date: formatDate_(r[0]),
      title: String(r[1] || ''),
      body: String(r[2] || ''),
      url: String(r[3] || ''),
      priority: String(r[4] || '')
    }))
    .slice(0, 10);
}

function formatDate_(v) {
  if (Object.prototype.toString.call(v) === '[object Date]') {
    return Utilities.formatDate(v, 'Asia/Tokyo', 'yyyy/MM/dd');
  }
  return String(v || '');
}
