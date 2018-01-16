'use strict';

app.config(['$stateProvider','$locationProvider', '$httpProvider','$urlRouterProvider',
    function($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) {
        $stateProvider
            .state('Login',{
                url:'/Login',
                templateUrl:'../views/Login.html',
                controller: 'LoginController',
            })
            .state('ImageDetails',{
                url:'/ImageDetails',
                templateUrl:'../views/ImageDetails.html',
                controller: 'SampleControllerTwo',
            })
            .state('ImageUpload',{
                url:'/ImageUpload',
                templateUrl:'../views/ImageUpload.html',
                controller: 'SampleControllerTwo',
            })
            .state('ViewImage',{
                url:'/ViewImage',
                templateUrl:'../views/ViewImage.html',
                controller: 'SampleControllerTwo',
            })
            .state('AddImage',{
                url:'/AddImage',
                templateUrl:'../views/AddImage.html',
                controller: 'SampleControllerTwo',
            });

        $urlRouterProvider
            .otherwise('/ImageDetails');

        //For hiding '#' from URLs use the below
       // $locationProvider.html5Mode(false);
    }
]);

