<!-----------------------------------------------------------------------------
    @author Paul Li
    @date Feb, 27, 2017
    @version 2.0 (Stage 2)

    Home Page (partial)
    ====================================
    Stage 2 Home page only has the users circles
 ------------------------------------------------------------------------------->

<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title> NoteHub - Home Page</title>
</head>


<body>

<div ng-controller="homeController">
    <!-- TODO: Link it to create post-->
    <!-- DONT need a back button on the home page yet
    <a class="btn btn-default btn-back" href="/home">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>BACK</span>
    </a> -->

    <!-- Page Title --> <!-- TODO: controller for the page-->
    <h1 style="text-align: center; margin-bottom: 20px; margin-left: 5px; text-shadow: 1px -1px 2px rgba(0,0,0,0.5); font-size: 40px">Home</h1>

    <!-- Grid System -->
    <div class="row" style="border-radius: 20px; box-shadow: 8px -8px 0 rgba(32, 152, 209, 0.6); background-color: rgba(32, 152, 209, 0.3); text-align:center; margin:0 auto; padding:0; border:0px solid #000; font-size:12pt;">

        <!-- User's Circles -->
        <div class="col-md-12">
            <h2 style="text-shadow: 1px -1px 2px rgba(0,0,0,0.5); margin:20px auto 0 auto; width:175px; font-size: 30px">Your Circles</h2>
            <course-list></course-list>
        </div> <!-- /.col1/1-->
        <!--<button ng-click="changeView()">hello</button>-->
        <!-- Circle News -->
        <!--<div class="col-md-6">
            <h2>Circle News</h2>
            TODO-->
        <!--
        <div class="rating">
            <i class="ratings_stars fa fa-star fa-2x" aria-hidden="true" data-rating="1" onclick='console.log("Hello")'></i>
            <i class="ratings_stars fa fa-star fa-2x" aria-hidden="true" data-rating="1"></i>
            <i class="ratings_stars fa fa-star fa-2x" aria-hidden="true" data-rating="1"></i>
            <i class="ratings_stars fa fa-star fa-2x" aria-hidden="true" data-rating="1"></i>
            <i class="ratings_stars fa fa-star fa-2x" aria-hidden="true" data-rating="1"></i>
        </div>
        -->


        </div> <!-- /.col2/2 -->
    </div> <!-- /.row -->
</div> <!-- /.ng-app: noteHub -->


</body>
</html>