var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HideActionHandler = (function (_super) {
    __extends(HideActionHandler, _super);
    function HideActionHandler() {
        _super.apply(this, arguments);

    }
    HideActionHandler.prototype.execute = function (sender, data) {
        var action = new HideAction(sender, data);
        var target = TargetResolver.resolve(action);
        target.hide(action.duration === undefined ? 200 : action.duration, action.easing === undefined ? 'linear' : action.easing);
    };
    return HideActionHandler;
})(ActionHandler);
; ;
//@ sourceMappingURL=HideActionHandler.js.map
