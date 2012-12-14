/// <reference path="ActionHandler.ts" />
/// <reference path="GetAction.ts" />
/// <reference path="HtmlInjection.ts" />

class GetActionHandler extends ActionHandler {
    execute(sender: Element, data: any) {
        var action = new GetAction(sender, data);
        if (action.confirmed()) {
            $.get(action.url, html => { this.onSuccess(action, html); });
        }
    }
    private onSuccess(action: GetAction, html: string) {
        HtmlInjection.inject(action, html);
    }
};