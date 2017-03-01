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
    <title> NoteHub - CLASS NAME HERE</title>
</head>
<body  >

    <!-- CONTENT HERE-->
<div ng-app="notehub" ng-controller="">
    <!-- Create New Post -->  <!-- TODO: Link it to create something -->
    <button type="button" class="btn btn-default" style="margin-top: 20px;"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> BACK</button>

<!-- CONTENT HERE-->
    <h1>{{className}}</h1>
    <div class="row">

        <div class="col-md-4">
            <note-list></note-list>
        </div>

        <div class="col-md-4">
            <h2>Sub-Circles</h2>

        </div>

        <div class="col-md-4">
            <h2>News</h2>

        </div>
    </div>
</div>
</body>
</html>