describe("notehub module", function() {
    var scope;

    beforeEach(angular.mock.module("notehub", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("DocViewController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("DocViewController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
