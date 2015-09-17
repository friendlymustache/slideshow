import DS from 'ember-data';

export default DS.Model.extend({
  links: DS.hasMany('link'),
  link: DS.belongsTo('link'),
  name: DS.attr('string')
});
