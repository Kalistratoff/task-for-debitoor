(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.controller('resourceController', resourceController);

	resourceController.$inject = ['$http', '$scope', 'resourceService'];  	

	function resourceController($http, $scope, resourceService){

		console.log('resourceController is connected');

		//*****************************************************************
		function getResources(){
			resourceService.getAll()
			.then(function(resources){
				$scope.resources = resources.data;
			})
			.catch(function(error){
				console.error("error!");
				console.error(error);
			})
		};

		//*****************************************************************

		getResources();
	};
}());