//= wrapped

angular
    .module("notehub.index")
    .controller("NavController", NavController);

function NavController(applicationDataFactory, $http, $scope, $window) {
    $scope.title = "hello";

    $http.get('/api/user/').then(function(response) {
        var currentUser = response.data;
        $scope.userName = currentUser.name;
        console.log($scope.userName);
    });

    $scope.signOut = function () {
        $scope.auth = false;
        $window.location.href = "/mainPage";
        $window.sessionStorage.token = undefined;
    };
    $scope.home = function () {
        $scope.auth = false; //check if still auth to navigate website
        $window.location.href = "/";
    };
}
