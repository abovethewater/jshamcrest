var JsHamcrest = require("../../../build/jshamcrest-min").JsHamcrest;

// The assert output of testosterone, but without the pretty colours.
assert = (function () {
    var new_assert = {};
    
    Object.keys(require('assert')).forEach(function (fn) {
      if (typeof require('assert')[fn] === 'function') {
        new_assert[fn] = function (_) {
    
          try {
            require('assert')[fn].apply(this, [].slice.call(arguments, 0));
          } catch (exc) {
            console.error(('\n✗ => ' + exc.stack + '\n'));
            process.exit();
          }
          console.log('✓ ');
        };
      }
    });
    
    return new_assert;
}());

JsHamcrest.Integration.Node({ assert : assert });

assertThat(5, between(0).and(10), "This assertion must succeed");
assertThat([], not(empty()), "This assertion must fail");