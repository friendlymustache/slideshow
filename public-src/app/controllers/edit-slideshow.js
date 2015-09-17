import Ember from 'ember';

export default Ember.Controller.extend({

    actions : {
        addLink: function() {
            var new_link = this.store.createRecord('link',
                {url: this.get('url'),
                title: '',
                edit_code: this.get('model.edit_code')});

            new_link.save();
        },

        playSlideshow: function() {
            this.transitionTo('play', this.get('model.edit_code'));
        }
    }

});
