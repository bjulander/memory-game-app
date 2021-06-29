class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def create
    if params[:user] === ""
      user = User.create(name: "Unknown")
      render json: user
    else
      user = User.create(name: params[:user])
      render json: user
    end
  end
end
