class Api::NeighborhoodsController < ApplicationController

  def show
    neighborhood = Neighborhood.find_by(name: params[:name])
    render json: neighborhood
  end
end
