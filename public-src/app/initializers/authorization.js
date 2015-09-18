import SlideshowAuthorizer from '../authorizers/slideshow-app-authorizer';

export default {
  name:       'authorization',
  before:     'simple-auth',
  initialize: function(instance) {
    instance.register('authorizer:slideshow-app-authorizer', SlideshowAuthorizer);
  }
};