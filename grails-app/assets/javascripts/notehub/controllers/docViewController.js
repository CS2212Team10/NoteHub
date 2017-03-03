//= wrapped

angular.module("notehub")
    .controller("DocViewController", DocViewController);

function DocViewController($http, $scope) {
    var vm = this;
    $scope.postId = getQueryVariable('post');
    $scope.id = getQueryVariable('id');
    $scope.userId = getQueryVariable('user');

    $scope.title = 'NULL';
    $scope.author = 'NULL';
    $scope.content = 'NULL';
    $scope.starList = [];
    $scope.starListCount = 0;

    var postData = null;

        $http.get('/post/?id='+$scope.postId).then(function(response) {
            postData = response.data;
            $scope.title = postData.title;
            $scope.author = postData.author;
            $scope.content = postData.content;
            $scope.starList = postData.stars;
            $scope.starListCount = postData.stars.length;
            /*this stuff was used to get a bunch of star data
            var i;
            var starTotal = 0;
            var starCount = 0
            for(i = 0; i < vm.starList.length; i++) {
                $http.get('/userStar/?id=' + vm.starList[i].id).then(function (response) {
                });
            }*/
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