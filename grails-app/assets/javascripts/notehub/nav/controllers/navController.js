//= wrapped

angular
    .module("notehub.index")
    .controller("NavController", NavController);

function NavController(applicationDataFactory, contextPath, $scope, $window) {
    $scope.title = "hello";
    $scope.signOut = function () {
        $scope.auth = false;
        $window.location.href = "/";
    };
    $scope.home = function () {
        $scope.auth = false; //check if still auth to navigate website
        $window.location.href = "/";
    };
}
