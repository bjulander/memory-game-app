class User < ApplicationRecord
    has_many :scores

    validates_presence_of :name
end
