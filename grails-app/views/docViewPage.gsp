<!DOCTYPE html>
<html>
<style>
button{
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

<div class="content" ng-controller="DocViewController" ng-cloak>

    <a class="btn btn-default btn-back" href="/class?id={{id}}&user={{userId}}">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>BACK</span>
    </a>

<h1 style="font-weight: bold">{{ groupName }}</h1>
<p style="font-weight: bold">{{title}}</p>

<h2>Student Rating: {{starListCount}}</h2>

    <!--
<textarea rows="4" cols="50">{{content}}</textarea>
    -->
    <div class="row">
        <div class="col-md-6"> <textarea rows="4" cols="50">{{content}}</textarea> </div>
        <div class="col-md-6"><comments-list></comments-list></div>




</div>
    <!--
    <comments-list></comments-list>
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