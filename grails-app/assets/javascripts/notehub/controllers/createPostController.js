//= wrapped

angular
    .module("notehub")
    .controller("CreatePostController", CreatePostController);

function CreatePostController($http, $scope) {
    var vm = this;
    vm.userId = getQueryVariable('user');
    vm.id = getQueryVariable('id');
    $scope.id = vm.id; // for some reason vm.id doesnt work but scope does
    $scope.userId = vm.userId;
    $scope.uploadPost = function(title,content){
        console.log("DID YOU LOAD");
        var data = {
            title: title,
            author: vm.userId,
            group: vm.id,
            content: content
        };
        $http.post('/post/', JSON.stringify(data)).then(function (response) {
            console.log(response.data);
            if (response.data)
                $scope.msg = "Put Data Method Executed Successfully!";
                console.log($scope.msg);
        }, function (response) {
            $scope.msg = "Service not Exists";
            console.log($scope.msg);
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
    };


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
