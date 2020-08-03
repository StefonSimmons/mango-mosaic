class Post < ApplicationRecord
  has_one_attached :img_URL

  has_many :comments
  belongs_to :user

end
