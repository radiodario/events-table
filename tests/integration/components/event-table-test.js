import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('event-table', 'Integration | Component | event table', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{event-table}}`);
  assert.ok(this.$('ul.event-table'));
});
