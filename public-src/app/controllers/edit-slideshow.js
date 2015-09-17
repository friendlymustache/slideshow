import Ember from 'ember';

export default Ember.Controller.extend({

    actions : {
        addLink: function(link_url) {
            var new_link = this.store.createRecord('link',
                {url: link_url,
                title: '',
                edit_code: this.get('model.edit_code')});

            new_link.save();
        },

        shareSlideshow: function() {
            
        }
    }

});
