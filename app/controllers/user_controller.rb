class UserController < ApplicationController
  def index
    @user = "Tanaka"
    @user1 = "Takahashi"
    @user2 = "Yamada"
    @user3 = "Suzuki"
  end
end
