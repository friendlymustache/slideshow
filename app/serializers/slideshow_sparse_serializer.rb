class SlideshowSparseSerializer < ActiveModel::Serializer
  """
  Sparse slideshow serializer. Used to render only the necessary
  information for students (slideshow's current link)
  """
  attributes :id, :code
  has_one :link
  embed :ids, include: true, embed_in_root: true  
end

