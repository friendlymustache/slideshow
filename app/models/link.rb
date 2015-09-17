class Link < ActiveRecord::Base
	belongs_to :slideshow

before_create :format_url

    def format_url
    	self.url = 
    end

end
