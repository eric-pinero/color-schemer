class CreateSchemeSwatches < ActiveRecord::Migration[5.2]
  def change
    create_table :scheme_swatches do |t|
      t.integer :color_id, null: false
      t.integer :scheme_id, null: false
      t.timestamps
    end
    add_index :scheme_swatches, :color_id
    add_index :scheme_swatches, :scheme_id
  end
end
