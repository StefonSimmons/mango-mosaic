class RemoveImgUrlFromPosts < ActiveRecord::Migration[6.0]
  def change
    remove_column :posts, :img_URL, :string
  end
end
