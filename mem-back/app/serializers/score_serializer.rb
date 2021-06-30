class ScoreSerializer < ActiveModel::Serializer
    attributes :id, :time, :user
  
    belongs_to :user
  end
  