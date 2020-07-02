class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :main_title
      t.string :subtitle
      t.string :img_URL
      t.string :content
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
