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
    <title> NoteHub - Home Page!</title>
</head>
<body  >

<!-- CONTENT HERE-->
<div ng-app="notehub">
    <!-- Create New Post -->  <!-- TODO: Link it to create something -->
    <a class="btn btn-default" href="/"style="margin-top: 20px;"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> BACK</a>

    <!-- CONTENT HERE-->
    <h1>Home</h1>
    <div class="row">

        <div class="col-md-6">
            <h2>Your Circles</h2>
            <circles></circles>
        </div>

        <div class="col-md-6">
            <h2>Circle News</h2>
            {{TODOBOX}}
        </div>
    </div>
</div>
</body>
</html>