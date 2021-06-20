class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def create
        if(params[:user][:name].match)
            user = User.create(user_params)
            if user.valid?
              token = encode_token(user_id: user.id)
              render json: { user: UserSerializer.new(user)}, status: :created
            else
              render json: { user: {message: 'User already exists'} }, status: :not_acceptable
            end
        else
            render json: { user: {message: 'Failed to create user...'} }, status: :not_acceptable
        end
    end

    private

    def user_params
      params.require(:user).permit(:name, :password)
    end

end
