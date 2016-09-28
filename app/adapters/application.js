import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:5050',
  namespace: 'api',
  headers: {
    'Authorization': `Bearer ${ENV.apiToken}`,
    'Content-Type': 'application/json'
  }
});
