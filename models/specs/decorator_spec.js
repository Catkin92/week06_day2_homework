const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');

describe('Decorator', function () {
  let decorator;
  let paint;

  beforeEach(function () {
    decorator = new Decorator();
    paint = new Paint(4);
  });

  it('should start with an empty paint stock', function () {
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a can of paint to stock', function () {
    decorator.addStock(paint);
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [paint]);
  });
});
