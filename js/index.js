var app = angular.module("ethStats",[]);
app.controller("ethCtrl", function($http, $scope){
  //api data 
	$http.get("https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken")
  .then(function(response) {
    // price data attribute
    $scope.price = response.data;
  });
  //add a reload function 
});