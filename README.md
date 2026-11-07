# ProjectAutomata-Web

ヒーロー領域は画面幅 768px 以上で左右 3:2、それ未満では縦並びで表示します。
`App.tsx` は共通のヘッダー・フッターと `Outlet` を持ち、ホーム・About・各仮ページを同じデザインで表示します。

Button の高さは `size` で指定します。`py-*` に大きい値を指定すると、その余白が高さの下限になります。

faviconは `public/favicon.svg` のLucide Settings（歯車）です。OSのカラースキームに合わせて黒・白を切り替えます。

## ページとルーティング

React Router の `BrowserRouter` を使用し、`/` はホーム、`/about` はAboutページを表示します。
`/news`・`/research`・`/production`・`/contact` はAboutと同じ2カラムの仮ページです。本文は `src/pages/placeholder.tsx` を共用し、準備中のメッセージを表示します。
ヘッダーの各メニューとホームの「About us」から遷移でき、ロゴからホームへ戻れます。
ヘッダーの現在のページは `bg-muted` と上向きの三角形で示し、`aria-current="page"` を付けます。ホームに対応するナビゲーション項目はありません。
ルート定義は `src/main.tsx` にあります。
HTMLタイトルは各ページの `<title>` をReact 19がheadへ配置し、`Project Automata | ページ名` と表示します。ホームは `Home`、エラー画面はステータス番号です。
AboutのSNSリンク先は `src/pages/about.tsx` の `MidorinSocialIcons` 内にある各 `<a>` の `href` で指定します。現在は各サービスのトップページです。

## エラー表示

`src/components/error-page.tsx` の `ErrorPage` に `status` を渡すと、404・5xx・その他のエラーを表示できます。
定義済みの6ページ以外のパスでは React が404画面を表示します。
`ErrorBoundary` は子コンポーネントの描画エラーを捕捉し、500画面を表示します。エラーログはReact標準の処理に任せます。
イベントハンドラー・非同期処理のエラーやAPIの失敗レスポンスは、自動では捕捉しません。呼び出し側で処理し、必要に応じて `ErrorPage` にステータスを渡してください。
画面・ErrorBoundary・テストは `src/components/error-page.tsx` に集約しています。`npm test` でテストモードの検証を実行します。

開発・プレビューは SPA フォールバックを使用します。本番でも未知のページパスにアプリのHTMLを配信する設定が必要です。
このクライアント実装はHTTPステータスを変更しないため、エラー画面でもHTMLの応答は通常200です。
実際の404・500ステータスが必要な場合は、サーバーで対応するステータスとアプリのHTMLを返す連携が必要です。
サーバー停止やJavaScriptの読み込み失敗は、この画面では処理できません。
