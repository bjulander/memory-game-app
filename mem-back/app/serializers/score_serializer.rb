class ScoreSerializer < ActiveModel::Serializer
    attributes :id, :time, :created_at, :user
  
    belongs_to :user
  end
  