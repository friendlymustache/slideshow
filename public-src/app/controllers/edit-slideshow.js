import Ember from 'ember';

export default Ember.Controller.extend({

    actions : {
        addLink: function() {
            var new_link = this.store.createRecord('link',
                {url: this.get('url'),
                title: this.get('title'),
                edit_code: this.get('model.edit_code')});
            this.set('url', "");
            this.set('title', "");
            new_link.save();
        },

        playSlideshow: function() {
            this.transitionToRoute('play', this.get('model.edit_code'));
        }
    }

});
