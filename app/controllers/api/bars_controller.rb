class Api::BarsController < ApplicationController

  def index
    neighborhood = Neighborhood.find_by(name: params[:neighborhood])
    bars = neighborhood.bars

    render json: bars
  end

  def show
    bar = []
    bar.push(Bar.find(params[:id]))

    render json: bar
  end

  def bars_route
    bars = Route.find(params[:id]).bars
    render json: bars
  end
end
