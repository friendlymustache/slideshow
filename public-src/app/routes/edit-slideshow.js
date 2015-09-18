import Ember from 'ember';

/* Route for admin control of a slideshow (editing, etc) */
export default Ember.Route.extend({
	model : function(params) {
		this.set('session.secure.auth_token', params.edit_code);
		return this.store.find('slideshow', params.edit_code)
	}

});
