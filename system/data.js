// STEP統合管理ポータル Ver.2.2 完全データ駆動版
// ボタン名・リンク・分類・状態・説明は、すべてこのファイルで管理します。
window.STEP_PORTAL_META = {
  "version": "2.2",
  "updatedAt": "2026-07-21",
  "sourceOfTruth": "https://github.com/stepkobetsu-hub/step-hub/tree/main/system",
  "dataFile": "system/data.js",
  "rule": "カード名・分類・ボタン名・リンク・保守情報はdata.jsだけで変更する"
};

window.STEP_ASSETS = [
  {
    "id": "student-master",
    "name": "生徒マスタ",
    "category": "生徒・指導管理",
    "status": "本番",
    "summary": "生徒基本情報・連絡先・在籍情報などの共通マスタ",
    "users": "管理者",
    "github": "",
    "publicUrl": "",
    "storage": "Google Sheet",
    "notes": "各システムの共通生徒マスタ候補",
    "sourceType": "Google Sheet",
    "sourceOfTruth": "要確認",
    "sourceFile": "要確認",
    "spreadsheetId": "要確認",
    "appsScriptType": "要確認",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "要確認",
      "lastVerified": "2026-07-20",
      "verifyMethod": "Google Sheet ID・関連Apps Script・利用システムを特定する",
      "changeRule": "正本確定前は修正しない"
    },
    "links": []
  },
  {
    "id": "staff-app",
    "name": "スタッフ用アプリ",
    "category": "共通基盤",
    "status": "本番",
    "summary": "スタッフ向けの主要ページをまとめたログイン付き入口",
    "users": "管理者・許可スタッフ",
    "github": "https://github.com/stepkobetsu-hub/seiseki-kanri",
    "publicUrl": "https://stepkobetsu-hub.github.io/seiseki-kanri/",
    "storage": "GitHub Pages＋成績管理共通基盤",
    "notes": "講師ポータル下部の「スタッフ用アプリ」から開く主要入口。各重要機能はSTEP統合管理ポータルでも独立カードとして管理",
    "sourceType": "GitHub Pages",
    "sourceOfTruth": "https://github.com/stepkobetsu-hub/seiseki-kanri",
    "sourceFile": "index.html（スタッフ用アプリ入口）",
    "spreadsheetId": "",
    "appsScriptType": "各リンク先システムに依存",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "確認済",
      "lastVerified": "2026-07-21",
      "verifyMethod": "講師ポータルのスタッフ用リンク、公開URL、GitHub mainのindex.htmlを照合",
      "changeRule": "スタッフ向け主要ページを追加・変更するときはseiseki-kanri/index.htmlとSTEP統合管理ポータルを同時更新"
    },
    "links": [
      {
        "group": "利用する",
        "label": "スタッフ用アプリを開く",
        "url": "https://stepkobetsu-hub.github.io/seiseki-kanri/"
      },
      {
        "group": "管理する",
        "label": "GitHubを開く",
        "url": "https://github.com/stepkobetsu-hub/seiseki-kanri"
      }
    ]
  },
  {
    "id": "grade-management",
    "name": "成績管理",
    "category": "生徒・指導管理",
    "status": "本番",
    "summary": "成績・通知表・指導情報を管理する中心システム",
    "users": "管理者・許可スタッフ",
    "github": "https://github.com/stepkobetsu-hub/seiseki-kanri",
    "publicUrl": "https://stepkobetsu-hub.github.io/seiseki-kanri/",
    "storage": "Google Sheet＋Apps Script＋GitHub Pages",
    "notes": "スタッフ用アプリから利用。エントリーシート読み取りは別の「入塾書類・受付管理」エリアで管理",
    "sourceType": "GitHub Pages＋Google Sheet＋Apps Script",
    "sourceOfTruth": "https://github.com/stepkobetsu-hub/seiseki-kanri",
    "sourceFile": "成績管理本体一式（直接入口ファイルは追加確認）",
    "spreadsheetId": "成績管理データ保存先を要確認",
    "appsScriptType": "成績管理側API・保存処理を確認",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "公開入口・GitHub確認済／直接入口と保存先要確認",
      "lastVerified": "2026-07-21",
      "verifyMethod": "スタッフ用アプリ、GitHub main、成績管理の直接入口、保存先Sheet・Apps Scriptを照合",
      "changeRule": "成績管理本体、面談メモ、入塾書類読取を別カードで維持し、変更時は相互リンクを確認"
    },
    "links": [
      {
        "group": "利用する",
        "label": "利用者向けアプリを開く",
        "url": "https://stepkobetsu-hub.github.io/seiseki-kanri/"
      },
      {
        "group": "管理する",
        "label": "GitHubを開く",
        "url": "https://github.com/stepkobetsu-hub/seiseki-kanri"
      }
    ]
  },
  {
    "id": "meeting-memo",
    "name": "面談メモ",
    "category": "生徒・指導管理",
    "status": "本番",
    "summary": "面談・電話・相談内容の登録と、生徒別履歴の確認",
    "users": "管理者・許可スタッフ",
    "github": "https://github.com/stepkobetsu-hub/seiseki-kanri",
    "publicUrl": "https://stepkobetsu-hub.github.io/seiseki-kanri/meeting_memo.html",
    "storage": "成績管理共通基盤＋GitHub Pages",
    "notes": "成績管理リポジトリ内の重要な独立ページ。スタッフ用アプリからも開く",
    "sourceType": "GitHub Pages＋成績管理共通基盤",
    "sourceOfTruth": "https://github.com/stepkobetsu-hub/seiseki-kanri",
    "sourceFile": "meeting_memo.html",
    "spreadsheetId": "成績管理側データ保存先を要確認",
    "appsScriptType": "成績管理側API・保存処理を確認",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "公開ページ・ソース確認済／保存先要確認",
      "lastVerified": "2026-07-21",
      "verifyMethod": "公開URLとGitHub mainのmeeting_memo.htmlを照合し、保存先API・Sheetを追加確認",
      "changeRule": "meeting_memo.htmlを修正した場合は公開動作・保存先・スタッフ用アプリのリンクを同時確認"
    },
    "links": [
      {
        "group": "利用する",
        "label": "面談メモを開く",
        "url": "https://stepkobetsu-hub.github.io/seiseki-kanri/meeting_memo.html"
      },
      {
        "group": "管理する",
        "label": "GitHubを開く",
        "url": "https://github.com/stepkobetsu-hub/seiseki-kanri"
      }
    ]
  },
  {
    "id": "seiseki",
    "name": "エントリーシート読み取り",
    "category": "入塾書類・受付管理",
    "status": "本番",
    "summary": "OCRで読み取った入塾時情報を成績管理システムへ登録する機能",
    "users": "管理者・スタッフ",
    "github": "https://github.com/stepkobetsu-hub/seiseki-kanri",
    "publicUrl": "https://stepkobetsu-hub.github.io/seiseki-kanri/entry_import.html",
    "storage": "Google Sheet＋Apps Script＋GitHub Pages",
    "notes": "成績管理とは別性格の入塾書類読取機能。受付カード読み取りと同じ「入塾書類・受付管理」エリアで管理",
    "sourceType": "GitHub＋Google Sheet",
    "sourceOfTruth": "https://github.com/stepkobetsu-hub/seiseki-kanri",
    "sourceFile": "entry_import.html（エントリーシート読み取り）／成績管理リポジトリ内一式",
    "spreadsheetId": "1Zq3AbL9Fx_skBUibh2F73kyWlw9Ionh3-dTOtots0D8",
    "appsScriptType": "成績管理側構成を確認",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "要確認",
      "lastVerified": "2026-07-20",
      "verifyMethod": "GitHub本番ブランチと公開URLを照合",
      "changeRule": "entry_import.htmlの公開URL・GitHub・保存先を一体管理し、成績管理カードへ統合表示しない"
    },
    "links": [
      {
        "group": "利用する",
        "label": "利用者向けアプリを開く",
        "url": "https://stepkobetsu-hub.github.io/seiseki-kanri/entry_import.html"
      },
      {
        "group": "管理する",
        "label": "GitHubを開く",
        "url": "https://github.com/stepkobetsu-hub/seiseki-kanri"
      }
    ]
  },
  {
    "id": "juku-card",
    "name": "受付カード読み取り",
    "category": "入塾書類・受付管理",
    "status": "本番",
    "summary": "受付カードの登録・一覧管理・印刷を行うシステム",
    "users": "管理者・スタッフ",
    "github": "",
    "publicUrl": "https://docs.google.com/spreadsheets/d/16K335J5meUGgGPFBZzRnDfFQb_Pzh8WtwmKZjWC1e9I/edit?gid=388967979#gid=388967979",
    "storage": "受付カードGoogle Sheet＋付属Apps Script",
    "notes": "指定Google Sheetと、そのスプレッドシートに付属する拡張機能（バインド型Apps Script）を一体管理",
    "sourceType": "Google Sheetバインド型Apps Script",
    "sourceOfTruth": "Google Sheet: 16K335J5meUGgGPFBZzRnDfFQb_Pzh8WtwmKZjWC1e9I",
    "sourceFile": "受付カードGoogle Sheet／拡張機能→Apps Script",
    "spreadsheetId": "16K335J5meUGgGPFBZzRnDfFQb_Pzh8WtwmKZjWC1e9I",
    "appsScriptType": "バインド型（Google Sheetの拡張機能から開く）",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "Google Sheet・付属Apps Script確認済",
      "lastVerified": "2026-07-21",
      "verifyMethod": "指定Google Sheetと「拡張機能→Apps Script」を確認",
      "changeRule": "Google Sheetと付属Apps Scriptを同じシステムとして管理し、確定情報を要確認へ戻さない"
    },
    "links": [
      {
        "group": "利用する",
        "label": "受付カード読み取りを開く",
        "url": "https://docs.google.com/spreadsheets/d/16K335J5meUGgGPFBZzRnDfFQb_Pzh8WtwmKZjWC1e9I/edit?gid=388967979#gid=388967979"
      },
      {
        "group": "管理する",
        "label": "受付カードGoogle Sheetを開く",
        "url": "https://docs.google.com/spreadsheets/d/16K335J5meUGgGPFBZzRnDfFQb_Pzh8WtwmKZjWC1e9I/edit?gid=388967979#gid=388967979"
      },
      {
        "group": "管理する",
        "label": "付属Apps Scriptを開く（拡張機能）",
        "url": "https://docs.google.com/spreadsheets/d/16K335J5meUGgGPFBZzRnDfFQb_Pzh8WtwmKZjWC1e9I/edit?gid=388967979#gid=388967979"
      }
    ],
    "sheetUrl": "https://docs.google.com/spreadsheets/d/16K335J5meUGgGPFBZzRnDfFQb_Pzh8WtwmKZjWC1e9I/edit?gid=388967979#gid=388967979"
  },
  {
    "id": "past-exams",
    "name": "過去問保管DB",
    "category": "生徒・指導管理",
    "status": "本番",
    "summary": "定期テスト過去問・解答PDFの保管、検索、閲覧、提出管理",
    "users": "管理者・スタッフ・生徒",
    "github": "",
    "publicUrl": "https://stepkobetsu-hub.github.io/seiseki-kanri/past_exam_db.html",
    "publicLabel": "📚 過去問DBを開く",
    "storage": "Google Sheet＋Apps Script＋Google Drive",
    "notes": "検索・閲覧はログイン不要",
    "sourceType": "Apps Script＋Google Sheet＋Drive",
    "sourceOfTruth": "Apps Script本番デプロイ",
    "sourceFile": "Apps Scriptプロジェクト一式",
    "spreadsheetId": "要確認",
    "appsScriptType": "Apps Script Webアプリ",
    "deploymentId": "AKfycbxqxQOmtwe9lfB0Pt7dKzY3mC2sSRRVG9haDTMvOvrzyQNxhOYQLMTbnxAm9Im3LlXj",
    "version": "129",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "確認済",
      "lastVerified": "2026-07-20",
      "verifyMethod": "Version 129・本番URL・管理画面を確認",
      "changeRule": "デプロイIDを維持。通常・提出は認証不要、?mode=adminのみ認証"
    },
    "links": [
      {
        "group": "利用する",
        "label": "利用者向けアプリを開く",
        "url": "https://stepkobetsu-hub.github.io/seiseki-kanri/past_exam_db.html"
      }
    ]
  },
  {
    "id": "step-message",
    "name": "STEP配信システム",
    "category": "運営・連絡管理",
    "status": "本番",
    "summary": "保護者・生徒へのメール配信",
    "users": "管理者・スタッフ",
    "github": "https://github.com/stepkobetsu-hub/step-message-center",
    "publicUrl": "https://stepkobetsu-hub.github.io/step-message-center/",
    "storage": "Google Sheet＋Brevo",
    "notes": "共通不達メール追跡を確認中",
    "sourceType": "GitHub＋Google Sheet＋Brevo",
    "sourceOfTruth": "https://github.com/stepkobetsu-hub/step-message-center",
    "sourceFile": "リポジトリ内一式",
    "spreadsheetId": "要確認",
    "appsScriptType": "要確認",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "要確認",
      "lastVerified": "2026-07-20",
      "verifyMethod": "GitHub本番ブランチと公開URLを照合",
      "changeRule": "Brevoキー等の秘密情報はポータルへ記載しない"
    },
    "links": [
      {
        "group": "利用する",
        "label": "利用者向けアプリを開く",
        "url": "https://stepkobetsu-hub.github.io/step-message-center/"
      },
      {
        "group": "管理する",
        "label": "GitHubを開く",
        "url": "https://github.com/stepkobetsu-hub/step-message-center"
      }
    ]
  },
  {
    "id": "delivery-failures",
    "name": "不達メール管理",
    "category": "運営・連絡管理",
    "status": "本番",
    "summary": "Brevo不達メールの確認・停止・再開・アーカイブ",
    "users": "管理者・スタッフ",
    "github": "https://github.com/stepkobetsu-hub/student-QR",
    "publicUrl": "https://stepkobetsu-hub.github.io/student-QR/delivery_failures.html?v=575679fd",
    "storage": "入退室ログ２内「不達メール管理」シート＋Brevo",
    "notes": "Google Sheetの所在は「入退室ログ２」で確定。同一ブック内の「不達メール管理」シートを使用。完全削除の実データテストは未実施",
    "sourceType": "GitHub＋Google Sheet＋Brevo",
    "sourceOfTruth": "Google Sheet: 1VyQ3O69PDArG2bJt_Qf347rlTwKfjqM6KPLDWqIPo6A／GitHub: stepkobetsu-hub/student-QR",
    "sourceFile": "delivery_failures.html／入退室ログ２内「不達メール管理」シート",
    "spreadsheetId": "1VyQ3O69PDArG2bJt_Qf347rlTwKfjqM6KPLDWqIPo6A",
    "appsScriptType": "student-QR側の関連処理",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "保存先確認済",
      "lastVerified": "2026-07-21",
      "verifyMethod": "公開ページ、student-QR、入退室ログ２内の「不達メール管理」シートを照合",
      "changeRule": "完全削除は実データテスト前に実施しない。保存先情報を要確認へ戻さない"
    },
    "links": [
      {
        "group": "利用する",
        "label": "不達メール管理を開く",
        "url": "https://stepkobetsu-hub.github.io/student-QR/delivery_failures.html?v=575679fd"
      },
      {
        "group": "管理する",
        "label": "入退室ログ２（不達メール管理）を開く",
        "url": "https://docs.google.com/spreadsheets/d/1VyQ3O69PDArG2bJt_Qf347rlTwKfjqM6KPLDWqIPo6A/edit?gid=0#gid=0"
      },
      {
        "group": "管理する",
        "label": "GitHubを開く",
        "url": "https://github.com/stepkobetsu-hub/student-QR"
      }
    ],
    "sheetUrl": "https://docs.google.com/spreadsheets/d/1VyQ3O69PDArG2bJt_Qf347rlTwKfjqM6KPLDWqIPo6A/edit?gid=0#gid=0",
    "sheetNames": [
      "不達メール管理"
    ]
  },
  {
    "id": "teacher-portal",
    "name": "講師ポータル",
    "category": "講師・勤務管理",
    "status": "本番",
    "summary": "講師向け各種アプリの入口",
    "users": "講師",
    "github": "https://github.com/stepkobetsu-hub/teacher-portal",
    "publicUrl": "https://stepkobetsu-hub.github.io/teacher-portal/",
    "storage": "GitHub Pages",
    "notes": "授業報告・出退くんQR・給与明細等を集約",
    "sourceType": "GitHub Pages",
    "sourceOfTruth": "https://github.com/stepkobetsu-hub/teacher-portal",
    "sourceFile": "リポジトリ内一式",
    "spreadsheetId": "",
    "appsScriptType": "",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "要確認",
      "lastVerified": "2026-07-20",
      "verifyMethod": "GitHub Pagesの公開ブランチと公開URLを照合",
      "changeRule": "各リンク先システムの正本は個別台帳で確認"
    },
    "links": [
      {
        "group": "利用する",
        "label": "ポータルを開く",
        "url": "https://stepkobetsu-hub.github.io/teacher-portal/"
      },
      {
        "group": "管理する",
        "label": "GitHubを開く",
        "url": "https://github.com/stepkobetsu-hub/teacher-portal"
      }
    ]
  },
  {
    "id": "teacher-master",
    "name": "講師マスター／給与明細",
    "category": "講師・勤務管理",
    "status": "本番",
    "summary": "講師情報・権限・給与明細データ",
    "users": "管理者・講師",
    "github": "",
    "publicUrl": "",
    "storage": "Google Sheet",
    "notes": "給与明細WebアプリのApps ScriptとURLを確認",
    "sourceType": "Google Sheet",
    "sourceOfTruth": "要確認",
    "sourceFile": "給与明細Webアプリ関連Apps Script",
    "spreadsheetId": "要確認",
    "appsScriptType": "要確認",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "要確認",
      "lastVerified": "2026-07-20",
      "verifyMethod": "講師マスターSheetと給与明細Webアプリを特定",
      "changeRule": "正本と本番URL確定前は修正しない"
    },
    "links": []
  },
  {
    "id": "qr-register",
    "name": "出退くんQR作成・読取",
    "category": "講師・勤務管理",
    "status": "本番",
    "summary": "生徒・講師QRの作成、登録、タブレットでの入退室読取",
    "users": "管理者",
    "github": "https://github.com/stepkobetsu-hub/student-QR",
    "publicUrl": "https://stepkobetsu-hub.github.io/student-QR/student_qr_register.html",
    "storage": "入退室ログ２（Google Sheet）",
    "notes": "保存先は「入退室ログ２」で確定。同じGoogle Sheet内にログ・不達メール管理などの関連シートがある。バインド型Apps Scriptはない",
    "sourceType": "GitHub＋Google Sheet",
    "sourceOfTruth": "Google Sheet: 1VyQ3O69PDArG2bJt_Qf347rlTwKfjqM6KPLDWqIPo6A／GitHub: stepkobetsu-hub/student-QR",
    "sourceFile": "student_qr_register.html／tablet_checkin.html／入退室ログ２",
    "spreadsheetId": "1VyQ3O69PDArG2bJt_Qf347rlTwKfjqM6KPLDWqIPo6A",
    "sheetUrl": "https://docs.google.com/spreadsheets/d/1VyQ3O69PDArG2bJt_Qf347rlTwKfjqM6KPLDWqIPo6A/edit?gid=0#gid=0",
    "sheetNames": [
      "ログ",
      "Webhook診断",
      "不達メール管理",
      "講師勤怠ログ",
      "ポイント履歴"
    ],
    "appsScriptType": "なし（このGoogle Sheetにはバインド型Apps Scriptなし）",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "確認済",
      "lastVerified": "2026-07-21",
      "verifyMethod": "QR作成ページ、tablet_checkin.html、入退室ログ２を照合",
      "changeRule": "QR作成・読取コードはstudent-QRを正本とし、保存先は入退室ログ２を使用"
    },
    "links": [
      {
        "group": "利用する",
        "label": "QR作成・登録アプリを開く",
        "url": "https://stepkobetsu-hub.github.io/student-QR/student_qr_register.html"
      },
      {
        "group": "利用する",
        "label": "タブレットQR読取アプリを開く",
        "url": "https://stepkobetsu-hub.github.io/student-QR/tablet_checkin.html"
      },
      {
        "group": "管理する",
        "label": "入退室ログ２を開く",
        "url": "https://docs.google.com/spreadsheets/d/1VyQ3O69PDArG2bJt_Qf347rlTwKfjqM6KPLDWqIPo6A/edit?gid=0#gid=0"
      },
      {
        "group": "管理する",
        "label": "GitHubを開く",
        "url": "https://github.com/stepkobetsu-hub/student-QR"
      }
    ]
  },
  {
    "id": "teacher-schedule",
    "name": "講師予定・夏休み出勤登録",
    "category": "講師・勤務管理",
    "status": "本番",
    "summary": "講師の出勤可能日登録・管理・時間割転記",
    "users": "講師・管理者",
    "github": "https://github.com/stepkobetsu-hub/teacher_schedule",
    "publicUrl": "https://stepkobetsu-hub.github.io/teacher_schedule/teacher_app.html",
    "storage": "Supabase＋Google Sheet",
    "notes": "類似Sheet 2件とsummer-teacherの関係を確認",
    "sourceType": "GitHub＋Supabase＋Google Sheet",
    "sourceOfTruth": "https://github.com/stepkobetsu-hub/teacher_schedule",
    "sourceFile": "teacher_app.html および関連コード",
    "spreadsheetId": "要確認",
    "appsScriptType": "要確認",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "要確認",
      "lastVerified": "2026-07-20",
      "verifyMethod": "GitHub Pages・Supabase・関連Sheetを照合",
      "changeRule": "類似Sheet 2件とsummer-teacherとの関係を確認してから修正"
    },
    "links": [
      {
        "group": "利用する",
        "label": "利用者向けアプリを開く",
        "url": "https://stepkobetsu-hub.github.io/teacher_schedule/teacher_app.html"
      },
      {
        "group": "管理する",
        "label": "GitHubを開く",
        "url": "https://github.com/stepkobetsu-hub/teacher_schedule"
      }
    ]
  },
  {
    "id": "billing",
    "name": "請求管理システム",
    "category": "経理・請求管理",
    "status": "本番",
    "summary": "請求作成・料金管理・兄弟割引・教材・模試・CSV出力・請求書PDF・メール送信を行うシステム",
    "users": "管理者",
    "github": "",
    "publicUrl": "https://script.google.com/macros/s/AKfycbxzkE1tQRyB_Ca4bfPKYWIkpTukIVPMWKf2ETE7yN7qROJk0VyOlvxaJ9GGI5p-6pGb/exec",
    "storage": "Google Sheet＋Apps Script",
    "notes": "本番運用中",
    "sourceType": "Google Sheetバインド型Apps Script",
    "sourceOfTruth": "Google Sheet: 1Xz_bNroUENVolHi-Ii7gDSXSLYmRBcNjqlvN0FiqBac",
    "sourceFile": "紐づくApps Scriptプロジェクト",
    "spreadsheetId": "1Xz_bNroUENVolHi-Ii7gDSXSLYmRBcNjqlvN0FiqBac",
    "appsScriptType": "バインド型Webアプリ",
    "deploymentId": "AKfycbxzkE1tQRyB_Ca4bfPKYWIkpTukIVPMWKf2ETE7yN7qROJk0VyOlvxaJ9GGI5p-6pGb",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "要確認",
      "lastVerified": "2026-07-20",
      "verifyMethod": "本番URL・デプロイ・SheetのApps Scriptを照合",
      "changeRule": "既存デプロイIDを不用意に変更しない"
    },
    "links": [
      {
        "group": "利用する",
        "label": "利用者向けアプリを開く",
        "url": "https://script.google.com/macros/s/AKfycbxzkE1tQRyB_Ca4bfPKYWIkpTukIVPMWKf2ETE7yN7qROJk0VyOlvxaJ9GGI5p-6pGb/exec"
      }
    ]
  },
  {
    "id": "contact",
    "name": "お問い合わせ管理",
    "category": "入塾・営業管理",
    "status": "本番",
    "summary": "お問い合わせの受信、自動返信、塾への通知、Google連絡先登録、週次確認",
    "users": "管理者",
    "github": "https://github.com/stepkobetsu-hub/step-form",
    "publicUrl": "https://stepkobetsu-hub.github.io/step-form/contact_form.html",
    "storage": "Google Sheet＋Apps Script＋Gmail＋Google Contacts",
    "notes": "Apps ScriptプロジェクトURLを台帳へ追加する",
    "sourceType": "Google Sheetバインド型Apps Script＋GitHub Pages",
    "sourceOfTruth": "Google Sheet: 18VKKfPZ_AE-j-mz995Aru0KLLsWsFdoizBXH9PTYyaA",
    "sourceFile": "問い合わせ.gs（フォーム処理・Google Contact登録）／contact_form.html（公開フォーム）",
    "spreadsheetId": "18VKKfPZ_AE-j-mz995Aru0KLLsWsFdoizBXH9PTYyaA",
    "sheetNames": [
      "お問い合わせ",
      "反応リスト"
    ],
    "appsScriptType": "バインド型",
    "githubSource": "https://github.com/stepkobetsu-hub/step-form",
    "maintenanceEmail": "mintcocoajasmine@gmail.com",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "確認済",
      "lastVerified": "2026-07-20",
      "verifyMethod": "Sheetの拡張機能→Apps Scriptで問い合わせ.gsを確認し、フォーム送信・自動返信・Contact更新をテスト",
      "changeRule": "同一電話番号は既存Contact名を最新版へ更新。週次確認先はmintcocoajasmine@gmail.com"
    },
    "links": [
      {
        "group": "利用する",
        "label": "利用者向けアプリを開く",
        "url": "https://stepkobetsu-hub.github.io/step-form/contact_form.html"
      },
      {
        "group": "管理する",
        "label": "GitHubを開く",
        "url": "https://github.com/stepkobetsu-hub/step-form"
      }
    ]
  },
  {
    "id": "step-hub",
    "name": "STEP統合管理ポータル",
    "category": "共通基盤",
    "status": "本番",
    "summary": "全システム・Google Sheet・Apps Script・GitHub・公開URLの統合入口",
    "users": "管理者",
    "github": "https://github.com/stepkobetsu-hub/step-hub",
    "publicUrl": "https://stepkobetsu-hub.github.io/step-hub/system/",
    "storage": "GitHub Pages",
    "notes": "この初版をstep-hubへ配置して再利用する想定",
    "sourceType": "GitHub Pages",
    "sourceOfTruth": "https://github.com/stepkobetsu-hub/step-hub",
    "sourceFile": "system/data.js および system/配下",
    "spreadsheetId": "",
    "appsScriptType": "",
    "maintenance": {
      "owner": "STEP管理者",
      "latestStatus": "確認済",
      "lastVerified": "2026-07-20",
      "verifyMethod": "GitHub Pagesの公開ブランチと公開URLを照合",
      "changeRule": "新システム完成時はsystem/data.jsと正本情報を同時更新"
    },
    "links": [
      {
        "group": "利用する",
        "label": "利用者向けアプリを開く",
        "url": "https://stepkobetsu-hub.github.io/step-hub/system/"
      },
      {
        "group": "管理する",
        "label": "GitHubを開く",
        "url": "https://github.com/stepkobetsu-hub/step-hub"
      }
    ]
  }
];
