import { test } from 'qunit';
import moduleForAcceptance from 'events-table/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list events');

test('should redirect to list-events route', (assert) => {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/list-events', 'should redirect automatically');
  });
});

test('should list 1 events', (assert) => {
  visit('/');
  andThen(function() {
    assert.equal(find('.event').length, 1, 'should see 1 events');
  });
});

test('each event should be displayed with relevant information', (assert) => {
  visit('/');
  andThen(function() {
    const event = find('.event')[0];
    assert.equal(event.className, 'event', 'should see an event');
  });
});

//test('should refresh events every 30 seconds', (assert) => {
//  visit('/');
//  // TODO: how to do timers in ember tests???
//  andThen(function() {
//    assert.equal(find('.event')[0]['data-timestamp'], new Date().getTime(), 'should be a new event');
//  });
//});

test('should load events when hitting the refresh-now button', (assert) => {
  visit('/');
  click('button.refresh-now');
  andThen(function() {
    const timestamp = parseInt(find('.event-table')[0].getAttribute('data-lastrefreshed'), 10);
    const now = new Date().getTime();
    const diff = now - timestamp;
    assert.ok(diff < 500, 'should be a new event');
  });
});
