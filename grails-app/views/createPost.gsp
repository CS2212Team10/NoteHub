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
    <title> NoteHub - Create Post</title>
    <link href="css/hover.css" rel="stylesheet" media="all">

</head>
<style>
input,label { font-size:10pt; font-family:Arial, Helvetica, sans-serif; }
</style>
<body>

<div class="hvr-grow-2" style="border-radius: 20px; box-shadow: 8px -8px 0 rgba(32, 152, 209, 0.6); background-color: rgba(32, 152, 209, 0.3); width:300px; text-align:center; margin:0 auto; padding:0; border:0px solid #000; font-size:12pt;" ng-controller ="CreatePostController">
    <br>
    <h3 class="a" style="text-shadow: 1px -1px 2px rgba(0,0,0,0.5); margin:0 auto 20px auto; margin-top: 10px; width:175px; font-size: 25px">Create Note</h3>

    <p style="margin:0 auto; width:275px; text-align:left;">Title</p>

    <form ng-submit="uploadPost()">
        <input class="hvr-glow" style="padding: 2px; width:275px; margin:0 auto;" type="text" name="Note Name" value="" placeholder="ex: lecture 3" ng-model="newPost.title"><br>

        <p style="margin:0 auto; width:275px; text-align:left; padding-top:10px;">Upload Note</p>

        <div class="hvr-fade hvr-glow" style="border-radius: 5px; border:1px solid #000000; width:275px; padding:5px 0;
        margin:0px auto;text-align:center;">
            <textarea rows="4" cols="50" ng-model="newPost.content">

            </textarea>
            <!-- TODO: fix fileupload
            <label for="file-upload" style="border:0; line-height:30px; display:inline-block; width:255px; height:30px; background-color:#3399FF; color:#FFF;">Browse</label>
            <input id="file-upload" style="display:none" type="file">
            -->
            <!-- TODO: drag and drop function area needed -->

        </div><br>

        <!-- Default Author and Group to 1 TODO: FIX -->
        <!-- class defaults to ID 1 TODO: FIX -->
        <br>
        <input class="hvr-grow-shadow" style="border:0; width:255px; height:30px; margin-bottom: 10px; background-color:#3399FF; color:#FFF;" type="submit" value="Upload">

        <a class="hvr-grow-shadow" style="text-decoration: none; border-radius: 5px; margin-bottom: 10px; border:0; width:255px; height:30px; background-color:#3399FF; color:#FFF;" ng-click='redirect()' class="btn">
            cancel
        </a>​
        <br>
    </form>

</div>
</body>
</html>