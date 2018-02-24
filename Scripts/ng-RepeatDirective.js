var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {
                firstName: "Karan",
                lastName: "Malhotra",
                gender: "Male",
                salary: 24000

            }, {
                firstName: "Ruhi",
                lastName: "Singh",
                gender: "Female",
                salary: 26000

            }, {
                firstName: "Gurkaran",
                lastName: "Singh",
                gender: "Male",
                salary: 27000

            }, {
                firstName: "Rohan",
                lastName: "Sethi",
                gender: "Male",
                salary: 28000

            }, {
                firstName: "Manika",
                lastName: "Arora",
                gender: "Female",
                salary: 23000

            }, {
                firstName: "Jasmeet",
                lastName: "Singh",
                gender: "Male",
                salary: 29000

            }, {
                firstName: "Rahul",
                lastName: "Gupta",
                gender: "Male",
                salary: 22000

            }, {
                firstName: "Rupal",
                lastName: "Metha",
                gender: "Female",
                salary: 29000
            }
        ]

        $scope.employees = employees;
    });