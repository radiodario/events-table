import Ember from 'ember';

export function eventDateFormatter([date]/*, hash*/) {
  return new Date(date*1000).toLocaleString();
}

export default Ember.Helper.helper(eventDateFormatter);
