/// <reference path="Infrastructure/jquery.d.ts" />
/// <reference path="TargetResolver.ts" />
/// <reference path="AjaxAction.ts" />

class HtmlInjection {
    private static injections = {
        replaceContent: (t: JQuery, d: any) => { t.html(d); },
        afterContent: (t: JQuery, d: any) => { t.append(d); },
        beforeContent: (t: JQuery, d: any) => { t.prepend(d); },
        replaceTarget: (t: JQuery, d: any) => { t.replaceWith(d); },
        beforeTarget: (t: JQuery, d: any) => { t.before(d); },
        afterTarget: (t: JQuery, d: any) => { t.after(d); }
    };
    static exists(injection: string): bool {
        return HtmlInjection.injections[injection] !== undefined;
    }
    static inject(action: AjaxAction, html: string) {
        if (!HtmlInjection.exists(action.inject)) {
            throw new Exception('Unknown injection type: ' + action.inject);
        }
        HtmlInjection.injections[action.inject](TargetResolver.resolve(action), html);
    }
}