angular.module('myApp', [])
    .controller('MyCtrl', function($scope) {
    	$scope.initial = 0.00;
    	$scope.count = 0;
    	$scope.tipTotal = 0;

    	$scope.submit = function() {
    		$scope.subtotal = $scope.base * ($scope.tax / 100) + $scope.base;
    		$scope.tip = $scope.subtotal * ($scope.tipPerc / 100); 
    		$scope.total = $scope.subtotal + $scope.tip;
    		$scope.count++;
    		$scope.tipTotal = $scope.tip + $scope.tipTotal;
    		$scope.avgTip = $scope.tipTotal / $scope.count;
    	}

    	$scope.reset = function() {
    		$scope.subtotal = $scope.initial;
    		$scope.tip = $scope.initial;
    		$scope.total = $scope.initial;
    		$scope.count = $scope.initial;
    		$scope.tipTotal = $scope.initial;
    		$scope.avgTip = $scope.initial;
    		$scope.resetForm();
    	} 

    	$scope.resetForm = function() {
    		$scope.base = '';
    		$scope.tax = '';
    		$scope.tipPerc = '';
    	}
    	$scope.resetForm();
    });