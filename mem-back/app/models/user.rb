class User < ApplicationRecord
    has_many :scores

    validates_presence_of :name
    validates :name, uniqueness: { case_sensitive: false }
end
