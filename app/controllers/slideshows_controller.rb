class SlideshowsController < ApplicationController
	def create
		slideshow = Slideshow.create(slideshow_params)
		render json: slideshow
	end

	def index
		if params[:code]
			render json: Slideshow.where(code: params[:code]), each_serializer: SlideshowSparseSerializer
		else
			render json: Slideshow.where(edit_code: params[:edit_code])
		end
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
