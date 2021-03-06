var _ = Datajo._;
describe("Underscore", function () {
    describe("isArray", function () {
        it("should return false for everything what is not a JavaScript array", function () {
            expect(_.isArray(undefined)).toBeFalsy();
            expect(_.isArray(null)).toBeFalsy();
            expect(_.isArray(0)).toBeFalsy();
            expect(_.isArray('some string')).toBeFalsy();
            expect(_.isArray({
            })).toBeFalsy();
        });
        it("should return true for the array", function () {
            expect(_.isArray([])).toBeTruthy();
            expect(_.isArray(new Array())).toBeTruthy();
        });
    });
    describe("isString", function () {
        it("should return false for everything what is not a string", function () {
            expect(_.isString(undefined)).toBeFalsy();
            expect(_.isString(null)).toBeFalsy();
            expect(_.isString(0)).toBeFalsy();
            expect(_.isString({
            })).toBeFalsy();
            expect(_.isString([])).toBeFalsy();
        });
        it("should return true for a string", function () {
            expect(_.isString('')).toBeTruthy();
            expect(_.isString('some string')).toBeTruthy();
            expect(_.isString(new String('some string'))).toBeTruthy();
        });
    });
    describe("normalize", function () {
        it("should remove trailing white spaces from the string", function () {
            expect(_.normalize(' some string     ')).toEqual('some string');
            expect(_.normalize('  ')).toEqual('');
            expect(_.normalize('some string')).toEqual('some string');
        });
        it("should make all characters lower case", function () {
            expect(_.normalize('Some String')).toEqual('some string');
            expect(_.normalize('     Some String   ')).toEqual('some string');
        });
        it("should throw exception if the string has not been provided", function () {
            expect(function () {
                return _.normalize(undefined);
            }).toThrow();
            expect(function () {
                return _.normalize(null);
            }).toThrow();
        });
    });
});
//@ sourceMappingURL=Underscore.spec.js.map
