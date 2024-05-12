class UserController < ApplicationController
  def index
    @users = [
      "Tanaka",
      "Takahashi",
      "Yamada",
      "Suzuki"
    ]
  end
end
