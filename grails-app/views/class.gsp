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
<body ng-app="notehub">

    <!-- CONTENT HERE-->

    <!-- Create New Post -->  <!-- TODO: Link it to create something -->
    <button type="button" class="btn btn-default" style="margin-top: 20px;"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> BACK</button>

    <h1> CLASS NAME HERE </h1>

    <!-- Main Body/Content -->
    <div class="row">

        <div class="col-md-4">
            <note-list></note-list> <!-- Using note-list component -->
        </div>

        <div class="col-md-4">
            <h2>Sub-Circles</h2>

        </div>

        <div class="col-md-4">
            <h2>News</h2>

        </div>
    </div>

</body>
</html>