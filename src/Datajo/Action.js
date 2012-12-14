var Action = (function () {
    function Action(action, sender, data) {
        if(data.action !== action) {
            throw new Exception("'" + action + "' action expected");
        }
        if(data.target === undefined || data.target.trim() === '') {
            throw new Exception('Target of the action has not been defined');
        }
        this.sender = sender;
        this.action = data.action;
        this.target = data.target;
    }
    return Action;
})();
; ;
//@ sourceMappingURL=Action.js.map
