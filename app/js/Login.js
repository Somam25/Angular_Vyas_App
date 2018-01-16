"use strict"

app.controller('LoginController', ['$scope','$location', function($scope,$location) {
    
        //Controller code here.
        $scope.login=function(){
        $location.path("/ImageDetails");
       // window.location.href="../views/Login.html";
        
        };
    
    }]);