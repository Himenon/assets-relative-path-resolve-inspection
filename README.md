# 相対パスについて検証する

## 準備

```bash
git clone https://github.com/Himenon/assets-relative-path-resolve-inspection.git
cd assets-relative-path-resolve-inspection
yarn
```

## 検証内容

2つのwebサーバーを立ち上げる

```bash
# サーバーA HTML配信として利用
# yarn run:assets-server
http://localhost:10010
# サーバーB css/imageの配信として利用
# yarn run:web-server
http://localhost:10020
```

### CSS内部の相対パスはサーバーA、Bのどちらを向くか

ブラウザはサーバーA(<http://localhost:10010>)にアクセスをする

**結果** サーバーBに向く

```
http://localhost:10010
-> http://localhost:10020/assets/stylesheets/main.css
-> ../../assets2/images/express-logo.png
-> http://localhost:10020/assets2/images/express-logo.png
```

