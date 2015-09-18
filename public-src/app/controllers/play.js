import Ember from 'ember';
import config from 'slideshow-app/config/environment';

export default Ember.Controller.extend({
    edit_successful : true,

    current_url : function() {
    	return config.host + "#/s/" + this.get('model.code');
    }.property('model', 'model.code'),

	base_url : function() {
    	return config.host + "#/s/";
    }.property('model', 'model.code'),
    
    actions : {
    	previousLink : function() {
    		var model = this.get('model');
    		var curr_link = model.get('link');
    		var links = this.get('model.links');
    		var curr_idx = links.indexOf(curr_link);
    		if (curr_idx > 0) {
    			model.set('link', links.objectAt(curr_idx - 1));
    			model.save();
    		}

    	},

    	nextLink : function() {
    		var model = this.get('model');
    		var curr_link = model.get('link');
    		var links = this.get('model.links');
    		var curr_idx = links.indexOf(curr_link);
    		if (curr_idx < links.get('length') - 1) {
    			model.set('link', links.objectAt(curr_idx + 1));
    			model.save();
    		}
    	},

        pickLink : function(link) {
            var model = this.get('model');

            model.set('link', link);
            model.save();
        },


        changeViewURL : function() {
            var code = this.get('new_code');
            var model = this.get('model');
            var old_code = model.get('code');
            var self = this;            

            this.set('new_code', "");
            model.set('code', code);

            model.save().then(function() {
                self.set('edit_successful', true);
            }).catch(function() {
                self.set('edit_successful', false);
                model.set('code', old_code);
            }.bind(this))

        }        

    }

});
