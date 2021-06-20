class ScoresController < ApplicationController

    def index
        scores = Score.all
        render json: scores.sort
    end

    def create
        user = User.find_by(id: params[:user_id])
        score = Score.create(clicks: params[:clicks], user: user)
        render json: {score: ScoreSerializer.new(score)}, status: :created
    end

end
