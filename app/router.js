import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('ex3');
  this.route('step1');
  this.route('testnew');
  this.route('testlist');
  this.route('contacts', function() {
    this.route('add');
    this.route('update');
  });
  this.route('categories', function() {
    this.route('add');
    this.route('update');
    this.route('contacts', function() {
      this.route('add');
      this.route('update');
    });
  });
  this.route('categories.add');
  this.route('categories.update');
  this.route('categories.contacts');
  this.route('categories.contacts.add');
  this.route('categories.contacts.update');
});
