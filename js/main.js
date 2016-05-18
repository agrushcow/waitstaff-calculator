"use strict"
angular.module('myApp', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller: 'HomeCtrl'
        }).when ('/new-meal', {
            templateUrl : 'new-meal.html',
            controller : 'MealCtrl'
        }).when ('/my-earnings', {
            templateUrl : 'my-earnings.html',
            controller : 'EarningsCtrl'
        }).otherwise ('/')
    }])
    .run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$routeChangeError', function() {
        $location.path("/");
    });
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      $timeout(function() {
        $rootScope.isLoading = false;
      }, 1500);
    });
})
    .controller('HomeCtrl', function($rootScope) {

    })
    .controller('MealCtrl', function($rootScope) {
        $rootScope.initial = 0.00;
        $rootScope.count = 0;
        $rootScope.tipTotal = 0;
        $rootScope.base = "";
        $rootScope.tax = "";
        $rootScope.subtotal = "";
        $rootScope.tipPerc = "";

        $rootScope.submit = function() {
            $rootScope.subtotal = $rootScope.base * ($rootScope.tax / 100) + $rootScope.base;
            $rootScope.tip = $rootScope.subtotal * ($rootScope.tipPerc / 100); 
            $rootScope.total = $rootScope.subtotal + $rootScope.tip;
            $rootScope.count++;
            $rootScope.tipTotal = $rootScope.tip + $rootScope.tipTotal;
            $rootScope.avgTip = $rootScope.tipTotal / $rootScope.count;
        }

        $rootScope.reset = function() {
            $rootScope.subtotal = $rootScope.initial;
            $rootScope.tip = $rootScope.initial;
            $rootScope.total = $rootScope.initial;
            $rootScope.count = $rootScope.initial;
            $rootScope.tipTotal = $rootScope.initial;
            $rootScope.avgTip = $rootScope.initial;
            $rootScope.resetForm();
        } 
    })
    .controller('EarningsCtrl', function($rootScope) {
        $rootScope.resetForm = function() {
            $rootScope.base = '';
            $rootScope.tax = '';
            $rootScope.tipPerc = '';
        }
        $rootScope.resetForm();
    });
