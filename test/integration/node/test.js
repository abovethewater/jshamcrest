var JsHamcrest = require("../../../build/jshamcrest-min").JsHamcrest;
JsHamcrest.Integration.Node();
assertThat(5, between(0).and(10), "This assertion must succeed");
assertThat([], not(empty()), "This assertion must fail");
