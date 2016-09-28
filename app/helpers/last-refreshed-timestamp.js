import Ember from 'ember';

export function lastRefreshedTimestamp(/*, hash*/) {
  return new Date().getTime();
}

export default Ember.Helper.helper(lastRefreshedTimestamp);
