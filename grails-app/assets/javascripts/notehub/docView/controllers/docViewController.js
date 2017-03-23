//= wrapped

angular.module("notehub.docView")
    .controller("DocViewController", DocViewController);

function DocViewController($http, $scope) {
    var vm = this;
    $scope.postId = getQueryVariable('post');
    $scope.id = getQueryVariable('id');
    $scope.userId = getQueryVariable('user');

    $scope.title = 'NULL';
    $scope.author = 'NULL';
    $scope.content = 'NULL';
    $scope.group = 0;
    $scope.starList = [];
    $scope.starListCount = 0;

    $scope.groupName = 'NULL';

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

        $http.get('/api/post/?id='+$scope.postId).then(function(response) {
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

            $http.get('/api/userGroup/?id='+$scope.group.id).then(function(response) {
                postData = response.data;
                $scope.groupName = postData.name;
            });
        });

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