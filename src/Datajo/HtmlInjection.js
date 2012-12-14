var HtmlInjection = (function () {
    function HtmlInjection() { }
    HtmlInjection.injections = {
        replaceContent: function (t, d) {
            t.html(d);
        },
        afterContent: function (t, d) {
            t.append(d);
        },
        beforeContent: function (t, d) {
            t.prepend(d);
        },
        replaceTarget: function (t, d) {
            t.replaceWith(d);
        },
        beforeTarget: function (t, d) {
            t.before(d);
        },
        afterTarget: function (t, d) {
            t.after(d);
        }
    };
    HtmlInjection.exists = function exists(injection) {
        return HtmlInjection.injections[injection] !== undefined;
    }
    HtmlInjection.inject = function inject(action, html) {
        if(!HtmlInjection.exists(action.inject)) {
            throw new Exception('Unknown injection type: ' + action.inject);
        }
        HtmlInjection.injections[action.inject](TargetResolver.resolve(action), html);
    }
    return HtmlInjection;
})();
//@ sourceMappingURL=HtmlInjection.js.map
