var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var countries = [
            {
                name: "UK",
                cities: [
                    { name: "London" },
                    { name: "Manchester" },
                    { name: "Birmingham" }
                ]
            },
            {
                name: "USA  ",
                cities: [
                    { name: "Los Angeles" },
                    { name: "Chicago" },
                    { name: "Houston" }
                ]
            },
            {
                name: "India",
                cities: [
                    { name: "Banguluru" },
                    { name: "Pune" },
                    { name: "Hyderabad" }
                ]
            }
        ]
       

        $scope.countries = countries;
    });