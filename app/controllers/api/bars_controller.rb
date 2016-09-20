class Api::BarsController < ApplicationController

  def index
    route = Route.find(params[:route_id])
    bar_list = route.bars
    render json: bar_list    
  end
end
