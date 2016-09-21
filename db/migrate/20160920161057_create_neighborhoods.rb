class CreateNeighborhoods < ActiveRecord::Migration[5.0]
  def change
    create_table :neighborhoods do |t|
      t.string :name
      t.decimal :lat, {precision: 15, scale: 11}
      t.decimal :lng, {precision: 15, scale: 11}

      t.timestamps
    end
  end
end
