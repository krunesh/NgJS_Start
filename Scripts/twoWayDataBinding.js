 var myApp = angular
             .module("myModule",[])
             .controller("myController",function($scope){
// $scope.message = "AngularJS two way data binding tutorial"
                var employee = {
                    firstName: "Jaskaran Singh",
                    lastName : "Dhillon",
                    gender : "Male"
                };

                $scope.employee = employee;
             });