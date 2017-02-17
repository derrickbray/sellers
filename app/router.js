import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('auction', function() {
    this.route('weekly', function() {
      this.route('current');
      this.route('old');
    });
  });
});

export default Router;
