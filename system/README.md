# STEP 統合管理ポータル（公開安全版）

更新日: 2026-07-20
公開URL: `https://stepkobetsu-hub.github.io/step-hub/system/`

## このページについて

個別指導STEPで利用する公開Webアプリと公開GitHubリポジトリの入口、概要、稼働状態を確認するための公開ページです。

Google Sheet編集URL、Apps Script編集URL、各種内部IDなどの管理用リンクは掲載しません。管理情報は非公開のSTEPシステム台帳で管理します。

## 新しいシステムを追加するときの項目

`data.js` の `window.STEP_ASSETS` に次の項目だけを登録します。

- `id`
- `name`
- `category`
- `status`
- `summary`
- `users`
- `publicUrl`
- `github`
- `storage`
- `notes`

## 秘密情報を登録しないルール

- Google Sheet編集URL・Sheet IDを登録しない
- Apps Script編集URL・プロジェクトIDを登録しない
- APIキー、パスワード、トークン、Script Propertyを登録しない
- Supabase URL、anon key、service role keyを登録しない
- 個人メールアドレス、内部管理者URL、ローカルPCパスを登録しない
- 非公開リポジトリURLを登録しない
- 公開WebアプリURLと公開GitHub URLだけをリンクとして登録する

Apps Script Webアプリとして一般公開するために必要な `https://script.google.com/macros/s/.../exec` 形式のURLは登録できます。
