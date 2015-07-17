var tape = require("tape"),
    getPrototypeOf = require("get_prototype_of"),
    create = require("../src/index");


tape("create(object) should create object whose prototype is the passed object", function(assert) {
    var object = {
        test: "test"
    };

    assert.equal(getPrototypeOf(create(object)), object);
    assert.equal(getPrototypeOf(create(null)), null);
    assert.equal(getPrototypeOf(create(false)), null);
    assert.equal(getPrototypeOf(create("")), null);
    assert.equal(getPrototypeOf(create(0)), null);

    assert.end();
});
