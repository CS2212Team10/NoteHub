<!DOCTYPE html>
<html>
<style>
.button {
    background-color: #e7e7e7;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: left;
    font-size: 16px;
    margin: 4px 2px;

}

h1{
    color: black;

}

p{
    color: black;
}

i{
    color: black;
    margin-left: 100px;
}
</style>


<head>
    <meta name="layout" content="main"/>
    <title> NoteHub - CLASS NAME HERE</title>
</head>



<body>

<div class="content" ng-controller="DocViewController">

    <a class="btn btn-default btn-back" href="/class?id={{id}}&user={{userId}}">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>BACK</span>
    </a>
<div class="hvr-grow-2" style="border-radius: 20px; box-shadow: 8px -8px 0 rgba(32, 152, 209, 0.6); background-color: rgba(32, 152, 209, 0.3); width:300px; text-align:center; margin:0 auto; padding:0; border:0px solid #000; font-size:12pt;">
    <h1 style="font-weight: bold">{{ groupName }}</h1>
    <p style="font-weight: bold">{{title}}</p>

    <h2>Student Rating: {{starListCount}}</h2>

    <textarea class="hvr-fade" style="border-radius: 5px; margin-bottom: 10px" rows="4" cols="50">{{content}}</textarea>
</div>

    <!--
<h2>Your Rating</h2>
-->


<!-- TODO: fix download functionality
<button class="button"><i class ="fa fa-floppy-o" aria-hidden="true"></i> Download</button>-->
    <!-- TODO: fix the data structure and relation between
    <button class="btn" ng-click="ratePost()"><i class="fa fa-star" aria-hidden="true"></i></button>
-->
</div>

</body>
</html>