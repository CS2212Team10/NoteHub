describe("noteList/noteList module", function() {
    var scope;

    beforeEach(angular.mock.module("noteList/noteList", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("component directive", function() {
        var element;

        beforeEach(angular.mock.inject(function ($compile) {
            element = angular.element('<component></component>');
            $compile(element)(scope);
            scope.$digest();
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});