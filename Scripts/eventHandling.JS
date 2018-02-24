var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var technologies = [
            { name: "CSharp", likes: 0, dislikes: 0 },
            { name: "Angular", likes: 0, dislikes: 0 },
            { name: "Javascript", likes: 0, dislikes: 0 },
            { name: "Asp.Net", likes: 0, dislikes: 0 },
            { name: "Sql Server", likes: 0, dislikes: 0 }
        ];

        $scope.technologies = technologies;

        $scope.incrementLikes = function(technology){
            technology.likes++;
        }

        $scope.incrementDislikes = function(technology){
            technology.dislikes++;
        }
    });