<!-----------------------------------------------------------------------------
    @author Paul Li
    @date Feb, 27, 2017
    @version 2.0 (Stage 2)

    Class Page
    ====================================
    Stage 2 Class page only has the note posts done.
 ------------------------------------------------------------------------------->

<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main"/>
</head>
<style>
input,label { font-size:10pt; font-family:Arial, Helvetica, sans-serif; }
</style>
<body>

<div class="hvr-grow-2" style="border-radius: 20px; box-shadow: 8px -8px 0 rgba(32, 152, 209, 0.6); background-color: rgba(32, 152, 209, 0.3); width:300px; text-align:center; margin:0 auto; padding:0; border:0px solid #000; font-size:12pt;" ng-controller ="CreateCircleController">

    <h3 style="text-shadow: 1px -1px 2px rgba(0,0,0,0.5); margin:0 auto 20px auto; width:175px; font-size: 25px">Create New Circle</h3>

    <p style="margin:0 auto; width:275px; text-align:left;">Title</p>
    <!-- TODO fix texts -->
    <form ng-submit="uploadCircle(circleInfo)">
        <input class="hvr-glow" style="border-radius: 5px; width:275px; margin:0 auto; padding:0;" type="text" name="Note Name" value="" placeholder="ex: Class 2212B" ng-model="circleInfo.name"><br>
        <p style="margin:0 auto; width:275px; text-align:left; padding-top:10px;">Create Circle</p>
        <div class="hvr-fade hvr-glow" style="border:1px solid #000000; width:275px; padding:5px 0;
        margin:0px auto; margin-bottom: 20px; text-align:center;">
            <textarea rows="4" cols="50" ng-model="circleInfo.description">

            </textarea>
        </div><br>
        <!-- Default Author and Group to 1 TODO: FIX -->
        <!-- class defaults to ID 1 TODO: FIX -->
        <input style="border:0; width:245px; height:30px; margin-bottom: 15px; background-color:#3399FF; color:#FFF;" class="hvr-grow-shadow btn" type="submit" value="Upload">
        <!--
        <a href="/class?id={{id}}&user={{userId}}">
            <input style="border:0; width:275px; height:30px; margin-bottom: 25px; background-color:#3399FF; color:#FFF;" type="button" value="Upload" ng-click="uploadPost(title, content)">
        </a>​-->

        <a style="text-decoration: none; margin-bottom: 15px; border:0; width:245px; height:30px; background-color:#3399FF; color:#FFF;" class="hvr-grow-shadow btn" href="/home?user={{userId}}" class="btn">
            Cancel
        </a>​
    </form>

</div>
</body>
</html>