var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GetActionHandler = (function (_super) {
    __extends(GetActionHandler, _super);
    function GetActionHandler() {
        _super.apply(this, arguments);

    }
    GetActionHandler.prototype.execute = function (sender, data) {
        var _this = this;
        var action = new GetAction(sender, data);
        if(action.confirmed()) {
            $.get(action.url, function (html) {
                _this.onSuccess(action, html);
            });
        }
    };
    GetActionHandler.prototype.onSuccess = function (action, html) {
        HtmlInjection.inject(action, html);
    };
    return GetActionHandler;
})(ActionHandler);
; ;
//@ sourceMappingURL=GetActionHandler.js.map
