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
        controller: function CommentsListController($http){
            var vm = this;

            //Dummy Data
            /*
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
             */
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
