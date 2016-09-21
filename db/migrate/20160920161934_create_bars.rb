class CreateBars < ActiveRecord::Migration[5.0]
  def change
    create_table :bars do |t|
      t.string :name
      t.text :description
      t.string :image
      t.decimal :lat
      t.decimal :lng
      t.references :route, foreign_key: true

      t.timestamps
    end
  end
end
