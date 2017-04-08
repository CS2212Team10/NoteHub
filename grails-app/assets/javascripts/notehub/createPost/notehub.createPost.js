//= wrapped
//= require /angular/angular
//= require /angular/ui-bootstrap-tpls
//= require /angular/angular-ui-router
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree components
//= require_tree templates

angular.module("notehub.createPost", [
    "notehub.core",
    "ui.bootstrap.dropdown",
    "ui.bootstrap.collapse",
    "ui.router"
]);