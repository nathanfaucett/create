var create, F;


if (Object.create) {
    create = Object.create;
} else {
    F = function F() {};
    create = function create(object) {
        F.prototype = object;
        return new F();
    };
}


module.exports = create;
