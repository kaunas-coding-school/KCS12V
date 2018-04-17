var app = angular.module('manoApsas', ["ngRoute"]);

app.controller('menuController', function ($http) {
    let vm = this;

    $http.get("/meniu.json")
        .then(function(response) {
            vm.meniu = response.data;
        });
});

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "/inc/apie.html"
        })
        .when("/zaidimas", {
            templateUrl : "/inc/zaidimas.html"
        })
        .when("/kontaktai", {
            templateUrl : "/inc/kontaktai.html"
        });
});