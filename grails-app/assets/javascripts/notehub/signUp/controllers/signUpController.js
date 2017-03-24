//= wrapped

angular
    .module("notehub.signUp")
    .controller("SignUpController", signUpController);

function signUpController(applicationDataFactory, contextPath, $state,$scope,$http) {

    $scope.title = "hello";

    var emptyUserInfo = {
        username: "",
        fullname: "",
        email: "",
        password: "",
        retypepassword: ""
    };

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

    $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

    $scope.originForm = angular.copy($scope.emptyUserInfo); //for resetting the form.
    $scope.resetError = angular.copy($scope.error); //for resetting the form.


    $scope.signUpClick = function(user){
        var data ={
            name: user.username,
            email: user.fullname,
            password: user.password,
            picture:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAgAEl...=="
        };
        console.log("loaded user data");
        //validate the password
        if($scope.checkMatchPass(data.password, user.retypepassword) == false){
            return false;
        }

        $http.post('/api/user/', JSON.stringify(data)).then(function (response) {
            console.log(response.data);
            console.log("loaded");
            if (response.data) {
                $scope.msg = "Put Data Method Executed Successfully!";
                $window.location.href = "/home?user=" + response.data;
            }
            console.log($scope.msg);
        }, function (response) {
            $scope.msg = "Service not Exists";
            $scope.resetForm();
            console.log(response);
            console.log($scope.msg);
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
    };

    $scope.checkMatchPass = function(password1, password2){
        if (password1 != password2){
            console.log("passwords don't match");
            $scope.error.passwordMatch = true;
            $scope.resetForm();
            return false; //TODO fix what ever this is supposta do (spit our error)

        }else{
            console.log("passwords matched");
            return true;
        }

    };

    //TODO fix reset
    $scope.resetForm = function(){
        console.log("wtf");
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
