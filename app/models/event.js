import DS from 'ember-data';

export default DS.Model.extend({
   "version": DS.attr(),
   "createdOn": DS.attr(),
   "modifiedOn": DS.attr(),
   "name": DS.attr(),
   "description": DS.attr(),
   "severity": DS.attr(),
   "timestamp": DS.attr(),
   "tags": DS.attr()
});
