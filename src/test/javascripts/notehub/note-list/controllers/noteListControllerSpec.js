describe("notehub.note-list module", function() {
    var scope;

    beforeEach(angular.mock.module("notehub.note-list", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("NoteListController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("NoteListController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
