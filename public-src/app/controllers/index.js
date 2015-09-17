import Ember from 'ember';

export default Ember.Controller.extend({

    actions : {
        makeSlideshow: function() {
          var slideshow = this.store.createRecord('slideshow', {name: 'test'});
          self = this;
          slideshow.save().then(function(slideshowModel) {
            self.transitionTo('edit-slideshow', slideshowModel.get('edit_code'));
          });
        }
    }
});
