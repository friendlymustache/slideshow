class CreateSlideshows < ActiveRecord::Migration
  def change
    create_table :slideshows do |t|
      t.string :name
      t.string :code
      t.string :edit_code
      t.integer :link_id

      t.timestamps null: false
    end
  end
end
