# STEP塾生アプリ（step-hub）開発記録

## 2026-08-01 ポイント残高表示の接続確認

- 正式運用開始日: 2026-08-03
- ポイント共通正本: 入退室ログ２
- スプレッドシートID: `1VyQ3O69PDArG2bJt_Qf347rlTwKfjqM6KPLDWqIPo6A`
- 使用シート: `ポイント履歴`
- 既存5列: 日付 / 生徒番号 / 生徒氏名 / ポイント / 理由
- 残高計算: 同一生徒番号のポイント列合計
- 自動入退室ポイント、特別ポイント、ポイント使用（負数）はすべて同じポイント履歴へ記録する。
- 生徒名ではなく生徒番号で結合する。
- QR入退室記録は同じスプレッドシートの `ログ` に保存する。
- 旧ファイル「入退室ログ」（ID先頭 `1zNK`）は今後使用しない。削除せず旧ファイルとして保管する。
- 本番開始前にポイント履歴のテスト明細を削除し、見出し・列構成・書式を維持した。
- 管理画面: https://stepkobetsu-hub.github.io/student-QR/points_manager.html
- Apps ScriptプロジェクトID: `1ZFzVbJM15igFE7InsX1fu-FlNrYUY45vviozJP0k1uVXy_HvmGfseZ22`
- デプロイID: `AKfycbw8L36Fj8SKtvNHQBi41FMqAPvDLGAdu1bbLxvd-78A8dFUOkWGnYRE-8PRNq7QZOl70w`

秘密値やScript Propertiesの値はこの記録へ保存しない。

## 2026-08-02 共通認証修正・E2E試験・最終初期化

- スタッフ用アプリからポイント管理へ渡す正本トークンは `stepStaffAppAuth.systemPortalSessionToken`。
- ポイント管理APIは、スタッフ認証正本の `verifySystemPortal` をサーバー間で呼び、トークンの真正性・期限・ログアウト状態・ログインID・AKを検証する。ブラウザー保存の氏名・AK・期限は認可に使用しない。
- 別Apps Scriptプロジェクトの `CacheService` / `PropertiesService` を共通セッション保存先として扱わない。
- Apps Script: v33、既存デプロイIDを維持。
- ダミー生徒1001で、特別ポイント、残高超過使用（下限0）、二重送信防止、自動ポイント（入室0・9分0・11分+1・同日再来0）を確認。
- 管理画面とSTEP塾生アプリは、同じQR Apps Scriptの同じ `ポイント履歴` を生徒番号で合計する。試験時の正本合計と各返却経路が一致することを確認した。
- 不達イベントは不達メール管理へ1件記録、正常配信イベントでは追加0件を確認。
- 試験完了後、`ログ`、`不達メール管理`、`ポイント履歴`、`ポイント操作ログ` の試験値だけを削除。4シートともデータ0件、見出し・列構造を維持。
- GitHub正本コミット: student-QR `96109e8` / `6316bfc` / `505d852` / `85222d3`、seiseki-kanri `80394d2`。

秘密値・署名キー・Script Propertiesの値はGitHub、HTML、APIレスポンスへ保存しない。
