var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ShowActionHandler = (function (_super) {
    __extends(ShowActionHandler, _super);
    function ShowActionHandler() {
        _super.apply(this, arguments);

    }
    ShowActionHandler.prototype.execute = function (sender, data) {
        var action = new ShowAction(sender, data);
        var target = TargetResolver.resolve(action);
        target.show(action.duration === undefined ? 200 : action.duration, action.easing === undefined ? 'linear' : action.easing);
    };
    return ShowActionHandler;
})(ActionHandler);
; ;
//@ sourceMappingURL=ShowActionHandler.js.map
