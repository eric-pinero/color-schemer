class CreateSchemeTable < ActiveRecord::Migration[5.2]
  def change
    create_table :schemes do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
    end
    add_index :schemes, :owner_id
  end
end
