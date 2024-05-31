# Ruby on Rails + Spring Boot 演習

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