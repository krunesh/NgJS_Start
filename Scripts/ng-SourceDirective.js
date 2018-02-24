var myApp = angular
            .module("myModule",[])
            .controller("myController",function($scope){
                var country = {
                    name : "USA",
                    capital : "Washington DC.",
                    flag : "images/us-flag.png"
                };

                $scope.country = country;
            });