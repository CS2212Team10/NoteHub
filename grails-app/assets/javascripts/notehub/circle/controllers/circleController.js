//= wrapped

angular
    .module("notehub.circle")
    .controller("circleController", circleController);

function circleController($http, $scope,$window) {
    var vm = this;
    vm.courseid = getQueryVariable('id');
    vm.circleid = getQueryVariable('circleid');
    $scope.userId = vm.userId;

    vm.circles=[];
    var courseData;
    $http.get('/api/course/?id='+vm.courseid,{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function(response) {
        courseData = response.data;
        var circleList = courseData.circles;
        var x = 0;
        for(x in circleList){
            $http.get('/api/circle/?id='+circleList[x].id,{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function(response) {
                vm.circles.push(response.data);
            });
        }
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