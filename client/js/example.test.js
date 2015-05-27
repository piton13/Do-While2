var example = require('./example');

describe("example", function () {
    it("should exports object", function () {
        expect(example).toEqual(jasmine.any(Object));
    });

    it("should has function sayHello", function () {
        expect(example.sayHello).toEqual(jasmine.any(Function));
    });

    describe(":sayHello", function () {
        it("should return hello when no args", function () {
			expect(example.sayHello()).toBe("hello");
        });

        it("should return 'hello world' when 'world' passed", function () {
			expect(example.sayHello("world")).toBe("hello world");
        });
    });
});