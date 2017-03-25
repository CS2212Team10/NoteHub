//= wrapped

angular
    .module("notehub.class")
    .controller("classController", classController);

function classController($http, $scope,$window) {
    var vm = this;
    vm.userId = getQueryVariable('user');
    $scope.userId = vm.userId;
    var userData;
    $http.get('/api/user/',{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function(response) {
        userData = response.data;
        $scope.title = userData.title;
    });
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}