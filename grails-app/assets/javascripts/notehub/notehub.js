//= wrapped
//= require /angular/angular
//= require /notehub/core/notehub.core
//= require /notehub/index/notehub.index
//= require /notehub/home/notehub.home
//= require /notehub/class/notehub.class
//= require /notehub/circle/notehub.circle
//= require /notehub/createPost/notehub.createPost
//= require /notehub/createCircle/notehub.createCircle
//= require /notehub/createCourse/notehub.createCourse
//= require /notehub/docView/notehub.docView
//= require /notehub/signUp/notehub.signUp
//= require /notehub/signIn/notehub.signIn
//= require /notehub/docView/notehub.docView
//= require /notehub/nav/notehub.nav
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree templates


var app = angular.module("notehub", [
        "notehub.core",
        "notehub.index",
        "notehub.home",
        "notehub.class",
        "notehub.circle",
        "notehub.createPost",
        "notehub.createCircle",
        "notehub.createCourse",
        "notehub.docView",
        "notehub.signIn",
        "notehub.signUp",
        "notehub.nav"
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

app.factory('authInterceptor', function ($rootScope, $window) {
    return {
        request: function (config) {
            /*
            config.headers = config.headers || {};



            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                console.log($window.sessionStorage);
            }else{

                console.log('AUTHORIZATION WENT WRONG');
            }*/
            return config;
        }
    };
}).service('authInterceptor', function($q) {
    var service = this;

    service.responseError = function(response) {
        if (response.status == 401){

            window.location = "/signin";
        }
        return $q.reject(response);
    };
}).config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});

//debugging purposes
try { angular.module("noteList");
    console.log('noteList Loaded');
} catch(err) { console.log('noteList didnt load') }
