# Ruby on Rails + Spring Boot 演習

## 環境構築
今回の課題は以下のバージョンで動いています。好きな方法でインストールしてから取り組んでください。

~~~
ruby 3.2.4
Rails 7.1.3.2
~~~

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
