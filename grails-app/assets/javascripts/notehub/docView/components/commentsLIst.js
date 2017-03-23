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
        controller: function CommentsListController($http,$scope){
            var vm = this;
            vm.postId = getQueryVariable('post');
            vm.id = getQueryVariable('id');
            vm.userId = getQueryVariable('user');


            vm.groupName = 'NULL';

            var postData = null;

            vm.newComment = {
                post: vm.postId,
                content: undefined
            };

            vm.uploadComment = function(){
                var data = vm.newComment;
                console.log(data.content);

                console.log(data);

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
