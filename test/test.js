var assert = require("assert"),
    create;


describe("create(object)", function() {
    it("should create object whose prototype is the passed object", function() {
        Object.create = null;
        create = require("../src/index");

        var object = {
            test: "test"
        };

        var child = create(object);
        assert.equal(Object.getPrototypeOf(child), object);
    });
});
