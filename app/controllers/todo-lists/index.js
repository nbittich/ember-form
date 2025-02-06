import Controller from '@ember/controller';

import { service } from '@ember/service';
import { action } from '@ember/object';
export default class TodoListsIndexController extends Controller {
  @service router;
  @service todoManager;
  getFormattedDate(todo) {
    const date = todo.createdDate;
    return date ? new Date(date).toLocaleString('fr-FR') : 'N/A';
  }
  @action
  deleteTodo(todo) {
    this.todoManager.deleteTodo(todo);
    this.router.transitionTo('todo-lists.index');
  }
}
