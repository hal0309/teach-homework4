# Ruby on Rails + Spring Boot 演習

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
