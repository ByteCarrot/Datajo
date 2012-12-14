/// <reference path="AjaxAction.ts" />

class GetAction extends AjaxAction {
    constructor(sender: Element, data: any) {
        super('get', sender, data);
    }
};