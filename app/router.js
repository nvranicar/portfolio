import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bio');
  this.route('contact');
  this.route('resume');
  this.route('portfolio');
});

export default Router;
