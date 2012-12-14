var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AjaxAction = (function (_super) {
    __extends(AjaxAction, _super);
    function AjaxAction(action, sender, data) {
        _super.call(this, action, sender, data);
        if(data.url === undefined || data.url.trim() === '') {
            throw new Exception('Url has not been defined');
        }
        this.url = data.url;
        this.inject = data.inject === undefined || data.inject.trim() === '' ? 'replaceContent' : data.inject;
        if(!HtmlInjection.exists(this.inject)) {
            throw new Exception('Unknown injection type: ' + this.inject);
        }
        this.confirm = data.confirm;
    }
    AjaxAction.prototype.confirmed = function () {
        return this.confirm === undefined || this.confirm.trim() === '' || confirm(this.confirm);
    };
    return AjaxAction;
})(Action);
//@ sourceMappingURL=AjaxAction.js.map
