var nativeCreate = Object.create;


module.exports = nativeCreate || (function() {
    function F() {}
    return function create(object) {
        F.prototype = object;
        return new F();
    };
}());
