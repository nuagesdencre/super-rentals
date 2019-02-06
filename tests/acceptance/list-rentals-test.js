import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('should list available rentals.', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  });
});
