import { lastRefreshedTimestamp } from 'events-table/helpers/last-refreshed-timestamp';
import { module, test } from 'qunit';

module('Unit | Helper | last refreshed timestamp');

// Replace this with your real tests.
test('it returns a timestamp', function(assert) {
  let result = parseInt(lastRefreshedTimestamp([42]), 10);
  let now = new Date().getTime();
  let diff = now - result;
  assert.ok(diff < 200, 'the timestamp returned is from almost now');
});
