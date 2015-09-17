import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('slideshows', {path: "s/:code"});
  this.route('edit-slideshow', {path: "e/:edit_code"});
  this.route('play', {path: "p/:edit_code"});
});

export default Router;
