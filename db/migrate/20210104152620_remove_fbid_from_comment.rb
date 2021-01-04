class RemoveFbidFromComment < ActiveRecord::Migration[6.0]
  def change
    remove_column :comments, :fb_id, :string
  end
end
