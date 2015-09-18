import Ember from 'ember';

export default Ember.Controller.extend({

    actions : {
        makeSlideshow: function() {
          var slideshow = this.store.createRecord('slideshow', {name: this.get('title')});
          this.set('title', "");
          self = this;
          slideshow.save().then(function(slideshowModel) {
          	var slideshows = self.get('session.secure.slideshows');
          	if (Ember.isEmpty(slideshows)) { 
          		slideshows = [slideshowModel];
          	}
          	else {
          		slideshows.push(slideshowModel);
          	}
			self.get('session').authenticate('authenticator:slideshow-app-authenticator', {slideshows : slideshows});
            self.transitionTo('edit-slideshow', slideshowModel.get('edit_code'));
          });
        }
    }
});
