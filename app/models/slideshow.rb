class Slideshow < ActiveRecord::Base
	has_many :links
	belongs_to :link

before_create :generate_codes

  def generate_codes
      self.code = generate_code(:code)
      self.edit_code = generate_code(:edit_code)
  end

  def generate_code(symbol)
	  loop do
	    token = Devise.friendly_token
	    break token unless Slideshow.where(symbol => token).first
	  end
  end	  

end
