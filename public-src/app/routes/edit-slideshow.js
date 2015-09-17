import Ember from 'ember';

/* Route for admin control of a slideshow (editing, etc) */
export default Ember.Route.extend({
	model : function(params) {
		return this.store.find('slideshow', params.edit_code)
	}

});
