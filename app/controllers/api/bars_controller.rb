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
    bar.update(image: "http://res.cloudinary.com/divgxbjh0/image/upload/v1474971344/bar1_w29aac.jpg")
    # params.inspect
    # public_id = "broutes_#{bar.id}_#{rand(0..1000)}_#{Time.now.to_i}"
    # result = Cloudinary::Uploader.upload(params[:image], {
    #   :public_id => public_id,
    #   :width => 200,
    #   :crop => :fit
    #   })
    #
    # bar.update(image: result['url'])

    # params[:images].each { |image|
    #           public_id = "broutes_#{@product.id}_#{rand(0..1000)}_#{Time.now.to_i}"
    #           result = Cloudinary::Uploader.upload(image, {
    #             :public_id => public_id,
    #             :width => 1200,
    #             :crop => :fit
    #             })
    #           @product.pictures.create(
    #             link: result['url'],
    #             public_id: result['public_id']
    #           )
    #         }


    #neighborhood_id: neighborhood.ids)
    #bar.update(neighborhood_id: neighborhood.ids)

    render json: bar
  end


  private
    def bar_params
      params.require(:bar).permit(:name, :description, :lat, :lng, :neighborhood_id)
    end
end
