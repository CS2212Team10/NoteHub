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

<div ng-controller="classController">

    <!-- TODO: Link it to create something -->
    <a class="btn btn-default btn-back" href="/home?user={{userId}}">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>BACK</span>
    </a>

    <h1>{{title}}</h1> <!-- TODO: controller for this page -->

    <!-- Grid System -->
    <div class="row">

        <!-- a list of all the notes in this circle -->
        <div class="col-md-4">
            <note-list></note-list>
        </div>


        <!-- a list of all the sub-circles in this circle (Not for stage2) -->
        <div class="col-md-4">
            <h2>Sub-Circles</h2>
        </div>


        <!-- a list of new content -->
        <div class="col-md-4">
            <h2>News</h2>
        </div>


    </div> <!-- /.row -->
</div> <!-- /.ng-app -->


</body>
</html>