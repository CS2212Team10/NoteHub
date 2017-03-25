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
    <title> NoteHub - Main Page</title>
</head>

<body>

<div style="text-align:center; margin:0 auto; padding:0; border:0px solid #000; font-size:12pt;" ng-controller ="CreatePostController">

    <h3 style="text-align: center; text-shadow: 0px 3px 0px #5e5e5e, 3px 8px 15px rgba(0,0,0,0.1), 3px 8px 5px rgba(0,0,0,0.3); font-style: italic; color: #969595; font: 300 100px/1.0 'Just Another Hand', Helvetica, sans-serif; margin:0 auto 20px auto; width:100%;">NoteHub</h3>
    <br>


    <form method="post" enctype="multipart/form-data">

        <a style="text-decoration: none; border:0; width:275px; height:30px; margin-bottom: 20px; background-color:#3399FF; color:#FFF;" href="/signin" class="hvr-grow-shadow btn">
            Sign In
        </a>​
        <br>
        <a style="text-decoration: none; border:0; width:275px; height:30px; background-color:#3399FF; color:#FFF;" href="/signup" class="hvr-grow-shadow btn">
            Sign Up
        </a>​
    </form>

</div>
</body>
</html>

<style>
input,label { font-size:10pt; font-family:Arial, Helvetica, sans-serif; }

h3 {
    font: 500 150px/1.0 'Just Another Hand', Helvetica, sans-serif;
	color: #969595;
	background-color: green;
	font-style: italic;
	text-shadow: 0px 3px 0px #5e5e5e, 3px 8px 15px rgba(0,0,0,0.1), 3px 8px 5px rgba(0,0,0,0.3);
}

</style>