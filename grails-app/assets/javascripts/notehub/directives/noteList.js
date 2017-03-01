//= wrapped
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
    function NoteListController($http,$scope) {
        var vm = this;
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
                title: "Java Tutorial",
                author: "Paul Li",
                dateCreated: "11/11/16",
                rating: 5
            },{
                title: "Calculus 101",
                author: "Bob Ross",
                dateCreated: "10/9/16",
                rating: 4
            },{
                title: "French for Dummies",
                author: "Will Smith",
                dateCreated: "10/8/16",
                rating: 2
            }
        ]
    }
}
