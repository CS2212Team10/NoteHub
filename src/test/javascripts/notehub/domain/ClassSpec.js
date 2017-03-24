describe("notehub module", function() {
    var $httpBackend;

    beforeEach(angular.mock.module("notehub", function() {
    }));

    beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("Class domain", function() {

        var Class;

        beforeEach(angular.mock.inject(function(_Class_) {
            Class = _Class_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
