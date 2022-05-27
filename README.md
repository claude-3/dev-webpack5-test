# webpack 使用時のメモ

## ルール

- css は js から import して使う
- TypeScript を使う場合は、`.eslintrc.js` ファイル内の `useTypeScript` の値を `true` にする

## ターゲットブラウザ

とりあえず IE11 対応にしておく(完全対応は面倒なのでしない)

▼Autoprefixer、Babel：
package.json > `browserslist`

▼TypeScript：
tsconfig.json > `target`

## 導入した機能

- prettier は VSCode で使う
- sass 変換
- ベンダープレフィックス(IE11)
- css を別ファイルで出力（キャッシュを生かすため）
- html へのスクリプトタグ自動挿入
- babel（ES5）
  - オプションは webpack の config に記述
- 開発用、商用（本番用）で分ける
  - `webpack.common.js`：共通設定
  - `webpack.dev.js`：開発用設定
  - `webpack.prod.js`：商用設定
- 開発用はソースマップを出す
- 商用ではファイル名にハッシュ値をつける
- ビルド時に以前のファイルを削除する
- エントリポイントを自動生成
- ローカルサーバー機能
- splitChunks で jQuery などを分離（vendors.js としてまとめる）

- ESlint
  - `.eslintrc.js` ( `useTypeScript` で JS と TS を使い分ける)
  - `tsconfig.eslint.json`：TS ファイルを使う場合
- TypeScript
  - `tsconfig.json`
