/// <reference path="ActionHandler.ts" />
/// <reference path="PostAction.ts" />
/// <reference path="HtmlInjection.ts" />

class PostActionHandler extends ActionHandler {
    execute(sender: Element, data: any) {
        var action = new PostAction(sender, data);
        if (action.confirmed()) {
            $.post(action.url, $(action.form).serializeArray(), html => { this.onSuccess(action, html); });
        }
    }
    private onSuccess(action: PostAction, html: string) {
        HtmlInjection.inject(action, html);
    }
};