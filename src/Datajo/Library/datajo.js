var Exception = (function () {
    function Exception(message) {
        this.message = message;
    }
    Exception.prototype.toString = function () {
        return 'Datajo exception: ' + this.message;
    };
    return Exception;
})();
var _ = (function () {
    function _() { }
    _.isArray = function isArray(data) {
        return Object.prototype.toString.call(data) === '[object Array]';
    }
    _.isString = function isString(data) {
        return toString.call(data) == '[object String]';
    }
    _.normalize = function normalize(data) {
        return data.trim().toLowerCase();
    }
    return _;
})();
var EventName = (function () {
    function EventName() { }
    EventName.events = {
        click: function (e) {
            return true;
        },
        load: function (e) {
            return true;
        },
        submit: function (e) {
            return _.normalize(e.tagName) === 'form';
        }
    };
    EventName.extract = function extract(action, element) {
        if(!element) {
            throw new Exception('HTML element has not been provided');
        }
        var event = _.isString(action.event) ? _.normalize(action.event) : 'click';
        if(event === '') {
            event = 'click';
        }
        if(this.events[event] === undefined) {
            throw new Exception('Event ' + event + ' has not been recognized');
        }
        if(this.events[event](element)) {
            return event;
        }
        throw new Exception('Event "' + event + '" is not supported by "' + element.tagName + '" tag.');
    }
    return EventName;
})();
var Repository = (function () {
    function Repository() { }
    Repository.prototype.findNotConfiguredElements = function () {
        var result = new Array();
        $('[data-jo]').each(function (i, item) {
            if((item).datajo === undefined) {
                result.push(item);
            }
        });
        return result;
    };
    return Repository;
})();
; ;
var Configuration = (function () {
    function Configuration() { }
    return Configuration;
})();
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
var ActionHandler = (function () {
    function ActionHandler() { }
    ActionHandler.prototype.execute = function (sender, data) {
    };
    return ActionHandler;
})();
; ;
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
var TargetResolver = (function () {
    function TargetResolver() { }
    TargetResolver.resolvers = {
        _parent: function (a) {
            return $(a.sender.parentNode);
        },
        _self: function (a) {
            return $(a.sender);
        }
    };
    TargetResolver.resolve = function resolve(action) {
        if(TargetResolver.resolvers[action.target] !== undefined) {
            return TargetResolver.resolvers[action.target](action);
        }
        return $(action.target);
    }
    return TargetResolver;
})();
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
var HtmlInjection = (function () {
    function HtmlInjection() { }
    HtmlInjection.injections = {
        replaceContent: function (t, d) {
            t.html(d);
        },
        afterContent: function (t, d) {
            t.append(d);
        },
        beforeContent: function (t, d) {
            t.prepend(d);
        },
        replaceTarget: function (t, d) {
            t.replaceWith(d);
        },
        beforeTarget: function (t, d) {
            t.before(d);
        },
        afterTarget: function (t, d) {
            t.after(d);
        }
    };
    HtmlInjection.exists = function exists(injection) {
        return HtmlInjection.injections[injection] !== undefined;
    }
    HtmlInjection.inject = function inject(action, html) {
        if(!HtmlInjection.exists(action.inject)) {
            throw new Exception('Unknown injection type: ' + action.inject);
        }
        HtmlInjection.injections[action.inject](TargetResolver.resolve(action), html);
    }
    return HtmlInjection;
})();
var AjaxAction = (function (_super) {
    __extends(AjaxAction, _super);
    function AjaxAction(action, sender, data) {
        _super.call(this, action, sender, data);
        if(data.url === undefined || data.url.trim() === '') {
            throw new Exception('Url has not been defined');
        }
        this.url = data.url;
        this.inject = data.inject === undefined || data.inject.trim() === '' ? 'replaceContent' : data.inject;
        if(!HtmlInjection.exists(this.inject)) {
            throw new Exception('Unknown injection type: ' + this.inject);
        }
        this.confirm = data.confirm;
    }
    AjaxAction.prototype.confirmed = function () {
        return this.confirm === undefined || this.confirm.trim() === '' || confirm(this.confirm);
    };
    return AjaxAction;
})(Action);
var GetAction = (function (_super) {
    __extends(GetAction, _super);
    function GetAction(sender, data) {
        _super.call(this, 'get', sender, data);
    }
    return GetAction;
})(AjaxAction);
; ;
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
                    var event = EventName.extract(obj[j], element);
                    if(data[event] === undefined) {
                        data[event] = [];
                    }
                    data[event].push(obj[j]);
                }
            } else {
                data[EventName.extract(obj, element)] = [
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
//@ sourceMappingURL=datajo.js.map
