import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('events', {path: '/'});
  this.resource('events', {path: '/:state'});
});

export default Router;
