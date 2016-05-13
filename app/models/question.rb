class Question < ActiveRecord::Base
validates :name, :description, presence: true
end
