import Ember from 'ember';

/* Route for controlling playing of a slideshow */
export default Ember.Route.extend({
    model : function(params) {
        return this.store.find('slideshow', params.edit_code)
    }

});
