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

<div class="hvr-grow-2" style="border-radius: 20px; box-shadow: 8px -8px 0 rgba(32, 152, 209, 0.6); background-color: rgba(32, 152, 209, 0.3); width:300px; text-align:center; margin:0 auto; padding:0; border:0px solid #000; font-size:12pt;" ng-controller ="CreatePostController">

    <h3 style="text-shadow: 1px -1px 2px rgba(0,0,0,0.5); margin:0 auto 20px auto; width:175px; font-size: 40px">Sign In</h3>

    <p style="margin:0 auto; width:275px; text-align:left;">Email</p>

    <form class="hvr-glow" method="post" enctype="multipart/form-data">
        <input style="width:275px; margin:0 auto; padding:0;" type="text" name="Note Name" value="" placeholder="Email address" ng-model="title"><br>
    </form>


    <p style="margin:0 auto; width:275px; text-align:left;">Password</p>

    <form class="hvr-glow" method="post" enctype="multipart/form-data">
        <input style="width:275px; margin:0 auto; padding:0;" type="text" name="Note Name" value="" placeholder="Password" ng-model="titles"><br>
    </form>
    <br>
    <a style="margin-top: 20px; margin-bottom: 20px; border:0; width:245px; height:30px; background-color:#3399FF; color:#FFF;" href="home" class="btn">
            Sign In
    </a>​

</div>
</body>
</html>