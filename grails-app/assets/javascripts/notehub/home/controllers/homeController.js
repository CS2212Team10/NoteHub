//= wrapped

angular
    .module("notehub.home")
    .controller("homeController", homeController);

function homeController(applicationDataFactory, contextPath, $state,$scope,$window) {

    $scope.title = "hello";
    $scope.changeView = function(){
        console.log($window.location); // VERY USEFULL
        var earl = '/editperson/';
        $window.location.href = earl;
    };
    /* IDK WHAT THIS DOES
     var vm = this;

     vm.contextPath = contextPath;

     applicationDataFactory.get().then(function(response) {
     vm.applicationData = response.data;
     });

     vm.stateExists = function(name) {
     return $state.get(name) != null;
     };
     */
}
