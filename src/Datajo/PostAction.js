var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PostAction = (function (_super) {
    __extends(PostAction, _super);
    function PostAction(sender, data) {
        _super.call(this, 'post', sender, data);
        if(data.form === undefined || data.form.trim() === '') {
            throw new Exception('Form has not been defined');
        }
        var form = $(data.form).get(0);
        if(form.tagName.toLowerCase() !== 'form') {
            throw new Exception("Element identified by '" + data.form + "' selector is not a form");
        }
        this.form = data.form;
    }
    return PostAction;
})(AjaxAction);
; ;
//@ sourceMappingURL=PostAction.js.map
