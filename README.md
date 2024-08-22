# 簡易行先表示板

## お手軽方法
`Visual Studio Code`の`Go live`機能を使うか、以下のnode.jsを使ったサーバーを起動して使う。

## サーバー作成する場合
```
npm init
npm i nodemon express
```


`package.json`を修正し、`app.js`でサーバーを作り、起動



ソース出現防止のために
id="app"と同じタグに`v-cloak`を設定
```html
<div v-cloak id="app" style="padding: 25px 50px 25px 50px;">
    <!-- 中略 -->
</div>
```
cssに以下を記述することでコンパイル前には何も表示しなくなる。
```css
[v-cloak] {
    display: none;
}
```

