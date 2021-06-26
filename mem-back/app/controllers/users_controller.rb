class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def create
    user = User.new(name: params[:user])
    user.save
    render json: user
  end
end
