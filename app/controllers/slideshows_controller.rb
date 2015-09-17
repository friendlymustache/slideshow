class SlideshowsController < ApplicationController
	def create
		slideshow = Slideshow.create(slideshow_params)
		render json: slideshow
	end

	def index
		render json: Slideshow.where(code: params[:code]), each_serializer: SlideshowSparseSerializer		
	end

	def show
		render json: Slideshow.find_by_edit_code(params[:id])		
	end

	# def go_to_link
	# 	slideshow = Slideshow.find_by_code(params[:code])
	# 	redirect_to slideshow.link.url
	# end

private
	def slideshow_params
	    params.require(:slideshow).permit!
	end	
end
