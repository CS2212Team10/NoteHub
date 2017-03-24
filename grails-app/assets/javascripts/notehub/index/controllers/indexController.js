//= wrapped

angular
    .module("notehub.index")
    .controller("IndexController", IndexController);

function IndexController(applicationDataFactory, contextPath, $state, $window) {
    var vm = this;

    vm.authenticated = false;
    vm.contextPath = contextPath;
    var isLoggedIn = function (){
        if(vm.authenticated == true){

            $window.location.href = '/home'
        }else{
            $window.location.href = '/mainPage'
        }
    };
    isLoggedIn();
    applicationDataFactory.get().then(function(response) {
        vm.applicationData = response.data;
    });

    vm.stateExists = function(name) {
        return $state.get(name) != null;
    };

}
