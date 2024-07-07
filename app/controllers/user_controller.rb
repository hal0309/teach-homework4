class UserController < ApplicationController
  def index
    @users = [
      {
        name: "Tanaka",
        age: 11
      },
      {
        name: "Takahashi",
        age: 22
      },
      {
        name: "Yamada",
        age: 33
      },
      {
        name: "Suzuki",
        age: 44
      }
    ]
  end

  def detail
    @name = params[:name]
    @age = params[:age]

    if @name.nil? || @age.nil?
      @user_text = "未確認ユーザー"
      return
    end

    @user_text = "#{@name}(#{@age})"
  end

end
