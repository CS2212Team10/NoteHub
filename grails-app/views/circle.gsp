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
    <title> NoteHub - CLASS NAME HERE</title>
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
    <div class="row">

        <!-- a list of all the notes in this circle -->
        <div class="col-md-6">
            <h2>Posts</h2>
            <note-list-circle></note-list-circle>
        </div>


    </div> <!-- /.row -->
</div> <!-- /.ng-app -->

</body>
</html>