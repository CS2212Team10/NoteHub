//= wrapped
/*
angular
    .module("notehub")
    .controller("ClassController", ClassController);

function ClassController($http, $scope) {
    var vm = this;
    vm.userId = getQueryVariable('user');
    $scope.userId = vm.userId;
    var userData;
    $http.get('/user/?id='+vm.userId).then(function(response) {
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
    */