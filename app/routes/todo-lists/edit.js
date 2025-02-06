import Route from '@ember/routing/route';

import { service } from '@ember/service';
export default class TodoListsEditRoute extends Route {
  @service todoManager;

  model(params) {
    const todos = this.todoManager.getTodos();
    const todoToEdit = todos.find((t) => t.id === params.id);
    return todoToEdit;
  }
}
