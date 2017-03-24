//= wrapped

angular
    .module("notehub.createPost")
    .controller("CreatePostController", CreatePostController);

function CreatePostController($http, $scope,$window) {
    $scope.id = getQueryVariable('id');
    $scope.newPost = {          //insecure way of doing thiss
        title: undefined,
        group: $scope.id,
        content: undefined
    };
    $scope.uploadPost = function(){
        console.log("DID YOU LOAD");
        var data =  $scope.newPost;

        $http.post('/api/post/', JSON.stringify(data),{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function (response) {
            console.log(response.data);
            if (response.data)
                $scope.msg = "Put Data Method Executed Successfully!";
                console.log($scope.msg);
            $window.location.href = 'class?id='+$scope.id;
        }, function (response) {
            $scope.msg = "Service not Exists";
            console.log($scope.msg);
            console.log(response.data);
            console.log(response);
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
