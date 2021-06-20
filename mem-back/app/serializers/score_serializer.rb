class ScoreSerializer < ActiveModel::Serializer
    attributes :id, :clicks, :created_at, :user
  
    belongs_to :user
  end
  