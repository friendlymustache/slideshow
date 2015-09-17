import Ember from 'ember';

export default Ember.Controller.extend({

    actions : {
        makeSlideshow: function() {
          var slideshow = this.store.createRecord('slideshow', {title: 'test'});

          slideshow.save().then(function(slideshowModel) {
            this.transitionTo('edit-slideshow', slideshowModel.get('edit_code'));
          });
        }
    }
});
