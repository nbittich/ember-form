import Route from '@ember/routing/route';

export default class TodoListsNewRoute extends Route {
  model() {
    return {
      id: crypto.randomUUID(),
      name: '',
      createdDate: new Date(),
    };
  }
}
