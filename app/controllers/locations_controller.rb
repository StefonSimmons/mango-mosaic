class LocationsController < ApplicationController

  def index 
    @location = Location.all
    render json: @location
  end

  def create
    @new_location= Location.create(location_params)
    if @new_location.save
      render json: @new_location, status: :created
    else
      render json: @new_location.errors, status: :unprocessable_entity
    end
  end

  private

  def location_params
    params.require(:location).permit(:city, :state, :country)
  end

end
