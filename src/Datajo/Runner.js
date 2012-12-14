var Runner = (function () {
    function Runner() {
        var _this = this;
        $(document).ajaxStart(function () {
            return _this.onAjaxStart();
        });
        $(document).ajaxComplete(function () {
            return _this.onAjaxComplete();
        });
        $(document).ajaxError(function (e, x, o) {
            return _this.onAjaxError(e, x, o);
        });
        this.repo = new Repository();
        this.handlers = {
            'show': new ShowActionHandler(),
            'hide': new HideActionHandler(),
            'get': new GetActionHandler(),
            'post': new PostActionHandler()
        };
        this.activityIndicator = new ActivityIndicator(this.getConfiguration());
        this.update();
    }
    Runner.prototype.getConfiguration = function () {
        var configuration = $(document.body).data('jo-config');
        if(configuration === undefined) {
            return new Configuration();
        }
        return configuration;
    };
    Runner.prototype.update = function () {
        var _this = this;
        var elements = this.repo.findNotConfiguredElements();
        for(var i in elements) {
            var element = elements[i];
            element.datajo = this.findData(element);
            for(var event in element.datajo) {
                $(element).on(event, function (e) {
                    return _this.onevent(e);
                });
            }
        }
        ; ;
    };
    Runner.prototype.onAjaxStart = function () {
        this.activityIndicator.show();
    };
    Runner.prototype.onAjaxComplete = function () {
        this.update();
        this.activityIndicator.hide();
    };
    Runner.prototype.onAjaxError = function (event, xhr, options) {
        if(console === undefined && event.type !== 'ajaxError') {
            return;
        }
        console.error('--- Datajo Ajax Error --- \n', 'Status:      ' + xhr.status + '\n' + 'Status Text: ' + xhr.statusText + '\n' + 'Response Text:\n' + xhr.responseText + '\n' + '------------------------');
    };
    Runner.prototype.findData = function (element) {
        for(var i in element.attributes) {
            var attribute = element.attributes[i];
            if(attribute.name !== 'data-jo') {
                continue;
            }
            var obj = JSON.parse(attribute.value);
            var data = {
            };
            if(_.isArray(obj)) {
                for(var j in obj) {
                    var event = EventName.getEvent(obj[j]);
                    if(data[event] === undefined) {
                        data[event] = [];
                    }
                    data[event].push(obj[j]);
                }
            } else {
                data[EventName.getEvent(obj)] = [
                    obj
                ];
            }
            return data;
        }
        return undefined;
    };
    Runner.prototype.onevent = function (event) {
        event.preventDefault();
        if(event.target.datajo === undefined) {
            return;
        }
        var data = event.target.datajo[event.type];
        for(var i in data) {
            (this.handlers[data[i].action]).execute(event.target, data[i]);
        }
    };
    return Runner;
})();
; ;
$(function () {
    var runner = new Runner();
});
//@ sourceMappingURL=Runner.js.map
