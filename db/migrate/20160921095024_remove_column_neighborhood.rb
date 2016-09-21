class RemoveColumnNeighborhood < ActiveRecord::Migration[5.0]
  def change
    remove_column :routes, :neighborhood_id
  end
end
