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

        console.log(idNum);
        vm.getId = goto;

        vm.orderProp = 'dateCreated';

        // used for ng-repeat num number of times.
        vm.getNumber = function(num) {
            return new Array(num);
        }
        /* Fetching JSON Data.
         $http.get('SOMEJSONFILE.json').then(function(response) {
         self.phones = response.data;
         });
         */
        vm.title = "hello this is WORKING!";

        //Dummy Data
        vm.posts =[
            {
                id: 2,
                title: "Java Tutorial",
                author: "Paul Li",
                dateCreated: "11/11/16",
                rating: 5
            },{
                id: 3,
                title: "Calculus 101",
                author: "Bob Ross",
                dateCreated: "10/9/16",
                rating: 4
            },{
                id: 4,
                title: "French for Dummies",
                author: "Will Smith",
                dateCreated: "10/8/16",
                rating: 2
            }
        ]
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