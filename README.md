# Ruby on Rails + Spring Boot 演習

## 2024年7月21日 演習

### 1. 関数のリファクタリング
現状、演算処理は4つの関数に分けられ、以下のようにそれぞれイベントを追加している。
```javascript
// クリックイベントリスナーを設定
plusBtn.addEventListener("click", add);
minusBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);
```

`add`、`sub`、`mul`、`div`の4つの関数は共通する部分も多く、別々に定義するのは冗長です。
そのため、これらの関数を1つの関数にまとめ、引数を追加して、演算子に応じた処理を行うようにしてください。
```javascript
// クリックイベントリスナーを設定
plusBtn.addEventListener("click", () => calc("add"));
minusBtn.addEventListener("click", () => calc("sub"));
multiplyBtn.addEventListener("click", () => calc("mul"));
divideBtn.addEventListener("click", () => calc("div"));
```

`add`、`sub`、`mul`、`div`の4つを削除し、`calc`関数を考えて定義してください。


### 2. 計算結果の履歴表示
現状、計算結果は`id="result"`のdivタグに1つだけ表示されています。
これを、ページ読み込み時からの計算結果が全て履歴として表示されるようにしてください。

以下は、「＋」、「-」、「×」、「÷」、「＋」の順にボタンを押した際の結果です。

