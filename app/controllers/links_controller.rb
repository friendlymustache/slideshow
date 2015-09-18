class LinksController < ApplicationController
	skip_before_filter :verify_authenticity_token	
	def create		
		# Find slideshow with passed-in edit code
		slideshow = Slideshow.find_by_edit_code(link_params[:edit_code])
		# Create a new link under the current slideshow
		link = Link.new(link_params.except(:edit_code))
		link.slideshow_id = slideshow.id
		link.save
		# Render the newly-created link
		render json: link
	end

	def destroy
		authenticate_with_http_token do |token, options|
			slideshow = Slideshow.find_by_edit_code(token)					
			link = Link.find(params[:id])
			if link.slideshow == slideshow
				link.destroy
			end
			render json: link
		end
	end

private
	def link_params
		params.require(:link).permit(:url, :title, :edit_code, :slideshow_id)
	end	
end
