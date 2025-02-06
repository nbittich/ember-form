import Controller from '@ember/controller';

export default class TodoListsIndexController extends Controller {
  getFormattedDate(todo) {
    const date = todo.createdDate;
    return date ? new Date(date).toLocaleString('fr-FR') : 'N/A';
  }
}
