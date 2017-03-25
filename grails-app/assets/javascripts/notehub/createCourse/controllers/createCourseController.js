//= wrapped

angular
    .module("notehub.createCourse")
    .controller("CreateCourseController", CreateCourseController);

function CreateCourseController($http, $scope,$window) {
    $scope.newCourse = {          //insecure way of doing thiss?
        name: undefined,
        description: undefined
    };
    $scope.uploadCourse = function(courseInfo){
        console.log("DID YOU LOAD");
        var data =  courseInfo;
        console.log(data);
        $http.post('/api/course/', JSON.stringify(data),{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function (response) {
            console.log(response.data);
            if (response.data)
                $scope.msg = "Put Data Method Executed Successfully!";
                console.log($scope.msg);
            $window.location.href = 'home';
        }, function (response) {
            console.log(data);
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
