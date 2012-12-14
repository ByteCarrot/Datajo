var Repository = (function () {
    function Repository() { }
    Repository.prototype.findNotConfiguredElements = function () {
        var result = new Array();
        $('[data-jo]').each(function (i, item) {
            if((item).datajo === undefined) {
                result.push(item);
            }
        });
        return result;
    };
    return Repository;
})();
; ;
//@ sourceMappingURL=Repository.js.map
