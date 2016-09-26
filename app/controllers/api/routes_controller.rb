class Api::RoutesController < ApplicationController

  def index
    #routes = Route.where(neighborhood: params[:neighborhood_id])
    neighborhood = Neighborhood.find_by(name: params[:neighborhood])
    bars = neighborhood.bars

    #Routes from the Selected neighborhood bars
    routes_id = bars.pluck(:route_id).uniq
    routes = Route.where("id IN (?)", routes_id)
    render json: routes
  end

  def show
  end

  def create
    route = Route.create(route_params)
    unless route.valid?
      render json: {error: "The name already exist "}, status: 404
      return 
    end
    render json: route
  end


  private
    def route_params
      params.require(:route).permit(:name)
    end
end
