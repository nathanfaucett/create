var isNative = require("is_native");


var create, F;


if (isNative(Object.create)) {
    create = Object.create;
} else {
    F = function F() {};
    create = function create(object) {
        F.prototype = object;
        return new F();
    };
}


module.exports = create;
