import EmberRouter from '@ember/routing/router';
import config from 'mon-app-formulaire/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('todo-lists', function () {
    this.route('new');
  });
});
