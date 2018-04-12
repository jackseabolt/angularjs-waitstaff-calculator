angular.module('myApp', [])
    .controller('myCtrl', function($scope) {
        $scope.error = null; 
        $scope.tiptotal = 0; 
        $scope.mealcount = 0; 
        $scope.averageTip = null;  
        $scope.submit = function() {
            console.log($scope.data)
            $scope.subtotal = parseFloat($scope.data.base) + (parseFloat($scope.data.base) * (parseFloat($scope.data.taxRate) * 0.01 )); 
            $scope.displayTip = parseFloat($scope.data.tip); 
            $scope.total = $scope.subtotal + $scope.displayTip
            $scope.data = undefined; 
            $scope.tiptotal = $scope.tiptotal + $scope.displayTip; 
            $scope.mealcount++; 
            $scope.averageTip = ($scope.averageTip + $scope.displayTip)/$scope.mealcount; 
        }
    })