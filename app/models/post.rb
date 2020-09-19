class Post < ApplicationRecord
  has_one_attached :img_URL

  has_many :comments, dependent: :destroy
  # belongs_to :user

end
