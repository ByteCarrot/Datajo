var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PostActionHandler = (function (_super) {
    __extends(PostActionHandler, _super);
    function PostActionHandler() {
        _super.apply(this, arguments);

    }
    PostActionHandler.prototype.execute = function (sender, data) {
        var _this = this;
        var action = new PostAction(sender, data);
        if(action.confirmed()) {
            $.post(action.url, $(action.form).serializeArray(), function (html) {
                _this.onSuccess(action, html);
            });
        }
    };
    PostActionHandler.prototype.onSuccess = function (action, html) {
        HtmlInjection.inject(action, html);
    };
    return PostActionHandler;
})(ActionHandler);
; ;
//@ sourceMappingURL=PostActionHandler.js.map
