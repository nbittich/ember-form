import Service from '@ember/service';

export default class TodoManagerService extends Service {
  getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  updateTodos(todo) {
    let todos = this.getTodos();
    todos = todos.filter((t) => t.id !== todo.id);
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todo) {
    let todos = this.getTodos();
    todos = todos.filter((t) => t.id !== todo.id);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
