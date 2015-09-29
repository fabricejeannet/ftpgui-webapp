var app = angular.module('ftpgui', []);

app.controller('FileListCtrl', ['$scope', '$http', function ($scope, $http) {

    return $http({
        method: 'GET',
        url: 'http://localhost:8080/files'})
        .success(function(data, status, headers, config) {
            $scope.files = data;

            console.log($scope.files.length + " files(s) retreived.");
        })
        .error(function(data, status, headers, config) {
            console.log("Echec " + status);
            $scope.files = [];
        });

}]);


app.controller('ActionCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.delete = function() {
        return $http({
            method: 'DELETE',
            url: 'http://localhost:8080/file/' + $scope.file.name})
            .success(function(data, status, headers, config) {
                console.log($scope.file.name + " deleted");
            })
            .error(function(data, status, headers, config) {
                console.log("Echec " + status);
            });
    };

}]);





