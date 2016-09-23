class RoutesController < ApplicationController
  def index
    @neighborhoods = Neighborhood.all
  end

  def home
  end

  def new
    @neighborhoods = Neighborhood.all
    @route = Route.new
  end

  def create
    
  end
end
