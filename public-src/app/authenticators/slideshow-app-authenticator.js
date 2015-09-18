/* global ga */
/* NOTE: See docs at http://ember-simple-auth.com/ember-simple-auth-api-docs.html#SimpleAuth-Authenticators-Base */
import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import config from 'slideshow-app/config/environment';

export default Base.extend({

  tokenAttributeName : 'slideshows',

  restore(properties) {
    var _this = this;
    var propertiesObject = Ember.Object.create(properties);
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(propertiesObject.get(_this.tokenAttributeName))) {
        resolve(properties);
      } else {
        reject();
      }
    });
  },

  authenticate(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      resolve(Ember.Object.create(options));
    })
  },

  invalidate(/* data */) {
    return Ember.RSVP.resolve();
  },

});
