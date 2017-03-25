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

<div class="hvr-grow-2" style="border-radius: 20px; box-shadow: 8px -8px 0 rgba(32, 152, 209, 0.6); background-color: rgba(32, 152, 209, 0.3); width:300px; text-align:center; margin:0 auto; padding:0; border:0px solid #000; font-size:12pt;" ng-controller ="SignInController">
    <br>
    <h3 style="text-shadow: 1px -1px 2px rgba(0,0,0,0.5); margin:0 auto 20px auto; width:175px; font-size: 40px">Sign In</h3>

        <form name="loginForm" ng-submit="authSignIn(userLogin)">

        <span ng-hide="valid" ng-cloak>INVALID EMAIL OR PASSWORD</span>

        <p style="margin:0 auto; width:275px; text-align:left;">Email</p>

        <input style="width:275px; margin:0 auto; padding:0;" type="text" name="email" ng-minlength="3"  placeholder="Email address" ng-model="userLogin.email" required><br>

        <p style="margin:0 auto; width:275px; text-align:left;">Password</p>

        <input style="width:275px; margin:0 auto; padding:0;" type="password" name="password" required ng-minlength="3" placeholder="Password" ng-model="userLogin.password"><br>

        <br>
        <button style="border:0; width:275px; height:30px; background-color:#3399FF; color:#FFF;" class="btn" type="submit" value="Upload" ng-click="submitted = true" ng-disabled="loginForm.email.$invalid || loginForm.password.$invalid">Sign In</button>​
            <br>
            <br>
        </form>
</div>
</body>
</html>