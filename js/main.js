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
    		$scope.avgTip = $scope.tip / $scope.count;
    	}

    	$scope.reset = function() {
    		$scope.subtotal = angular.copy($scope.initial);
    		$scope.tip = angular.copy($scope.initial);
    		$scope.total = angular.copy($scope.initial);
    		$scope.count = angular.copy($scope.initial)
    		$scope.tipTotal = angular.copy($scope.initial);
    		$scope.avgTip = angular.copy($scope.initial);
    		$scope.base = '';
    		$scope.tax = '';
    		$scope.tipPerc = '';
    	} 

    	$scope.resetForm = function() {
    		$scope.base = '';
    		$scope.tax = '';
    		$scope.tipPerc = '';
    	}
    	$scope.resetForm();
    });