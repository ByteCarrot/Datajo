var TargetResolver = (function () {
    function TargetResolver() { }
    TargetResolver.resolvers = {
        _parent: function (a) {
            return $(a.sender.parentNode);
        },
        _self: function (a) {
            return $(a.sender);
        }
    };
    TargetResolver.resolve = function resolve(action) {
        if(TargetResolver.resolvers[action.target] !== undefined) {
            return TargetResolver.resolvers[action.target](action);
        }
        return $(action.target);
    }
    return TargetResolver;
})();
//@ sourceMappingURL=TargetResolver.js.map
