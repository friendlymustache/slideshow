class Link < ActiveRecord::Base
	belongs_to :slideshow

before_create :format_url

    def format_url
    	if self.url.slice(0, 4) != "http"
    		self.url = "http://" + self.url
    	end
    end

end
