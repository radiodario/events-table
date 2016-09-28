import { eventDateFormatter } from 'events-table/helpers/event-date-formatter';
import { module, test } from 'qunit';

module('Unit | Helper | event date formatter');

// Replace this with your real tests.
test('it formats the date to the locale', function(assert) {
  let timestamp = new Date().getTime()/1000;
  let result = eventDateFormatter([timestamp]);
  assert.equal(result, new Date(timestamp*1000).toLocaleString());
});
