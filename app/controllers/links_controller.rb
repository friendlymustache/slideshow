class LinksController < ApplicationController
	def create		
		# Find slideshow with passed-in edit code
		slideshow = Slideshow.find_by_edit_code(edit_code)
		# Create a new link under the current slideshow
		link = Link.new(link_params.except(:edit_code))
		link.slideshow_id = slideshow.id
		link.save
		# Render the newly-created link
		render json: link
	end

private
	def link_params
		params.require(:link).permit(:url, :title, :edit_code)
	end	
end
