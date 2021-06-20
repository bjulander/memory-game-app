class User < ApplicationRecord
    has_many :scores

    validates_presence_of :name #, :password_digest
    validates :name, uniqueness: { case_sensitive: false }
end
