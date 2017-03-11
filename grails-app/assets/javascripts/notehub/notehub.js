//= wrapped
//= require /angular/angular
//= require /notehub/core/notehub.core
//= require /notehub/index/notehub.index
//= require /notehub/home/notehub.home
//= require /notehub/class/notehub.class
//= require /notehub/createPost/notehub.createPost
//= require /notehub/docView/notehub.docView
//= require /notehub/test/notehub.test
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates


var app = angular.module("notehub", [
        "notehub.core",
        "notehub.index",
        "notehub.test",
        "notehub.home",
        "notehub.class",
        "notehub.createPost",
        "notehub.docView"
    ]);

app.config(config);

function config($stateProvider, $urlRouterProvider) {
    console.log("angrailsfest load complete.");
    $stateProvider
        .state('index', {
            url: "/",
            templateUrl: "/notehub/index/index.html"
        }).state('class', {
        url: "/class",
        templateUrl: "/notehub/class/class.html"
    }).state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    });

    $urlRouterProvider.otherwise('/');
}

//debugging purposes
try { angular.module("noteList");
    console.log('noteList Loaded');
} catch(err) { console.log('noteList didnt load') }
