import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental-form', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.setupRouter();
  });
  
  test('it renders a filled in form', async function(assert) {
    this.setProperties({
      rental: {
        id: 'grand-old-mansion',
        title: 'Grand Old Mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        category: 'Estate',
        type: 'Standalone',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
      }
    });

    await render(hbs`<RentalForm @rental={{this.rental}} />`);

    assert.dom('article').hasClass('rental');
    assert.dom('article .image').exists();
    assert.dom('article .map').exists();
    assert.dom('article .detail.img input').hasValue('https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg');
    assert.dom('article .detail.loc input.lat').hasValue('37.7749');
    assert.dom('article .detail.loc input.lng').hasValue('-122.4194');

    assert.dom('article .detail.title input').hasValue('Grand Old Mansion');
    assert.dom('article .detail.owner input').hasValue('Veruca Salt');
    assert.dom('article .detail.category input').hasValue('Estate');
    assert.dom('article .detail.location input').hasValue('San Francisco');
    assert.dom('article .detail.bedrooms input').hasValue('15');

  });
});
