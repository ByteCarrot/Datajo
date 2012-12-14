/// <reference path="Infrastructure/jquery.d.ts" />
/// <reference path="Action.ts" />

class TargetResolver {
    private static resolvers = {
        _parent: (a: Action): JQuery => { return $(a.sender.parentNode) },
        _self: (a: Action): JQuery => { return $(a.sender) },
    };
    static resolve(action: Action): JQuery {
        if (TargetResolver.resolvers[action.target] !== undefined) {
            return TargetResolver.resolvers[action.target](action);
        }
        return $(action.target);
    }
}