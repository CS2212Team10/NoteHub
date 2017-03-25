//= wrapped

angular
    .module("notehub.signUp")
    .controller("SignUpController", signUpController);

function signUpController(applicationDataFactory, contextPath, $window ,$scope,$http,$timeout) {

    $scope.title = "hello";

    //clear users token when they are trying to sign up (AKA LOG THEM OFF)

    //USED TO RESET THE FORM
    var emptyUserInfo = {
        username: "",
        fullname: "",
        email: "",
        password: "",
        retypepassword: ""
    };

    //TRACK ERRORS
    $scope.error = {
        passwordMatch: false,
        properEmailFormat: false,
        duplicateEmail: false,
        duplicateName: false
    };


    console.log($scope.error);
    /*
     var newUser = {
     name:"",
     email:"",
     password:"",
     picture:""
     }; */

    // $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    $scope.originForm = angular.copy($scope.emptyUserInfo); //for resetting the form.
    $scope.resetError = angular.copy($scope.error); //for resetting the form.


    $scope.signUpClick = function(user){
        console.log('Sign up button was pressed');

        $scope.error = {
            passwordMatch: false,
            properEmailFormat: false,
            duplicateEmail: false,
            duplicateName: false
        };

        var data ={
            name: user.username,
            email: user.email,
            password: user.password
        };
        console.log("loaded user data");
        console.log($window.sessionStorage.token);

        //validate the password
        /*
         if($scope.checkMatchPass(data.password, user.retypepassword) == false){
         console.log("loaded user data");
         return false;
         }*/
        /*
         $http({
         method: 'POST',
         url: '/api/user/',
         headers: {
         'Authorization': undefined
         },
         data: data
         }).then(function successCallback(response) {
         // this callback will be called asynchronously
         // when the response is available
         console.log("Cool it loaded");
         console.log(response);
         }, function errorCallback(response) {
         console.log(response);
         // called asynchronously if an error occurs
         // or server returns response with an error status.
         });*/

        /*
        fetch('/api/user/',{
            body: data,
            method: 'POST'
        }).then(res=>{
            if(res.ok){
                console.log(res);
                console.log('x');
            }
        }); */

            $http.post('/api/user/', JSON.stringify(data)).then(function (response) {
                console.log(response.data);
                console.log("Ay something good happened");
                if (response.data) {
                    $scope.msg = "Put Data Method Executed Successfully!";
                }
                console.log($scope.msg);
            }, function (response) {
                $scope.msg = "Service not Exists";
                //$scope.resetForm();
                console.log(response);
                console.log($scope.msg);
            });


         var user = {
            email: data.email,
            password: data.password
         };
        $timeout(function() {
            $http.post('/api/login', JSON.stringify(user)).then(function (response) {
                console.log(response);
                console.log(response.data.access_token);

                $window.sessionStorage.token = response.data.access_token;

                $timeout(function () {
                    $window.location.href = "/home";
                }, 1000);
            }, function (response) {
                console.log(user);
                console.log(response);
                $scope.msg = "Service not Exists";
                console.log($scope.msg);
                return false;
            });
        },1000);
    };

    $scope.checkMatchPass = function(password1, password2){
        if (password1 != password2){
            console.log("passwords don't match");
            $scope.error.passwordMatch = true;
            $scope.resetForm();
            return false;

        }else{
            console.log("passwords matched");
            return true;
        }

    };

    //TODO fix reset
    $scope.resetForm = function(){
        console.log("resetted form");
        $scope.newUserInfo = angular.copy($scope.originForm); // Assign clear state to modified form
        $scope.signUpForm.$setPristine(); // this line will update status of your form, but will not clean your data, where `registrForm` - name of form.
    };
    $scope.resetErrors = function() {
        $scope.error = angular.copy($scope.resetError);

    }; // Assign clear state to modified form
    //TODO add a proper password validation.
    $scope.equalPassword = function (password1, password2) {
        return (password1 == password2);
    };

    $scope.validEmail = function(email){
        //if email is good return true
        //elase false
    };
}
