/// <reference path="Infrastructure/jquery.d.ts" />

//http://jqueryui.com/demos/effect/easing.html

module Datajo {

    class Exception {
        private message: string;
        constructor (message: string) {
            this.message = message;
        }
        toString() {
            return 'Datajo exception: ' + this.message;
        }
    }

    // Base action
    class Action {
        constructor (action: string, sender: Element, data: any) {
            if (data.action !== action) {
                throw new Exception("'" + action + "' action expected");
            }
            if (data.target === undefined || data.target.trim() === '') {
                throw new Exception('Target of the action has not been defined');
            }
            this.sender = sender;
            this.action = data.action;
            this.target = data.target;
        }
        sender: Element;
        action: string;
        target: string;
    };

    class ActionHandler {
        execute(sender: Element, data: any) {}
    };

    // Show action
    class ShowAction extends Action {
        constructor (sender: Element, data: any) {
            super('show', sender, data);
            this.duration = data.duration;
            this.easing = data.easing;
        }
        duration: number;
        easing: string;
    };

    class ShowActionHandler extends ActionHandler {
        execute(sender: Element, data: any) {
            var action = new ShowAction(sender, data);
            var target = TargetResolver.resolve(action);
            target.show(
                action.duration === undefined ? 200 : action.duration, 
                action.easing === undefined ? 'linear' : action.easing);
        }
    };

    // Hide action
    class HideAction extends Action {
        constructor (sender: Element, data: any) {
            super('hide', sender, data);
            this.duration = data.duration;
            this.easing = data.easing;
        }
        duration: number;
        easing: string;
    };
    
    class HideActionHandler extends ActionHandler {
        execute(sender: Element, data: any) {
            var action = new HideAction(sender, data);
            var target = TargetResolver.resolve(action);
            target.hide(
                action.duration === undefined ? 200 : action.duration, 
                action.easing === undefined ? 'linear' : action.easing);
        }
    };

    // Ajax actions

    class TargetResolver {
        private static resolvers = {
            _parent: (a: Action) : JQuery => { return $(a.sender.parentNode) },
            _self:   (a: Action) : JQuery => { return $(a.sender) },
        };
        static resolve(action: Action): JQuery {
            if (TargetResolver.resolvers[action.target] !== undefined) {
                return TargetResolver.resolvers[action.target](action);
            }
            return $(action.target);
        }
    }

    class HtmlInjection {
        private static injections = {
            replaceContent: (t: JQuery, d: any) => { t.html(d); },
            afterContent:   (t: JQuery, d: any) => { t.append(d); },
            beforeContent:  (t: JQuery, d: any) => { t.prepend(d); },
            replaceTarget:  (t: JQuery, d: any) => { t.replaceWith(d); },
            beforeTarget:   (t: JQuery, d: any) => { t.before(d); },
            afterTarget:    (t: JQuery, d: any) => { t.after(d); }
        };
        static exists(injection: string): bool {
            return HtmlInjection.injections[injection] !== undefined;
        }
        static inject(action: AjaxAction, html: string) {
            if (!HtmlInjection.exists(action.inject)) {
                throw new Exception('Unknown injection type: ' + action.inject);
            }
            HtmlInjection.injections[action.inject](TargetResolver.resolve(action), html);
        }
    }

    class AjaxAction extends Action {
        url: string;
        inject: string;
        confirm: string;
        constructor (action: string, sender: Element, data: any) {
            super(action, sender, data);
            if (data.url === undefined || data.url.trim() === '') {
                throw new Exception('Url has not been defined');
            }
            this.url = data.url;
            this.inject = data.inject === undefined || data.inject.trim() === '' ? 'replaceContent' : data.inject;
            if (!HtmlInjection.exists(this.inject)) {
                throw new Exception('Unknown injection type: ' + this.inject);
            }
            this.confirm = data.confirm;
        }
        public confirmed(): bool{
            return this.confirm === undefined || this.confirm.trim() === '' || confirm(this.confirm);
        }
    }

    class GetAction extends AjaxAction {
        constructor (sender: Element, data: any) {
            super('get', sender, data);
        }
    };

    class GetActionHandler extends ActionHandler {
        execute(sender: Element, data: any) {
            var action = new GetAction(sender, data);
            if (action.confirmed()) {
                $.get(action.url, html => { this.onSuccess(action, html); });
            }
        }
        private onSuccess(action: GetAction, html: string) {
            HtmlInjection.inject(action, html);
        }
    };

    class PostAction extends AjaxAction {
        form: string;
        constructor (sender: Element, data: any) {
            super('post', sender, data);
            if (data.form === undefined || data.form.trim() === '') {
                throw new Exception('Form has not been defined');
            }
            var form: Element = $(data.form).get(0);
            if (form.tagName.toLowerCase() !== 'form') {
                throw new Exception("Element identified by '" + data.form + "' selector is not a form");
            }
            this.form = data.form;
        }
    };

