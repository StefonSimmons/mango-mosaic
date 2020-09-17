class AddPinnedToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :is_pinned, :boolean
  end
end
