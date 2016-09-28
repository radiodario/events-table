import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('event');
  },
  setupController: function(controller, model){
    this._super(controller, model);
    // disable refreshing for tests, as it makes them timeout
    if (ENV.environment === 'test') {
      return;
    }
    this.startRefreshing();
  },
  startRefreshing: function(){
    this.set('refreshing', true);
    Ember.run.later(this, this.refresh, 30000);
  },
  refresh: function(){
    if(!this.get('refreshing')) {
      return;
    }
    this.get('store').findAll('event');
    Ember.run.later(this, this.refresh, 30000);
  },
  actions:{
    willTransition: function(){
      this.set('refreshing', false);
    },
    refresh: function() {
      return this.get('store').findAll('event');
    }
  }
});
