var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {
                name: "Karan",
                dateOfBirth: new Date("May 20, 1990"),
                gender: "Male",
                salary: 24000.567,
                city : "Hyderabad"

            }, {
                name: "Ruhi",
                dateOfBirth: new Date("July 02, 1995"),
                gender: "Female",
                salary: 26000.463,
                city : "Bangaluru"

            }, {
                name: "Gurkaran",
                dateOfBirth: new Date("April 07, 1989"),
                gender: "Male",
                salary: 27000.235,
                city : "Chennai"

            }, {
                name: "Rohan",
                dateOfBirth: new Date("March 12, 1989"),
                gender: "Male",
                salary: 28000.785,
                city : "Pune"

            }, {
                name: "Manika",
                dateOfBirth: new Date("June 18, 1994"),
                gender: "Female",
                salary: 23000,
                city : "Hyderabad"

            }, {
                name: "Jasmeet",
                dateOfBirth: new Date("Feb 24, 1997"),
                gender: "Male",
                salary: 29000.835,
                city : "Pune"

            }, {
                name: "Rahul",
                dateOfBirth: new Date("May 10, 1996"),
                gender: "Male",
                salary: 22000,
                city : "Bangaluru"

            }, {
                name: "Rupal",
                dateOfBirth: new Date("August 13, 1997"),
                gender: "Female",
                salary: 29000.534,
                city : "New Delhi"
            }
        ]

        $scope.employees = employees;      
         
    });