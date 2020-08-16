class CreateColors < ActiveRecord::Migration[5.2]
  def change
    create_table :colors do |t|
      t.string :name, null: false
      t.integer :red, null: false
      t.integer :green, null: false
      t.integer :blue, null: false
      t.integer :complement_id, null: false
    end
    add_index :colors, :complement_id
  end
end
