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
            return e.tagName === 'form';
        }
    };
    EventName.nameOrDefault = function nameOrDefault(data, element) {
        var event = this.getEvent(data);
        if(this.isSupported(event, element)) {
            return event;
        }
        throw new Exception('Event "' + event + '" is not supported by "' + element.tagName + '" tag.');
    }
    EventName.getEvent = function getEvent(data) {
        if(data.event === undefined || data.event === null || !_.isString(data.event)) {
            return 'click';
        }
        var event = _.normalize(data.event);
        if(event === '') {
            return 'click';
        }
        if(this.events[event] === undefined) {
            throw new Exception('Event ' + event + ' is not supported');
        }
        return event;
    }
    EventName.isSupported = function isSupported(event, element) {
        if(this.events[event] === undefined) {
            return false;
        }
        return this.events[event](element);
    }
    return EventName;
})();
//@ sourceMappingURL=EventName.js.map
