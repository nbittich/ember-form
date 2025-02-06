import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class TodoListsEditController extends Controller {
  @service router;
  @service todoManager;
  @action
  setTodoName(e) {
    this.model.name = e.target.value;
  }

  @action
  save(e) {
    e.preventDefault();
    this.todoManager.updateTodos(this.model);
    this.router.transitionTo('todo-lists.index');
  }
}
