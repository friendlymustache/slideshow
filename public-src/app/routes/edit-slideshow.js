import Ember from 'ember';

/* Route for admin control of a slideshow (editing, etc) */
export default Ember.Route.extend({
	model : function(params) {
		return this.store.query('slideshow', {edit_code: params.edit_code})
	},

	afterModel : function(model) {
		debugger;
	}

});
