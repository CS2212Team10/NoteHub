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


console.log('loaded circles'); <!-- TODO: remove (used for debugging purposes) -->

angular
    .module("notehub")
    .directive("circles", circles);

function circles() {
    var directive = {
        restrict: "E",
        templateUrl: "/notehub/circles.html",
        controller: CirclesController,
        controllerAs: "vm",
        transclude: true,
        scope: {},
        bindToController: {}
    };

    return directive;

    /*@ngInject*/
    function CirclesController($http,$scope) {

        var vm = this;
        //used for default ordering of list
        vm.orderProp = 'dateCreated';

        // used for ng-repeat num number of times.
        vm.getNumber = function(num) {
            return new Array(num);
        };

        /* Fetching JSON Data.
         $http.get('SOMEJSONFILE.json').then(function(response) {
         self.phones = response.data;
         });
         */

        vm.title = " "; // should be in the page controller

        //Dummy Data
        vm.usersCircles =[
            {
                name: "Default Circle",
                desc: "Welcome to notehub!"
            },{
                name: "CS2209 Circle",
                desc: "Logic Logic Logic"
            },{
                name: "CS2208 Circle",
                desc: "1010101000111"
            }
        ]
    }
}
