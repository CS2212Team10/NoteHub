//= wrapped

angular
    .module("notehub.signIn")
    .controller("SignInController", SignInController);

function SignInController(applicationDataFactory, contextPath, $timeout,$scope,$http,$window) {
    console.log('sign in controller loaded!');
    $scope.title = "hello";
    $scope.valid = true;
    $scope.userLogin = {
        email: '',
        password: ''
    };
    $scope.originForm = angular.copy($scope.userLogin);
    $scope.authSignIn = function (user) { //gets user with password and emaill
        console.log("CLICKEDD");
        console.log(JSON.stringify(user));
        console.log($window.sessionStorage.token)
        $http.post('/api/login', JSON.stringify(user)).then(function(response) {
            console.log(response.data);
            console.log(user);
            $window.sessionStorage.token = response.data.access_token;
        }, function (response) {
            console.log(user);
            $scope.msg = "Service not Exists";
            console.log($scope.msg);
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
        $timeout(function(){

            $http.get('/api/user/').then(function(response) {
            console.log(response.data);
            $window.location.href="/home?user="+response.data.id;
        }, function (response) {
            $scope.valid = false;
            $scope.resetForm();

            $scope.msg = "Service not Exists";
            console.log($scope.msg);
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });

        }, 500);

    };

    $scope.resetForm = function(){
        $scope.userLogin = angular.copy($scope.originForm); // Assign clear state to modified form
        $scope.loginForm.$setPristine(); // this line will update status of your form, but will not clean your data, where `registrForm` - name of form.
    };

    function callAtTimeout() {
        console.log("Timeout occurred");
    }
}
