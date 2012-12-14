var ActivityIndicator = (function () {
    function ActivityIndicator(configuration) {
        var selector = configuration.activityIndicator;
        if(selector === undefined || selector.trim() === '') {
            this.showMe = function () {
            };
            this.hideMe = function () {
            };
        } else {
            var obj = $(selector);
            obj.hide();
            this.showMe = function () {
                obj.show();
            };
            this.hideMe = function () {
                obj.hide();
            };
        }
    }
    ActivityIndicator.prototype.show = function () {
        this.showMe();
    };
    ActivityIndicator.prototype.hide = function () {
        this.hideMe();
    };
    return ActivityIndicator;
})();
//@ sourceMappingURL=ActivityIndicator.js.map
