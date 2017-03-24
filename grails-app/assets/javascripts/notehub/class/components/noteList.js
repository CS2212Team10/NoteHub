/**
 * Created by paul_ on 3/11/2017.
 */
//= wrapped

/*********************************************
 @author Paul Li
 @date Feb, 28, 2017
 @version 2.0 (Stage 2)

 Note List
 ============================================
 declaring a information for the directive
 - controller
 ********************************************/

console.log('hello');
angular
    .module("notehub.class")
    .component("noteList", {
        templateUrl: "/notehub/class/noteList.html",
        controller: function NoteListController($http,$scope,$location,$window) {
            var vm = this;

            vm.id = getQueryVariable('id');
            vm.postId;
            //console.log(idNum);

            vm.orderProp = 'dateCreated';

            // used for ng-repeat num number of times.
            vm.getNumber = function(num) {
                return new Array(num);
            };



            var classData =  null;
            vm.posts = [];

            $http.get('/api/course/?id='+vm.id,{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function(response) {
                classData = response.data;
                var postIdList = classData.posts;

                var i;
                for (i = 0; i < postIdList.length; i++) {
                    console.log(i);
                    $http.get('/api/post/?id='+postIdList[i].id,{headers: {'Authorization': 'Bearer '+ $window.sessionStorage.token}}).then(function(response) {
                        vm.posts.push(response.data);
                    });
                }
            });
            /* breaks the server possibly to much refreshing?
             vm.getAuthor = function (authorId) {
             var author = 0;
             console.log("WOWO"+authorId);
             $http.get('/user/?id='+authorId).then(function(response) {
             author = response.data.name;
             console.log("WOWO"+author);
             });
             return author;
             }*/





            /* Fetching JSON Data
             $http.get('SOMEJSONFILE.json').then(function(response) {
             self.phones = response.data;
             });
             .*/
            vm.title = "hello this is WORKING!";

            //Dummy Data
            /*
             vm.posts =[
             {
             id: 2,
             title: "Java Tutorial",
             author: "Paul Li",
             rating: 5
             },{
             id: 3,
             title: "Calculus 101",
             author: "Bob Ross",
             rating: 4
             },{
             id: 4,
             title: "French for Dummies",
             author: "Will Smith",
             rating: 2
             }
             ]*/
        },
        controllerAs: "vm",
        transclude: true,
        scope: {},
        bindToController: {}
    });


//TODO: add a global function of this
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