// app/initializers/authentication.js
import SlideshowAppAuthenticator from '../authenticators/slideshow-app-authenticator';

export default {
  name:       'authentication',
  before:     'simple-auth',
  initialize: function(instance) {
    instance.register('authenticator:slideshow-app-authenticator', SlideshowAppAuthenticator);
  }
};