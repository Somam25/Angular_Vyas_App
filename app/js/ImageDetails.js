"use strict"

app.controller('ImageDetailsController',['$scope','$location',function($scope,$location){
$scope.myvar=false;

$scope.viewImage=function()
{
    $location.path("/ViewImage");
};
}
]);
