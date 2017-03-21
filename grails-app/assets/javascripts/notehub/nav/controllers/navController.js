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
}
