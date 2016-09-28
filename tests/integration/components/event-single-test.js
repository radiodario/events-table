import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('event-single', 'Integration | Component | event single', {
  integration: true
});

test('it renders', function(assert) {
  const stubEvent = Ember.Object.create({
    "id": 123,
    "version": 1,
    "createdOn": 1470083142,
    "modifiedOn": 1470083142,
    "name": "Something happened",
    "description": "More extensive description of the event",
    "severity": 6,
    "timestamp": 1470083142,
    "tags": {
      "node": "ip-1-2-3-4",
      "source": "slack",
      "user": "john"
    }
  });

  this.set('eventObj', stubEvent);
  this.render(hbs`{{event-single event=eventObj}}`);
  assert.expect(8);
  assert.equal(this.$('.version').text().trim(), 1, 'Version text');
  assert.equal(this.$('.createdOn').text().trim(), new Date(stubEvent.createdOn*1000).toLocaleString(), 'Created on date should render properly');
  assert.equal(this.$('.modifiedOn').text().trim(), new Date(stubEvent.modifiedOn*1000).toLocaleString(), 'Modified on date should render properly');
  assert.equal(this.$('.name').text().trim(), stubEvent.name, 'Event name should render properly');
  assert.equal(this.$('.description').text().trim(), stubEvent.description, 'Event description should render properly');
  assert.equal(this.$('.severity').text().trim(), stubEvent.severity, 'Event severity should renderproperly');
  assert.equal(this.$('.timestamp').text().trim(), stubEvent.timestamp, 'Event timestamp should render properly');
  let tags = this.$('.tag');
  assert.equal(tags.length, 3);

});
