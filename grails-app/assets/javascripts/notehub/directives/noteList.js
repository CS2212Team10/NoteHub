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
    .module("notehub")
    .directive("noteList", noteList);

function noteList() {
    var directive = {
        restrict: "E",
        templateUrl: "/notehub/noteList.html",
        controller: NoteListController,
        controllerAs: "vm",
        transclude: true,
        scope: {},
        bindToController: {
        }
    };

    return directive;

    /*@ngInject*/
    function NoteListController($http,$scope,$location) {

        var vm = this;

        var goto = $location.absUrl();
        var parser = document.createElement('a');
        parser.href = goto;
        var queryString = parser.search;
        var idNum = getQueryVariable('id'); // gets query variable

        //console.log(idNum);
        vm.getId = goto;

        vm.orderProp = 'dateCreated';

        // used for ng-repeat num number of times.
        vm.getNumber = function(num) {
            return new Array(num);
        }



        var classData =  null;
        vm.posts = [];

        $http.get('/userGroup/?id=1').then(function(response) {
            classData = response.data;
            console.log(classData.name);
            console.log(classData.posts);
            console.log("hello");
            //console.log(classData);
            var postIdList = classData.posts;
            console.log("hello2");


            var i;
            for (i = 0; i < postIdList.length; i++) {
                console.log(i);
                $http.get('/post/?id='+postIdList[i].id).then(function(response) {
                    console.log(response.data);
                    vm.posts.push(response.data);
                });
            }
        });





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
    }
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