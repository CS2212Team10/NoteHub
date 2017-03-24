//= wrapped

/*********************************************
 @author Paul Li
 @date Feb, 28, 2017
 @version 2.0 (Stage 2)

 Circles
 ============================================
 declaring a information for the directive
 - controller
 ********************************************/


angular
    .module("notehub.docView")
    .component("commentsList", {
        templateUrl: '/notehub/docView/commentsList.html',
        controller: function CommentsListController($http,$window){
            var vm = this;
            vm.postId = getQueryVariable('post');
            vm.id = getQueryVariable('id');
            vm.userId = getQueryVariable('user');
            vm.sortBy = 'content';

            vm.groupName = 'NULL';

            var postData = null;

            vm.newComment = {
                post: vm.postId,
                content: undefined
            };
            vm.comments = [];
            //$http.get('/api/comment/')
            $http.get('/api/post/?id='+vm.postId).then(function(response) {
                var data = response.data;
                vm.comments=[];
                vm.commentids = data.comments;

                var i = 0;
                console.log(vm.commentids[0]);
                for(i in vm.commentids){
                    console.log(vm.commentids[i].id);
                    $http.get('/api/comment/?id='+vm.commentids[i].id).then(function(response){
                        $http.get('/api/user/?id='+response.data.author.id).then(function(response2){
                            vm.x = {
                                id: response.data.id,
                                content: response.data.content,
                                author: response2.data.name
                            };
                            vm.comments.push(vm.x);
                        });

                    });
                    i++;
                }


                console.log('gg');
                console.log(vm.comments);

            });

            vm.getAuthor= function(userID){
                $http.get('/api/user/?id='+userID).then(function(response){
                    console.log(response.data.name);
                    return response.data.name;
                });
            };
            vm.uploadComment = function(){
                var data = vm.newComment;
                console.log(data.content);
                $window.location.reload();

                console.log(data);
                vm.comments.push(vm.x);
                $http.post('/api/comment/', JSON.stringify(data)).then(function (response) {
                    console.log(response.data);
                });


            };

        },
        controllerAs: "vm",
        transclude: true,
        scope: {},
        bindToController: {}
    });


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
