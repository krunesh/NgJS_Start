var myApp = angular
            .module("myModule",[])
            .controller("myController",function($scope){
            var employees = [
                {name:"Rohan", gender:"1",salary :"25000"},
                {name:"Ruhi", gender:"2", salary :"28000"}, 
                {name:"Jasleen", gender:"2", salary :"23000"},
                {name:"Karan",gender:"1", salary :"29000"},
                {name:"Gagan", gender:"1", salary :"30000"},
                {name:"Hasuki", gender:"3", salary :"24000"}
                 ];

                 $scope.employees = employees;
            });