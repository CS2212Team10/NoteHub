describe("notehub module", function() {
    var scope;

    beforeEach(angular.mock.module("notehub", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("CreatePostController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("CreatePostController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