    class PostActionHandler extends ActionHandler {
        execute(sender: Element, data: any) {
            var action = new PostAction(sender, data);
            if (action.confirmed()) {
                $.post(action.url, $(action.form).serializeArray(), html => { this.onSuccess(action, html); });
            }
        }
        private onSuccess(action: PostAction, html: string) {
            HtmlInjection.inject(action, html);
        }
    };

    class Repository {
        public findNotConfiguredElements() : Element[] {
            var result = new Element[];
            $('[data-jo]').each((i, item) => {
                if ((<any>item).datajo === undefined) {
                    result.push(item);
                }
            });
            return result;
        };
    };

    class Configuration {
        activityIndicator: string;
    }

    class ActivityIndicator {
        private showMe: () => void;
        private hideMe: () => void;
        constructor (configuration: Configuration) {
            var selector = configuration.activityIndicator;
            if (selector === undefined || selector.trim() === '') {
                this.showMe = () => {};
                this.hideMe = () => {}
            } else {
                var obj = $(selector);
                obj.hide();
                this.showMe = () => { obj.show(); };
                this.hideMe = () => { obj.hide(); };
            }
        }
        public show() {
            this.showMe();
        }
        public hide() {
            this.hideMe();
        }
    }

    class _ {
        public static isArray(data: any): bool {
            return Object.prototype.toString.call(data) === '[object Array]';
        }

        public static isString(data: any): bool {
            return toString.call(data) == '[object String]';
        }

        public static normalize(data: string): string {
            return data.trim().toLowerCase();
        }
    }

    class Events {
        private static events = { 
            click:  (e: Element) => { return true },
            load:   (e: Element) => { return true } ,
            submit: (e: Element) => { return e.tagName === 'form' },
        };
        public static nameOrDefault(data: any, element: Element) {
            var event = this.getEvent(data);
            if (this.isSupported(event, element)) {
                return event;
            }
            throw new Exception('Event "' + event + '" is not supported by "' + element.tagName + '" tag.');
        }
        private static getEvent(data: any): string {
            if (data.event === undefined || data.event === null || !_.isString(data.event)) {
                return 'click';
            }

            var event = _.normalize(data.event);
            if (event === '') {
                return 'click'
            }

            if (this.events[event] === undefined) {
                throw new Exception('Event ' + event + ' is not supported');
            }

            return event;
        };
        private static isSupported(event: string, element: Element): bool {
            if (this.events[event] === undefined) {
                return false;
            }

            return this.events[event](element);
        }
    }

    class Runner {
        private repo: Repository;
        private handlers: any;
        private events: any;
        private activityIndicator: ActivityIndicator;
        constructor () {
            $(document).ajaxStart(() => this.onAjaxStart());
            $(document).ajaxComplete(() => this.onAjaxComplete());
            $(document).ajaxError((e: any, x: any, o: any) => this.onAjaxError(e, x, o));

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

        private getConfiguration(): Configuration {
            var configuration = $(document.body).data('jo-config');
            if (configuration === undefined) {
                return new Configuration();
            }
            return configuration;
        }

        public update() {
            var elements = this.repo.findNotConfiguredElements();
            for (var i in elements) {
                var element = elements[i];
                element.datajo = this.findData(element);
                for (var event in element.datajo) {
                    $(element).on(event, e => this.onevent(e));
                }
            };
        }

        public onAjaxStart() {
            this.activityIndicator.show();
        }

        public onAjaxComplete() {
            this.update();
            this.activityIndicator.hide();
        }

        public onAjaxError(event: any, xhr: any, options: any) {
            if (console === undefined && event.type !== 'ajaxError') {
                return;
            }
            console.error(
                '--- Datajo Ajax Error --- \n', 
                'Status:      ' + xhr.status + '\n' +
                'Status Text: ' + xhr.statusText + '\n' +
                'Response Text:\n' + xhr.responseText + '\n' +
                '------------------------');
        }

        private findData(element: Element) : any {
            for (var i in element.attributes) {
                var attribute = element.attributes[i];
                if (attribute.name !== 'data-jo') {
                    continue;
                }
                var obj = JSON.parse(attribute.value);
                var data = {};
                if (_.isArray(obj)) {
                    for (var j in obj) {
                        var event = Events.getEvent(obj[j]);
                        if (data[event] === undefined) {
                            data[event] = [];
                        }
                        data[event].push(obj[j]);
                    }
                } else {
                    data[Events.getEvent(obj)] = [obj];
                }
                return data;
            }
            return undefined;
        }

        private onevent(event: any) {
            event.preventDefault();
            if (event.target.datajo === undefined) {
                return;
            }

            var data = event.target.datajo[event.type];
            for (var i in data) {
                (<ActionHandler>this.handlers[data[i].action]).execute(<Element>event.target, data[i]);
            }
        }
    };

    $(function () {
        var runner = new Runner();
    })
}