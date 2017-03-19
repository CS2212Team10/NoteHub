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

    <p style="margin:0 auto; width:275px; text-align:left;">User Name</p>

    <form method="post" enctype="multipart/form-data">
        <input style="width:275px; margin:0 auto; padding:0;" type="text" name="Note Name" value="" placeholder="User Name" ng-model="username"><br>
    </form>

    <p style="margin:0 auto; width:275px; text-align:left;">Full Name</p>

    <form method="post" enctype="multipart/form-data">
        <input style="width:275px; margin:0 auto; padding:0;" type="text" name="Note Name" value="" placeholder="Full Name" ng-model="fullname"><br>
    </form>

    <p style="margin:0 auto; width:275px; text-align:left;">uwo email</p>

    <form method="post" enctype="multipart/form-data">
        <input style="width:275px; margin:0 auto; padding:0;" type="text" name="Note Name" value="" placeholder="uwo email" ng-model="uwoemail"><br>
    </form>

    <p style="margin:0 auto; width:275px; text-align:left;">Password</p>

    <form method="post" enctype="multipart/form-data">
        <input style="width:275px; margin:0 auto; padding:0;" type="text" name="Note Name" value="" placeholder="Password" ng-model="password"><br>
    </form>

    <p style="margin:0 auto; width:275px; text-align:left;">Re-Type Password</p>

    <form method="post" enctype="multipart/form-data">
        <input style="width:275px; margin:0 auto; padding:0;" type="text" name="Note Name" value="" placeholder="Re-Type Password" ng-model="retypepassword"><br>
    </form>

    <br>

    <p style="margin:0 auto; width:275px; text-align:left;">Upload a Profile Picture</p>
    <div style="border:1px solid #000000; width:275px; padding:5px 0;
    margin:0px auto;text-align:center;">
        <textarea rows="4" cols="50" ng-model="content">
            <p style="margin:0 auto; width:275px; text-align:left; padding-top:10px;"></p>
        </textarea>
        <label for="file-upload" style="border:0; line-height:30px; display:inline-block; width:255px; height:30px; background-color:#3399FF; color:#FFF;">Browse</label>
        <input id="file-upload" style="display:none" type="file">

    </div>
    <br>
        <a style="border:0; width:275px; height:30px; background-color:#3399FF; color:#FFF;" href="home" class="btn">
                Sign Up
        </a>​

</div>
</body>
</html>