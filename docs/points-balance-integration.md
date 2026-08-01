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
