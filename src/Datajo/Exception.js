var Exception = (function () {
    function Exception(message) {
        this.message = message;
    }
    Exception.prototype.toString = function () {
        return 'Datajo exception: ' + this.message;
    };
    return Exception;
})();
//@ sourceMappingURL=Exception.js.map
