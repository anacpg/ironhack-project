class CreateRoutes < ActiveRecord::Migration[5.0]
  def change
    create_table :routes do |t|
      t.string :name
      t.string :neighborhood
      t.integer :score, default: 0

      t.timestamps
    end
  end
end
