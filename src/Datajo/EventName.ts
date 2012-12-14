/// <reference path="Exception.ts" />
/// <reference path="Underscore.ts" />

class EventName {
    private static events = {
        click: (e: Element) => { return true },
        load: (e: Element) => { return true },
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