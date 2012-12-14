/// <reference path="Exception.ts" />
/// <reference path="Underscore.ts" />

class EventName {
    private static events = {
        click: (e: Element) => { return true },
        load: (e: Element) => { return true },
        submit: (e: Element) => { return _.normalize(e.tagName) === 'form' },
    };
    public static extract(action: any, element: Element): string {
        if (!element) {
            throw new Exception('HTML element has not been provided');
        }

        var event = _.isString(action.event) ? _.normalize(action.event) : 'click';
        if (event === '') {
            event = 'click';
        }

        if (this.events[event] === undefined) {
            throw new Exception('Event ' + event + ' has not been recognized');
        }

        if (this.events[event](element)) {
            return event;
        }

        throw new Exception('Event "' + event + '" is not supported by "' + element.tagName + '" tag.');
    }
}