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
end
