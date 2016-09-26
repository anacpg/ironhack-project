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

  def create
    route = Route.find(params[:id])
    bar = route.bars.create(bar_params)
    #neighborhood_id: neighborhood.ids)
    #bar.update(neighborhood_id: neighborhood.ids)

    render json: bar
  end

  private
    def bar_params
      params.require(:bar).permit(:name, :description, :lat, :lng, :neighborhood_id)
    end
end
