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

<div style="width:300px; text-align:center; margin:0 auto; padding:0; border:0px solid #000; font-size:12pt;" ng-controller ="CreatePostController">

    <h3 style="margin:0 auto 20px auto; width:175px;">Create New Note</h3>

    <p style="margin:0 auto; width:275px; text-align:left;">Title</p>

    <form ng-submit="uploadPost()">
        <input style="width:275px; margin:0 auto; padding:0;" type="text" name="Note Name" value="" placeholder="ex: lecture 3" ng-model="newPost.title"><br>
        <p style="margin:0 auto; width:275px; text-align:left; padding-top:10px;">Upload Note</p>
        <div style="border:1px solid #000000; width:275px; padding:5px 0;
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
        <input style="border:0; width:275px; height:30px; margin-bottom: 10px; background-color:#3399FF; color:#FFF;" type="submit" value="Upload">
        <!--
        <a href="/class?id={{id}}&user={{userId}}">
            <input style="border:0; width:275px; height:30px; margin-bottom: 10px; background-color:#3399FF; color:#FFF;" type="button" value="Upload" ng-click="uploadPost(title, content)">
        </a>​-->

        <a style="border:0; width:275px; height:30px; background-color:#3399FF; color:#FFF;" ng-click='redirect()' class="btn">
            cancel
        </a>​
    </form>

</div>
</body>
</html>