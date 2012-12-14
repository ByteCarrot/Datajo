var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ShowAction = (function (_super) {
    __extends(ShowAction, _super);
    function ShowAction(sender, data) {
        _super.call(this, 'show', sender, data);
        this.duration = data.duration;
        this.easing = data.easing;
    }
    return ShowAction;
})(Action);
; ;
//@ sourceMappingURL=ShowAction.js.map
