/// <reference path="Action.ts" />
/// <reference path="HtmlInjection.ts" />

class AjaxAction extends Action {
    url: string;
    inject: string;
    confirm: string;
    constructor(action: string, sender: Element, data: any) {
        super(action, sender, data);
        if (data.url === undefined || data.url.trim() === '') {
            throw new Exception('Url has not been defined');
        }
        this.url = data.url;
        this.inject = data.inject === undefined || data.inject.trim() === '' ? 'replaceContent' : data.inject;
        if (!HtmlInjection.exists(this.inject)) {
            throw new Exception('Unknown injection type: ' + this.inject);
        }
        this.confirm = data.confirm;
    }
    public confirmed(): bool {
        return this.confirm === undefined || this.confirm.trim() === '' || confirm(this.confirm);
    }
}