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

<div style="width:300px; text-align:center; margin:0 auto; padding:0; border:0px solid #000; font-size:12pt;" ng-controller ="CreatePostController">

    <h3 style="margin:0 auto 20px auto; width:175px; font-size: 40px">Sign In</h3>

    <p style="margin:0 auto; width:275px; text-align:left;">Email</p>

    <form method="post" enctype="multipart/form-data">
        <input style="width:275px; margin:0 auto; padding:0;" type="text" name="Note Name" value="" placeholder="Email address" ng-model="title"><br>
    </form>


    <p style="margin:0 auto; width:275px; text-align:left;">Password</p>

    <form method="post" enctype="multipart/form-data">
        <input style="width:275px; margin:0 auto; padding:0;" type="text" name="Note Name" value="" placeholder="Password" ng-model="titles"><br>
    </form>
    <br>
    <a style="border:0; width:275px; height:30px; background-color:#3399FF; color:#FFF;" href="home" class="btn">
            Sign In
    </a>​

</div>
</body>
</html>