![image](https://github.com/user-attachments/assets/7050ad11-765b-4879-bb0a-6a5628f66d84)



### 3. 履歴の表示形式
履歴が少し見づらいため、以下のように答えの部分だけ太字になるようにしましょう。

![image](https://github.com/user-attachments/assets/700b61ed-bbd8-4aca-80a9-c92bef20af52)


## 2024年7月15日 演習

### 1. ページの作成
新しいページとして、電卓のページ(`calc.html`)を作成し、`index.html`と同じディレクトリに配置してください。

ファイルの内容は以下のテンプレートに加えて、下記の処理を追加してください。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
<header>
    <h1 class="header-title">Homework4</h1>
    <ul class="header-nav">
        <li><a href="./index.html">User</a></li>
        <li><a href="./detail.html">User Detail</a></li>
        <li><a href="./calc.html">Calculator</a></li>
    </ul>
</header>

<div class="title-container">
    <h1 class="title" id="title">Calc</h1>
</div>

<p>数値を入力</p>
<div class="calculator">
    <input type="number" id="num1">
    <input type="number" id="num2">
</div>

<p>演算子を選択</p>
<div class="calc-button-container">
    <button id="plusBtn">+</button>
    <button id="minusBtn">-</button>
    <button id="multiplyBtn">×</button>
    <button id="divideBtn">÷</button>
</div>

<p>結果</p>
<div id="result" class="result"></div>
</body>
</html>
```

追記する処理
- タブに表示されるタイトルを`電卓`に変更
- `sytle.css`を読み込む
- `Calc.js`を読み込む

### 2. 演算処理の作成
現状、数値を2箇所に入力した後、`＋`ボタンを押すと、以下のように合計値が表示されるようになっています。

![image](https://github.com/user-attachments/assets/1a3e4df9-3c62-45ce-9214-b233aff196da)

`-`, `×`, `÷`ボタンに関しても押した際にそれぞれの計算結果が表示されるようにしてください。


### 3. エラー処理の作成
現状、数値を入力せずにボタンを押しても何も起きません。
ボタンを押した際に数値に不備があると、以下のように結果の欄に`数値を入力してください`とエラーメッセージが表示されるようにしてください。

![image](https://github.com/user-attachments/assets/4b972bec-213c-444a-b3ea-fb7fae41b10e)




## 2024年7月7日 課題

今回から、Rubyを辞め、html, css, javascriptのみでの開発に移行します。
そのため、全ての作業を`_withoutRuby`ディレクトリ内部で完結してください。

### 1. css, JavaScriptの読み込み
以前までフレームワークを使用していたため、cssやJavaScriptの読み込みが自動で行われていました。

通常は自分でパスを指定して読み込む必要があります。

`index.html`を参考にして、`detail.html`内でもcssとJavaScriptを読み込むようにしてください。

この時点でページの見た目が前回と同様になったことを確認してください。

### 2. ページタイトルの編集
htmlファイルでは、`<head>`タグ内で様々なプロパティを設定することができます。

例えば、`<title>`タグを使用することで、タブに表示されるタイトルを変更できます。現状では下記のように`Homework4`となっています。

![image](https://github.com/hal0309/teach-homework4/assets/133964545/03f12c64-d627-4a0e-b6b5-e5ad43509960)


`User`ページではタイトルを`ユーザー一覧`に、`Detail`ページではタイトルを`ユーザー詳細`に変更してください。

### 3. JavaScriptの基礎
JavaScriptを使用して、ページ読み込み時に現在時刻を動的に取得してください。

`index.html`の下部にある、

~~~ html
<p>今の時間は<span id="time">未指定</span>です。</p>
~~~

の、idを用いて、Javascriptでspanタグを指定し、内部の文字列を現在時刻に置き換える。

Javascriptでidを基にオブジェクトを指定するには以下の様に記述します。
~~~ javascript
val element = document.getElementById('hoge');
~~~

指定したオブジェクトの中身を変更するには以下の様に記述します。
~~~ javascript
element.innerHTML = "hogehoge";
~~~

結果として以下のようになります。
![image](https://github.com/hal0309/teach-homework4/assets/133964545/c12c7e15-5305-43fb-8688-221452125094)

### 4. 成果物
今回のページ全体は以下のようになっていることを確認してください。


| `user/index`                                                                                               | `user/detail`                                                                                              |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| ![image](https://github.com/hal0309/teach-homework4/assets/133964545/f704b9ad-e1f2-4efc-a931-841fd6ab6b46) | ![image](https://github.com/hal0309/teach-homework4/assets/133964545/9b260d56-b7f9-43e4-afd0-7bbcb4cd567d) |
|


## 2024年6月31日 課題

### 1. ヘッダーの作成
すべてのページに共通するヘッダーを作りたい。`applicaton.html.erb`を編集すると、すべてのページの共通部分を編集することができる。

現状、どのページを開いても以下のようなヘッダーが追加されるようになっています。

![image](https://github.com/hal0309/teach-homework4/assets/133964545/8b5be57f-c830-4ee7-8955-c7f7bb47f9a0)

`application.html.erb`やスタイルシートを編集することで、以下のように、ヘッダーから、topページ、ユーザーページ、ユーザー詳細ページへ飛べるようにしてください。

リンクは右詰めに3つ、以下の画像のように配置してください。

![image](https://github.com/hal0309/teach-homework4/assets/133964545/2af61867-db6e-4f3d-9a46-6bdfa779179e)

### 2. ユーザ詳細の例外検出
現状、ユーザ詳細ページにパラメータを指定せずにアクセスすると、以下のように`()のページです`となってしまう。
(例えば、ヘッダーのリンクからアクセスするとこうなる。)

![image](https://github.com/hal0309/teach-homework4/assets/133964545/88a0808a-ae18-4c43-a726-7f74475dc3b8)

ユーザ詳細ページにアクセスする際に、パラメータが指定されていない場合は、`未確認ユーザーのページです`と表示されるようにしてください。
(controllerの編集が必要です。)

![image](https://github.com/hal0309/teach-homework4/assets/133964545/9208bdec-cac8-4e95-9ce7-fabb898466b7)


### 3. 成果物
今回のページ全体は以下のようになっていることを確認してください。

| `user/index`                                                                                               | `user/detail`                                                                                              |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| ![image](https://github.com/hal0309/teach-homework4/assets/133964545/8eb78f21-c9a7-4c4f-bdc3-84b240deac7e) | ![image](https://github.com/hal0309/teach-homework4/assets/133964545/f3d0f0da-a29f-4fe7-a932-08621ae02f9c) |
|

## 2024年6月16日 課題

### 1. パラメータの受け取り
`/user/detail`が`name`パラメータを受け取り、表示されるようにしてください。

例えば、`/user/detail?name=Tanaka`というurlを直接入力した際に、`Tanakaのページです。`と表示されるようにしてください。  
尚、名前の部分は太字にしてください。

以下は、`/user/detail?name=Yamada`にアクセスした際の結果です。

![image](https://github.com/hal0309/teach-homework4/assets/133964545/60811a3e-edba-4697-b219-01e8034dcab0)


### 2. パラメータの受け渡し
`/user/index`の各ユーザ(`user-container`の部分)をクリックしたときに、`/user/detail`に遷移します。
その際に、クリックしたユーザ名が`name`パラメータとして渡されるようにしてください。

例えば、`Takahashi`をクリックした際に、`/user/detail?name=Takahashi`に遷移し、`Takahashiのページです。`と表示されるようにしてください。

### 3. パラメータの受け取り・受け渡し(2つ目)
同様にして、名前だけでなく年齢もパラメータとして渡されるようにしてください。その際、以下のように名前に付属して、年齢も表示されるようにしてください。

![image](https://github.com/hal0309/teach-homework4/assets/133964545/40f7c4a7-ef5d-4b85-99f4-c75e77a65a61)

### 4. オブジェクトの中央揃え
各ページのタイトル(User と User Detail)にスタイルを適用します。

具体的には、以下の条件を満たしてください。
* 画面の中央に配置
* 文字を囲むように1pxの黒い枠線
* 文字の左右と枠線の間に30pxの余白

![image](https://github.com/hal0309/teach-homework4/assets/133964545/df289205-284f-477a-ba39-f85d012e1953)

### 5. 成果物
今回のページ全体は以下のようになっていることを確認してください。

| `user/index`                                                                                               | `user/detail`                                                                                              |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| ![image](https://github.com/hal0309/teach-homework4/assets/133964545/341672f6-6dd6-4793-bb03-6e03bc25f1e8) | ![image](https://github.com/hal0309/teach-homework4/assets/133964545/4fe8bd35-ad2f-4af0-a067-ebf8c65ec927) |



## 2024年6月9日 課題

### 1. ユーザー詳細ページの作成
`/user/detail`にアクセスすると、ユーザーの詳細情報が表示されるページを作成してください。

尚、ページの内容は空っぽでいいので、`/user/detail`にアクセスすると、
`User Detail`というタイトルと、`ユーザー一覧へ戻る`というバックリンクが表示されるようにしてください。

見た目は、以下のようになり、`ユーザー一覧へ戻る`をクリックすると、`/user/index`に遷移するようにしてください。  
![image](https://github.com/hal0309/teach-homework4/assets/133964545/101eb73c-c48b-4559-be49-20b2acfdea1d)


### 2. ユーザー詳細ページへのリンク
`/user/index`の各ユーザ(`user-container`の部分)をクリックしたときに、`/user/detail`に遷移するようにしてください。


### 3. ホバー時のスタイル変更
`/user/index`の各ユーザ(`user-container`の部分)は現状クリックできる感じがしません。  
そのため、ホバーした際に背景色が`#eeffff`に変わるようにしてください。

また、ホバーしているとき以外も、色味や余計な線などが入っている可能性があるので、以下の画像のように
黒く、余計な線がないようにしてください。  
(カーソルが映っていませんが、Takahashiの上にカーソルがある状態です。)

![image](https://github.com/hal0309/teach-homework4/assets/133964545/c15acf8d-fa5e-4c8a-b851-6d0aa609f8b0)


### 4. 成果物
今回のページ全体は以下のようになっていることを確認してください。

| `user/index`                                                                                               | `user/detail`                                                                                              |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| ![image](https://github.com/hal0309/teach-homework4/assets/133964545/dfd47b43-ca5f-4853-90ed-0c891b019453) | ![image](https://github.com/hal0309/teach-homework4/assets/133964545/bb35512f-cecf-46b0-b69b-5d2d3d975110) |


## 2024年6月2日 課題

### 1. リンクの置換(link_to)
前回はaタグを用いてリンクを作成しました。
rialsでは基本的にaタグではなく、`link_to`メソッドを使用してリンクを作成します。  
`index.html.erb`内で、すべてのリンクを`link_to`メソッドを使用する形に置き換えてください。

見た目に変化はありません。

### 2. スタイルの適用(一部太字)
ユーザーリストの見た目に変化を加えましょう。`/user/index`と`style.css`を編集して、
名前と年齢が太字で表示されるようにしてください。

結果は以下のようになります。  
![image](https://github.com/hal0309/teach-homework4/assets/133964545/59ab612c-0d2e-4fcc-918c-7f422b191da5)

### 3. スタイルの適用(横並び)
ユーザーリストの見た目に変化を加えましょう。以前まで縦に並んでいたユーザーリストを横並びにしてください。

結果は以下のようになります。  
![image](https://github.com/hal0309/teach-homework4/assets/133964545/437eefde-a06e-414a-b6be-28b6b8e87f6b)


### 4. 成果物
今回のページ全体は以下のようになっていることを確認してください。

![image](https://github.com/hal0309/teach-homework4/assets/133964545/4c700c77-dcdf-42e4-a61a-2c4914e61c0b)

## 2024年5月17日 課題

### 1. ユーザーリストの表示(ハッシュオブジェクト)
`/user/index`を編集します。

前回の課題では、ユーザ名単体を表示するだけでしたが、今回はユーザ名と年齢を表示します。

ユーザーデータを管理するために、ハッシュオブジェクトを使用します。
ハッシュオブジェクトは、キーと値のペアを持つデータ構造です。
~~~
user = {
    name: "Tanaka",
    age: 11
}
~~~

値の取り出し方は、
~~~
user[:name]
~~~
のようにコロン付きでキーを指定することで取得できます。

`user_controller.rb`内で、ユーザデータを持つハッシュオブジェクトを作成しました。
`index.html.erb`内で、ユーザデータを取得して、すべてのユーザの名前と年齢を以下のように表示してください。

![image](https://github.com/hal0309/teach-homework4/assets/133964545/7deea485-9c2e-4a6a-a81c-1a4f0bd90dca)


### 2. リンクの追加
ページを移動するためのリンクを作成します。
TOPページへのリンクを作成したので、他のページへのリンクを作成してください。

今回は他のページがないので適当にGoogle(`google.com`)とYahoo(`yahoo.co.jp`)のトップページに飛ばしましょう。

以下のような状態を目指してください。

![image](https://github.com/hal0309/teach-homework4/assets/133964545/1665bb4c-ba10-492f-9c5f-9db3a02eea76)


### 3. 成果物
今回のページ全体は以下のようになっていることを確認してください。

![image](https://github.com/hal0309/teach-homework4/assets/133964545/8e1f97cd-5674-4424-848c-a79e735d007e)


## 2024年5月11日 課題

### 1. 実行環境のチェック
環境構築が済んだら、本ディレクトリで以下のコマンドを実行してください。
~~~
$ rails server
~~~
`localhost:3000`にアクセスして、以下の画面が表示されていればOKです。

![image](https://github.com/hal0309/teach-homework4/assets/133964545/5533346f-b5ee-44b6-af88-81b8d67a839e)

### 2. ユーザーリストの表示

`localhost:3000/user/index`にアクセスしてください。
現状は、ユーザ名として、`Tanaka`だけが表示されていると思います。  
これは、`user_controller.rb`の`index`メソッドで、`user`変数に`Tanaka`を代入しており、
`index.html.erb`で`user`変数を取得して表示しているためです。

課題では、`user_controller.rb`と`index.html.erb`を修正して、複数のユーザ名を表示させます。

まず、`user_controller.rb`内で、`users`変数を作成、以下のユーザ名を代入してください。
~~~
"Tanaka",
"Takahashi",
"Yamada",
"Suzuki"
~~~

その後、`index.html.erb`内で、`users`変数を取得して、すべてのユーザ名を表示してください。
条件としては、個々のユーザ名をdivタグで囲い、クラスは`username`としてください。

正しく実装した場合、以下のような表示になります。

![image](https://github.com/hal0309/teach-homework4/assets/133964545/959bfbd1-7a70-4efb-8980-943ff38ba127)


## 環境構築
今回の課題は以下のバージョンで動いています。好きな方法でインストールしてから取り組んでください。

~~~
ruby 3.2.4
Rails 7.1.3.2
~~~