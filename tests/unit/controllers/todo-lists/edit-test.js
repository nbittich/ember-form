import { module, test } from 'qunit';
import { setupTest } from 'mon-app-formulaire/tests/helpers';

module('Unit | Controller | todo-lists/edit', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:todo-lists/edit');
    assert.ok(controller);
  });
});
