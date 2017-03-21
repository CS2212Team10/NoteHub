//= wrapped

angular
    .module("notehub.createCircle")
    .controller("CreateCircleController", CreateCircleController);

function CreateCircleController($http, $scope) {
    $scope.userId = getQueryVariable('user');
    $scope.newCircle = {          //insecure way of doing thiss
        title: undefined,
        description: undefined
    };
    $scope.uploadCircle = function(circleInfo){
        console.log("DID YOU LOAD");
        var data =  circleInfo;
        console.log(data);
        $http.post('/userGroup/', JSON.stringify(data)).then(function (response) {
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
