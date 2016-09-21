class RemoveColumnRoutes < ActiveRecord::Migration[5.0]
  def change
    remove_column :routes, :neighborhood
  end
end
