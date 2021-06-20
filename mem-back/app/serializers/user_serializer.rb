class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :scores
  
    has_many :scores
  end
  