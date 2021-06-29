class ScoresController < ApplicationController

    def index
        scores = Score.all
        render json: scores
    end

    def create
        user = User.find_by(id: params[:score][:user_id])
        score = Score.create(time: params[:score][:time], user: user)
        render json: {score: ScoreSerializer.new(score)}, status: :created
    end

end
