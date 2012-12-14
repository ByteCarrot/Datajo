var _ = (function () {
    function _() { }
    _.isArray = function isArray(data) {
        return Object.prototype.toString.call(data) === '[object Array]';
    }
    _.isString = function isString(data) {
        return toString.call(data) == '[object String]';
    }
    _.normalize = function normalize(data) {
        return data.trim().toLowerCase();
    }
    return _;
})();
//@ sourceMappingURL=Underscore.js.map
