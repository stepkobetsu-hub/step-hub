STEP総合管理ポータル Ver.3.2 修正版

アップロード先:
stepkobetsu-hub / step-hub / system

上書きする4ファイル:
- index.html
- style.css
- app.js
- data.js

portal-v3.html:
削除しなくても動作に影響しませんが、今後は使用しません。
公開入口は system/index.html です。

今回の修正:
- 実際のリポジトリZIPを正本として作成
- 既存の公開URL、GitHub、Google Sheetリンクを復元
- スタッフ用アプリ、成績管理、面談メモを独立カード化
- エントリーシート読み取りと受付カード読み取りを
  「入塾書類・受付管理」に分類
- ボタン名を「エントリーシートの読み取りアプリを開く」に変更
- 今後の表示内容は system/data.js だけで管理
