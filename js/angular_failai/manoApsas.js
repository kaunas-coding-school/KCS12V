var app = angular.module('manoApsas', []);

app.controller('menuController', function ($http) {
    let vm = this;

    $http.get("/meniu.json")
        .then(function(response) {
            vm.meniu = response.data;
        });
});