import Ember from 'ember';

export default Ember.Controller.extend({

    actions : {
    	previousLink : function() {
    		var model = this.get('model');
    		var curr_link = model.get('link');
    		var links = this.get('model.links');
    		var curr_idx = links.indexOf(curr_link);
    		if (curr_idx > 0) {
    			model.set('link', links.objectAt(curr_idx) - 1);
    			model.save();
    		}

    	},

    	nextLink : function() {
    		var model = this.get('model');
    		var curr_link = model.get('link');
    		var links = this.get('model.links');
    		var curr_idx = links.indexOf(curr_link);
    		if (curr_idx < links.get('length') - 1) {
    			model.set('link', links.objectAt(curr_idx) + 1);
    			model.save();
    		}
    	}
    }

});
