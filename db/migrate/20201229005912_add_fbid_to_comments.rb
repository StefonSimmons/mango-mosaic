class AddFbidToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :fb_id, :string
  end
end
