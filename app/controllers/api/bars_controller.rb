class Api::BarsController < ApplicationController

  def index
    neighborhood = Neighborhood.find_by(name: params[:neighborhood])
    bars = neighborhood.bars

    render json: bars
  end
end
