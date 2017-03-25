<!-----------------------------------------------------------------------------
    @author Gabe Keenleyside
    @date Mar, 2, 2017
    @version 2.0 (Stage 2)

    Class Page
    ====================================
 ------------------------------------------------------------------------------->

<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="mainPlain"/>
</head>
<style>
input,label { font-size:10pt; font-family:Arial, Helvetica, sans-serif; }
</style>
<body>

<div class="hvr-grow-2" style="border-radius: 20px; box-shadow: 8px -8px 0 rgba(32, 152, 209, 0.6); background-color: rgba(32, 152, 209, 0.3); width:300px; text-align:center; margin:0 auto; padding:0; border:0px solid #000; font-size:12pt;" ng-controller ="SignUpController">

    <h3 style="text-shadow: 1px -1px 2px rgba(0,0,0,0.5); margin:0 auto 20px auto; width:175px; font-size: 40px">Sign Up</h3>

    <div role="alert">
        <div ng-show="submitted" ng-cloak>
        <span class="alert alert-warning" ng-show="error.passwordMatch">
            Passwords don't match!</span>
        <span class="alert alert-warning" ng-show="error.properEmailFormat">
            Not valid email!</span>
        </div>
    </div>
    <br>

    <form name="signUpForm" ng-submit="signUpClick(newUserInfo)">

        <p style="margin:0 auto; width:275px; text-align:left;">User Name</p>
        <input style="width:255px; "class="hvr-glow" style="left: 0" type="text" name="username" value="" placeholder="User Name" ng-model="newUserInfo.username"><br>

        <p style="margin:0 auto; width:275px; text-align:left;">Full Name</p>
        <input style="width:255px; "class="hvr-glow" type="text" name="fullname" value="" placeholder="Full Name" ng-model="newUserInfo.fullname"><br>

        <p style="margin:0 auto; width:275px; text-align:left;">Email</p>
        <input style="width:255px; "class="hvr-glow" type="email" name="email" value="" placeholder="Email Address" ng-model="newUserInfo.email"><br>

        <p style="margin:0 auto; width:275px; text-align:left;">Password</p>
        <input style="width:255px; "class="hvr-glow" type="text" name="password" value="" placeholder="Password" ng-model="newUserInfo.password"><br>

        <p style="margin:0 auto; width:275px; text-align:left;">Re-Type Password</p>
        <input style="width:255px; "class="hvr-glow" type="text" name="retypepassword" value="" placeholder="Re-Type Password" ng-model="newUserInfo.retypepassword"><br>

    <br>
        <button style="margin-bottom: 10px; border:0; line-height:30px; display:inline-block; width:255px; height:35px; background-color:#3399FF; color:#FFF;" class="hvr-grow-shadow btn" type="submit" value="Upload" ng-click="submitted = true" ng-disabled="">Sign In</button>
    <br>
    </form>
    ​<button style="border:0; line-height:30px; display:inline-block; width:255px; height:35px; background-color:#3399FF; color:#FFF;" class="hvr-grow-shadow btn" ng-click="resetForm()">Reset</button>​
    <br><br>
</div>
</body>
</html>