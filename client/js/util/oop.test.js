var oop = require('./oop');

describe('oop', function () {
    it('should contains inherits function', function () {
        expect(oop.inherits).toEqual(jasmine.any(Function));
    });

    describe('inherits', function () {
        var extended,
            Base, Extended;

        beforeEach(function () {

            Base = function (a) {
                this.a = a;
            };

            Extended = function () {
                Base.call(this, 0);
            };

            oop.inherits(Extended, Base);

            extended = new Extended();
        });


        it('should instanceof by base class', function () {
            console.log(extended);
            expect(extended instanceof Base).toBe(true);
        });

        it('should has inherited property', function () {
            expect(extended.a).toBeDefined();
        });

        it('should has inherited property as own', function () {
            expect(extended.hasOwnProperty('a')).toBeTruthy();
        });
    });
});