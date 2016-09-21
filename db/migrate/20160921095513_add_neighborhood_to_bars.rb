class AddNeighborhoodToBars < ActiveRecord::Migration[5.0]
  def change
    add_reference :bars, :neighborhood, foreign_key: true
  end
end
