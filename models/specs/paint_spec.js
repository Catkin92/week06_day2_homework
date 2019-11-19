const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function () {
  let paint;

  beforeEach(function () {
    paint = new Paint(4);
  });
  it('should have litres of paint', function () {
    const actual = paint.litres;
    assert.strictEqual(actual, '4l');
  });
});
