var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HideAction = (function (_super) {
    __extends(HideAction, _super);
    function HideAction(sender, data) {
        _super.call(this, 'hide', sender, data);
        this.duration = data.duration;
        this.easing = data.easing;
    }
    return HideAction;
})(Action);
; ;
//@ sourceMappingURL=HideAction.js.map
