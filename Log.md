# Ruby on Rails + Spring Boot 演習

## 2024年6月16日
index.html.erb
~~~ html
<div class="title-container">
  <h1 class="title">User</h1>
</div>

<% @users.each do |user| %>
  <%= link_to "./detail?name=#{user[:name]}&age=#{user[:age]}", class: "user-container-link" do %>
    <div class="user-container">
      <p>名前: <span class="bold"><%= user[:name] %></span></p>
      <p>年齢: <span class="bold"><%= user[:age] %></span></p>
    </div>
  <% end %>
<% end %>

<p><%= link_to "topに戻る", "/" %></p>

<p>それとも、<%= link_to "Google", "https://www.google.com/"%>を見る？<%= link_to "Yahoo", "https://www.yahoo.co.jp/"%>を見る?</p>
~~~

detail.html.erb
~~~ html
<div class="title-container">
  <h1 class="title">User Detail</h1>
</div>

<p><span class="bold"><%= @name %>(<%= @age %>)</span>のページです。</p>

<p><%= link_to "ユーザ一覧に戻る", "./index" %></p>
~~~

## 2024年6月9日

index.html.erb
~~~ html
<h1>User</h1>

<% @users.each do |user| %>
  <%= link_to "./detail", class: "user-container-link" do %>
    <div class="user-container">
      <p>名前: <span class="bold"><%= user[:name] %></span></p>
      <p>年齢: <span class="bold"><%= user[:age] %></span></p>
    </div>
  <% end %>
<% end %>

<p><%= link_to "topに戻る", "/" %></p>

<p>それとも、<%= link_to "Google", "https://www.google.com/"%>を見る？<%= link_to "Yahoo", "https://www.yahoo.co.jp/"%>を見る?</p>
~~~
