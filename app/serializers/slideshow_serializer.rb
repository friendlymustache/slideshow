class SlideshowSerializer < ActiveModel::Serializer
  '''
  Detailed slideshow serializer. Includes sensitive information
  about slideshow (like edit code, all links)
  '''
  attributes :id, :name, :code, :edit_code
  has_many :links
  has_one :link
  
  embed :ids, include: true, embed_in_root: true  
end

