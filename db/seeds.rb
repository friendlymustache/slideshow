# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

slideshow = Slideshow.create(name: "My first slideshow")

google = Link.create(title: "Google", url: "www.google.com", slideshow_id: slideshow.id)
reddit = Link.create(title: "Reddit", url: "www.reddit.com", slideshow_id: slideshow.id)

slideshow.link_id = reddit.id
slideshow.save

