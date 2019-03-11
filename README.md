# gas-node

google script での開発環境のテンプレート

# Installation

```

npm install

```

# Usage

## google drive にアップロード

簡単なプロジェクトが src フォルダーに作ってあるので、以下のコマンドでビルドを実行する。

```

npm run build

```

google drive で、スクリプトを作成し、dist フォルダに appsscript.json を作成する。

gas-node フォルダー直下で、以下のコマンドを実行し、google drive にアップロードする。

.claspignore でアップロードするファイルを制御しています。


```

clasp push

```

## テスト

以下のコマンドでテストを実行

```

npm run test

```

## サーバー起動

以下のコマンドでサーバー起動

```

npm run start

```

リンクにアクセス (http://localhost:8080/) する。

# package

* react

ユーザーインターフェイスライブラリー

* mobx

redux の代わりに入れた、状態管理ライブラリー

* babel/polyfill

promise を使うためのライブラリー

* babel

ES6 のコンパイラ

* webpack

ソースコードを単一ファイルにするためのライブラリー

* html-webpack-plugin

html にjavascript を展開するライブラリー。これを使うか、script タグで囲うこと。

* babel-jest

テストライブラリー

* enzyme

リアクトのためのテストライブラリー
