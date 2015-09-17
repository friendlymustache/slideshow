import DS from 'ember-data';

export default DS.Model.extend({
  slideshow : DS.belongsTo('slideshow', {inverse: 'links'}),
  url : DS.attr('string'),
  title : DS.attr('string')
});
