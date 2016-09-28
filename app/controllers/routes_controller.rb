class RoutesController < ApplicationController
  layout 'application', :except => :home

  def index
    @neighborhoods = Neighborhood.all
  end

  def home
    render layout:false
  end

  def new
    @neighborhoods = Neighborhood.all
    @route = Route.new
  end

  def create

  end
end
