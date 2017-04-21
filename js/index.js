var app = angular.module('ethStats', []);
app.controller('ethCtrl', function($scope, $http) {
  $http.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD").then(function (response) {
      $scope.price = response.data;
  });
});