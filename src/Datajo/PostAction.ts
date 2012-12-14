/// <reference path="AjaxAction.ts" />

class PostAction extends AjaxAction {
    form: string;
    constructor(sender: Element, data: any) {
        super('post', sender, data);
        if (data.form === undefined || data.form.trim() === '') {
            throw new Exception('Form has not been defined');
        }
        var form: Element = $(data.form).get(0);
        if (form.tagName.toLowerCase() !== 'form') {
            throw new Exception("Element identified by '" + data.form + "' selector is not a form");
        }
        this.form = data.form;
    }
};