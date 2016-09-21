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


end
