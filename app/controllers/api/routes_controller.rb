class Api::RoutesController < ApplicationController

  def index
    routes = Route.where(neighborhood: params[:neighborhood])
    # routes = Route.where(neighborhood: 'Centro')
    render json: routes
  end

  def show
  end

end
