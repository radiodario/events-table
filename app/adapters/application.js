import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'https://app-staging.sysdigcloud.com',
  namespace: 'api',
  headers: {
    'Authorization': `Bearer ${ENV.apiToken}`,
    'Content-Type': 'application/json'
  }
});
