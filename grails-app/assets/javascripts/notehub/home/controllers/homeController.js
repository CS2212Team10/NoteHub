//= wrapped

angular
    .module("notehub.home")
    .controller("homeController", homeController);

function homeController(applicationDataFactory, contextPath, $state,$scope) {

    $scope.title = "hello";

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
