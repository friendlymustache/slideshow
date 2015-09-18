import Ember from 'ember';

export default Ember.Component.extend({

  isCurrentLink: function() {
    return this.get('slideshow.link.id') == this.get('link.id');
  }.property('slideshow', 'link')

});