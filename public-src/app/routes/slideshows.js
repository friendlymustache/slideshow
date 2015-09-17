import Ember from 'ember';

/* Route for redirecting to the current link of a given slideshow
 * (intended for students) 
 */
export default Ember.Route.extend({

	/* Redirects to a specific slideshow in model hook, so if we
	 * already have model loaded and skip the model hook */	
	model: function(params) {
		return this.store.query('slideshow', {code: params.code})
	},

	afterModel : function(model) {
		var url = model.getEach('link.url')[0];
		window.location.replace(url);
	}


});
