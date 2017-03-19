//= wrapped

angular
    .module("notehub.signUp")
    .controller("SignUpController", signUpController);

function signUpController(applicationDataFactory, contextPath, $state,$scope) {

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
