import { module, test } from 'qunit';
import { setupTest } from 'mon-app-formulaire/tests/helpers';

module('Unit | Route | todo-lists', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:todo-lists');
    assert.ok(route);
  });
});
