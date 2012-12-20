var EventName = Datajo.EventName;
describe("EventName", function () {
    var div;
    var form;
    beforeEach(function () {
        div = document.createElement('div');
        form = document.createElement('form');
    });
    describe("extract", function () {
        it("should throw exception if action has not been provided", function () {
            expect(function () {
                return EventName.extract(undefined, div);
            }).toThrow();
            expect(function () {
                return EventName.extract(null, div);
            }).toThrow();
        });
        it("should throw exception if HTML element has not been provided", function () {
            expect(function () {
                return EventName.extract({
                }, undefined);
            }).toThrow();
            expect(function () {
                return EventName.extract({
                }, null);
            }).toThrow();
        });
        it("should return 'click' event when action doesn't specify it", function () {
            expect(EventName.extract({
            }, div)).toEqual('click');
            expect(EventName.extract({
                event: undefined
            }, div)).toEqual('click');
            expect(EventName.extract({
                event: null
            }, div)).toEqual('click');
            expect(EventName.extract({
                event: ''
            }, div)).toEqual('click');
            expect(EventName.extract({
                event: '   '
            }, div)).toEqual('click');
        });
        it("should throw exception if event name has not been recognized", function () {
            expect(function () {
                return EventName.extract({
                    event: 'invalid event'
                }, div);
            }).toThrow();
        });
        it("should ignore characters case", function () {
            expect(EventName.extract({
                event: 'CLIck'
            }, div)).toEqual('click');
            expect(EventName.extract({
                event: '   cLIck '
            }, div)).toEqual('click');
        });
        it("should recognize 'click' event", function () {
            expect(EventName.extract({
                event: 'click'
            }, div)).toEqual('click');
        });
        it("should recognize 'load' event", function () {
            expect(EventName.extract({
                event: 'load'
            }, div)).toEqual('load');
        });
        it("should recognize 'submit' event", function () {
            expect(EventName.extract({
                event: 'submit'
            }, form)).toEqual('submit');
        });
        it("should throw exception if 'submit' event has been applied to a HTML element different than <form>", function () {
            expect(function () {
                return EventName.extract({
                    event: 'submit'
                }, div);
            }).toThrow();
        });
    });
});
//@ sourceMappingURL=EventName.spec.js.map
