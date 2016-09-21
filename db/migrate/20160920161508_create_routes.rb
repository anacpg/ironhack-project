class CreateRoutes < ActiveRecord::Migration[5.0]
  def change
    create_table :routes do |t|
      t.string :name
      t.references :neighborhood, foreign_key: true
      t.integer :score, default: 0

      t.timestamps
    end
  end
end
