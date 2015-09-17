class LinkSerializer < ActiveModel::Serializer
  attributes :id, :url, :title, :slideshow_id
  embed :ids, include: true, embed_in_root: true    
end
