<!-----------------------------------------------------------------------------
    @author Paul Li
    @date Feb, 27, 2017
    @version 2.0 (Stage 2)

    Class Page (partial)
    ====================================
    Stage 2 Class page only has the note posts done.
 ------------------------------------------------------------------------------->

<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title> NoteHub - Circle Page</title>
</head>
<body>

<div ng-controller="circleController" ng-cloak>

    <!-- TODO: Link it to create something -->
    <a class="btn btn-default btn-back" href="/home">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>BACK</span>
    </a>

    <h1>{{title}}</h1> <!-- TODO: controller for this page -->

    <!-- Grid System -->
    <div class="hvr-grow-2 row" style="margin-left: 25px; margin-right: 25px; border-radius: 20px; box-shadow: 8px -8px 0 rgba(32, 152, 209, 0.6); background-color: rgba(32, 152, 209, 0.3)">

        <!-- a list of all the notes in this circle -->
        <div class="col-md-12">
            <h2>Posts</h2>
            <note-list-circle></note-list-circle>
        </div>


    </div> <!-- /.row -->
</div> <!-- /.ng-app -->

</body>
</html>