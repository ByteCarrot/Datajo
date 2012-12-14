/// <reference path="Repository.ts" />
/// <reference path="ActivityIndicator.ts" />
/// <reference path="ShowActionHandler.ts" />
/// <reference path="HideActionHandler.ts" />
/// <reference path="GetActionHandler.ts" />
/// <reference path="PostActionHandler.ts" />
/// <reference path="EventName.ts" />

class Runner {
    private repo: Repository;
    private handlers: any;
    private events: any;
    private activityIndicator: ActivityIndicator;
    constructor() {
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

    private findData(element: Element): any {
        for (var i in element.attributes) {
            var attribute = element.attributes[i];
            if (attribute.name !== 'data-jo') {
                continue;
            }
            var obj = JSON.parse(attribute.value);
            var data = {};
            if (_.isArray(obj)) {
                for (var j in obj) {
                    var event = EventName.getEvent(obj[j]);
                    if (data[event] === undefined) {
                        data[event] = [];
                    }
                    data[event].push(obj[j]);
                }
            } else {
                data[EventName.getEvent(obj)] = [obj];
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