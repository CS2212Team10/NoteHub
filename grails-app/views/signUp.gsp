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

<div style="width:300px; text-align:center; margin:0 auto; padding:0; border:0px solid #000; font-size:12pt;" ng-controller ="SignUpController">

    <h3 style="margin:0 auto 20px auto; width:175px; font-size: 40px">Sign Up</h3>

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
        <input type="text" name="username" value="" placeholder="User Name" ng-model="newUserInfo.username"><br>

        <p style="margin:0 auto; width:275px; text-align:left;">Full Name</p>
        <input type="text" name="fullname" value="" placeholder="Full Name" ng-model="newUserInfo.fullname"><br>

        <p style="margin:0 auto; width:275px; text-align:left;">Email</p>
        <input type="text" name="email" value="" placeholder="Email Address" ng-model="newUserInfo.email"><br>

        <p style="margin:0 auto; width:275px; text-align:left;">Password</p>
        <input type="text" name="password" value="" placeholder="Password" ng-model="newUserInfo.password"><br>

        <p style="margin:0 auto; width:275px; text-align:left;">Re-Type Password</p>
        <input type="text" name="retypepassword" value="" placeholder="Re-Type Password" ng-model="newUserInfo.retypepassword"><br>

    <br>

    <p style="margin:0 auto; width:275px; text-align:left;">Upload a Profile Picture</p>
    <div style="border:1px solid #000000; width:275px; padding:5px 0;
    margin:0px auto;text-align:center;">
        <textarea rows="4" cols="50" ng-model="picture">
            <p style="margin:0 auto; width:275px; text-align:left; padding-top:10px;"></p>
        </textarea>
        <label for="file-upload" style="border:0; line-height:30px; display:inline-block; width:255px; height:30px; background-color:#3399FF; color:#FFF;">Browse</label>
        <input id="file-upload" style="display:none" type="file">

    </div>
    <br>
        <button class="btn" type="submit" value="Upload" ng-click="submitted = true" ng-disabled="">Sign In</button>

    </form>
    ​<button class="btn" ng-click="resetForm()">Reset</button>​
</div>
</body>
</html>