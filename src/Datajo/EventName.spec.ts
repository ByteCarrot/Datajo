/// <reference path="Infrastructure/jasmine.d.ts" />
/// <reference path="EventName.ts" />

describe("EventName", () => {

    var div;
    var form;

    beforeEach(() => {
        div = document.createElement('div');
        form = document.createElement('form');
    });

    describe("extract", () => {

        it("should throw exception if action has not been provided", () => {
            expect(() => EventName.extract(undefined, div)).toThrow();
            expect(() => EventName.extract(null, div)).toThrow();
        });

        it("should throw exception if HTML element has not been provided", () => {
            expect(() => EventName.extract({}, undefined)).toThrow();
            expect(() => EventName.extract({}, null)).toThrow();
        });

        it("should return 'click' event when action doesn't specify it", () => {
            expect(EventName.extract({}, div)).toEqual('click');
            expect(EventName.extract({ event: undefined }, div)).toEqual('click');
            expect(EventName.extract({ event: null }, div)).toEqual('click');
            expect(EventName.extract({ event: '' }, div)).toEqual('click');
            expect(EventName.extract({ event: '   ' }, div)).toEqual('click');
        });

        it("should throw exception if event name has not been recognized", () => {
            expect(() => EventName.extract({ event: 'invalid event' }, div)).toThrow();
        });

        it("should ignore characters case", () => {
            expect(EventName.extract({ event: 'CLIck' }, div)).toEqual('click');
            expect(EventName.extract({ event: '   cLIck ' }, div)).toEqual('click');
        });

        it("should recognize 'click' event", () => {
            expect(EventName.extract({ event: 'click' }, div)).toEqual('click');
        });

        it("should recognize 'load' event", () => {
            expect(EventName.extract({ event: 'load' }, div)).toEqual('load');
        });

        it("should recognize 'submit' event", () => {
            expect(EventName.extract({ event: 'submit' }, form)).toEqual('submit');
        });

        it("should throw exception if 'submit' event has been applied to a HTML element different than <form>", () => {
            expect(() => EventName.extract({ event: 'submit' }, div)).toThrow();
        });

    });

});