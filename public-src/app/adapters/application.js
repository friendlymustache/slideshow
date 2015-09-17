import DS from 'ember-data';
import config from 'slideshow-app/config/environment';

export default DS.ActiveModelAdapter.extend({
	host: config.host,
	
});
