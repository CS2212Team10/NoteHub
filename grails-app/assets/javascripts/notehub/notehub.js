//= wrapped
//= require /angular/angular
//= require /notehub/core/notehub.core
//= require /notehub/index/notehub.index
//= require /notehub/modules/noteList.module
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates


angular.module("notehub", [
        "notehub.core",
        "notehub.index",
        "noteList"
    ]);

try { angular.module("noteList");
    console.log('Something loaded');
} catch(err) { console.log('Something didnt load') }