'use strict';

angular.module('carecluesApp').controller('PopupInstanceController', function($scope,$modalInstance,content) {    

    $scope.content = content;

	setTimeout(function()
	{ 
		//alert("Hello");
		$scope.close();
		
	}, 3000);

    $scope.close = function () {
    $modalInstance.dismiss('cancel');
    };   
    
});