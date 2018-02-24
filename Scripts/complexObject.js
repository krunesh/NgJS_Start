// One way of doing this
// var myApp = angular.module("myModule",[]);

// myApp.controller("myController",function($scope){
// var employee = {
//     firstName : "Rohan",
//     lastName : "Malhotra",
//     gender : "Male"
// };


// Another way (Method chaining)

var myApp = angular
            .module("myModule",[])
            .controller("myController",function($scope){
                var employee = {
                        firstName : "Rohan",
                        lastName : "Malhotra",
                        gender : "Male"
                };            

$scope.employee = employee;
});   