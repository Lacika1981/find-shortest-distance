var closest = require('../shortestDistance');
var assert = require('assert');

describe('closest', function() {
  describe('with string', function() {
    it('should return object', function() {
      setTimeout(function() {
        try {
          assert.deepEqual(
            closest,
            {
              distance: 10.770329614269007,
              elems: {
                elemOne: [50, 50],
                elemTwo: [54, 60],
                indexes: { elemOne: 0, elemTwo: 3 }
              }
            },
            'objects are not equal'
          );
        } catch (e) {
          console.log(e);
        }
      }, 500);
    });
  });
});
