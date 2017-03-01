//= wrapped
//= require /angular/angular
//= require /angular/ui-bootstrap-tpls
//= require /angular/angular-ui-router
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates

angular.module("notehub.class", [
    "notehub.core",
    "ui.bootstrap.dropdown",
    "ui.bootstrap.collapse",
    "ui.router"
])
.config(config);

function config($stateProvider, $urlRouterProvider) {
    console.log("angrailsfest load complete.");
    $stateProvider
        .state('class', {
            url: "/class", //TODO: fix url location it should be the ID
            templateUrl: "/notehub/class/class.html"
        });

    $urlRouterProvider.otherwise('/');
}
