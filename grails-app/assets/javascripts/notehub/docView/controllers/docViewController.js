//= wrapped

angular.module("notehub.docView")
    .controller("DocViewController", DocViewController);

function DocViewController($http, $scope,$window) {
    $scope.postId = getQueryVariable('post');
    $scope.id = getQueryVariable('id');
    $scope.iscircle = getQueryVariable('circle');

    $scope.title = 'NULL';
    $scope.author = 'NULL';
    $scope.content = 'NULL';
    $scope.group = 0;
    $scope.starList = [];
    $scope.starListCount = 0;
    $scope.disableButton = false;
    $scope.groupName = 'NULL';
    $scope.starData = {
        post: undefined
    };

        $http.get('/api/post/?id='+$scope.postId,{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function (response) {
            var temp = response.data;
            var list = temp.stars;
            var x = 0;
            for (x in list) {
                $http.get('/api/userStar/?id='+list[x].id,{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function (response2) {
                    $http.get('/api/user/',{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function (response3) {
                        if(response3.data.id == response2.data.user.id){
                            $scope.disableButton = true;
                        }
                    });
                });
            }
        });


    $scope.incrementStar = function(){
        var addStar = $scope.starData;
        addStar.post = $scope.postId;
        var postData = undefined;

        $http.post('/api/userStar/', JSON.stringify(addStar),{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function (response) {
            console.log(response.data);
            postData = response.data;
        });


        $window.location.reload();
    };
    /*
    $scope.ratePost = function(){
        console.log("Rated Post!");
        //fetches up to date, data on the post
        $http.get('/post/?id='+$scope.postId).then(function(response) {
            postData = response.data;
            $scope.title = postData.title;
            $scope.author = postData.author;
            $scope.groupId = postData.group;
            $scope.content = postData.content;
            $scope.starList = postData.stars;
            $scope.starListCount = postData.stars.length;
        });

        /*
        $http.get('/post/?id='+$scope.postId).then(function(response) {
            postData = response.data;
            $scope.theAuthor = postData.author;
        });*/

    /*
        // Find if they are in there
        var pos;
        var found = false;

        for(pos = 0; pos < $scope.starList.length && !found; pos++){
            var tempAuthor = 0;
            $http.get('/userStar/?id='+$scope.starList[pos]).then(function(response) {
                postData = response.data;
                tempAuthor = postData.author;
            });
            if(tempAuthor == $scope.userId){
                found = true;
            }
        }

        if(!found) {
            // creates new star data
            var starData = {
                post: parseInt($scope.postId),
                user: parseInt($scope.userId)

            };

            // add star data
            $http.post('/userStar/', JSON.stringify(starData)).then(function (response) {
                console.log("User Star Added");
                if (response.data)
                    $scope.msg = "Put Data Method Executed Successfully!";
                console.log($scope.msg);
            }, function (response) {
                $scope.msg = "User Star Failed To Add" + JSON.stringify(starData);
                console.log($scope.msg);
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
            });
            var starId = 0;
            found = false;
            var i;
            for(i = 0; i < $scope.starList.length && !found; i++){
                var tempAuthor = 0;
                var tempStar = 0;
                $http.get('/userStar/?id='+$scope.starList[i]).then(function(response) {
                    postData = response.data;
                    tempAuthor = postData.author;
                    tempStar = postData.id;
                });
                if(tempAuthor == $scope.userId){
                    found = true;
                    starId = tempStar;
                }
            }

            $scope.starList.push(starId);
            console.log("ADDED");
        }
        // remove from post
        else {
            $scope.starList.splice(pos, 1);
            console.log("REMOVED");
        }

        //new data
        var data = {
            title: $scope.title,
            author: $scope.author,
            group: $scope.groupId,
            content: $scope.content,
            stars: $scope.starList   //the one thing that changes
        };
        //update the with the new data
        $http.post('/post/', JSON.stringify(data)).then(function (response) {
            console.log(response.data);
            if (response.data)
                $scope.msg = "Put Data Method Executed Successfully!";
            console.log($scope.msg);
        }, function (response) {
            $scope.msg = "Service not Exists";
            console.log($scope.msg);
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
    };
    */


    var postData = null;

        $http.get('/api/post/?id='+$scope.postId,{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function(response) {
            postData = response.data;
            $scope.title = postData.title;
            $scope.author = postData.author;
            $scope.content = postData.content;
            $scope.group = postData.group;
            $scope.starList = postData.stars;
            $scope.starListCount = postData.stars.length;

            /*this stuff was used to get a bunch of star data
            var i;
            var starTotal = 0;
            var starCount = 0
            for(i = 0; i < vm.starList.length; i++) {
                $http.get('/userStar/?id=' + vm.starList[i].id).then(function (response) {
                });
            }*/
            console.log($scope.group.id);
            if($scope.iscircle == undefined) {
                $http.get('/api/course/?id=' + $scope.group.id, {headers: {'Authorization': 'Bearer ' + $window.sessionStorage.token}}).then(function (response) {
                    postData = response.data;
                    $scope.groupName = postData.name;
                });
            }else{
                $http.get('/api/circle/?id=' + $scope.group.id, {headers: {'Authorization': 'Bearer ' + $window.sessionStorage.token}}).then(function (response) {
                    postData = response.data;
                    $scope.groupName = postData.name;
                });
            }
        });

    $scope.redirect = function(){
        if($scope.iscircle == 1){
            $window.location.href = 'circle?id='+$scope.id+'&circle=1';
        }else{
            $window.location.href = 'class?id='+$scope.id;
        }
    };
}


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}