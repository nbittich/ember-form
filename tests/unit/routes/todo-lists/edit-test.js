import { module, test } from 'qunit';
import { setupTest } from 'mon-app-formulaire/tests/helpers';

module('Unit | Route | todo-lists/edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:todo-lists/edit');
    assert.ok(route);
  });
});
