(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.controller('customRequestController', customRequestController);

	customRequestController.$inject = ['$http', '$scope', 'customRequestService'];  	

	function customRequestController($http, $scope, customRequestService){

		console.log('customRequestController is connected');

		//*****************************************************************
		$scope.geCustomResources = function(url){
			customRequestService.getAll(url)
			.then(function(resources){
				console.log("SUCCESS, WE HAVE resources....");
				$scope.resources = resources.data;
				console.log($scope.resources);
			})
			.catch(function(error){
				console.error("error!");
				console.error(error);
			})
		};

		//*****************************************************************
	};
}());