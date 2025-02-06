import Route from '@ember/routing/route';

import { service } from '@ember/service';
export default class TodoListsIndexRoute extends Route {
  @service todoManager;
  model() {
    return this.todoManager.getTodos();
  }
}
