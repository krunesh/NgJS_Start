var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {
                name: "Karan",
                dateOfBirth: new Date("May 20, 1990"),
                gender: "Male",
                salary: 24000.567

            }, {
                name: "Ruhi",
                dateOfBirth: new Date("July 02, 1995"),
                gender: "Female",
                salary: 26000.463

            }, {
                name: "Gurkaran",
                dateOfBirth: new Date("April 07, 1989"),
                gender: "Male",
                salary: 27000.235

            }, {
                name: "Rohan",
                dateOfBirth: new Date("March 12, 1989"),
                gender: "Male",
                salary: 28000.785

            }, {
                name: "Manika",
                dateOfBirth: new Date("June 18, 1994"),
                gender: "Female",
                salary: 23000

            }, {
                name: "Jasmeet",
                dateOfBirth: new Date("Feb 24, 1997"),
                gender: "Male",
                salary: 29000.835

            }, {
                name: "Rahul",
                dateOfBirth: new Date("May 10, 1996"),
                gender: "Male",
                salary: 22000

            }, {
                name: "Rupal",
                dateOfBirth: new Date("August 13, 1997"),
                gender: "Female",
                salary: 29000.534
            }
        ]

        $scope.employees = employees;
        $scope.sortColumn = name;
        $scope.reverseSort = false;

        $scope.sortData = function (column) {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }

        $scope.getSortClass = function (column) {
            if($scope.sortColumn == column)
            {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
            }
            return '';
        }
         
    });