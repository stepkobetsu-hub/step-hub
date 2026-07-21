# STEP HUB 2.0 初期ファイル

## ファイル
- index.html：保護者ポータル本体
- admin.html：管理画面の見た目だけの初期案
- Code.gs：Googleスプレッドシートからお知らせを読み込むGASサンプル

## まずやること
1. GitHub Pages に index.html と admin.html を置く
2. Googleスプレッドシートを作る
3. Apps Script に Code.gs を貼る
4. Webアプリとして公開
5. index.html の `GAS_URL = "";` に WebアプリURLを入れる

## スプレッドシート構成

### 今日のお知らせ
A1: 表示内容
A2: 本日は通常授業です。

### お知らせ
A: 掲載日
B: タイトル
C: 本文
D: 詳細URL
E: 重要度
F: 状態

状態は「掲載」にすると表示されます。

### リンク設定
A: key
B: url

key例:
testUpload
forest
pastExam
forms
