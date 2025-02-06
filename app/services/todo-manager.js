import Service from '@ember/service';

export default class TodoManagerService extends Service {
  getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  updateTodos(todo) {
    const todos = this.getTodos();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
