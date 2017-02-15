(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.controller('customersController', customersController);

	customersController.$inject = ['$http', '$scope', 'customersService'];  	

	function customersController($http, $scope, customersService){

		console.log('customersController is connected');

		//*****************************************************************
		function getCustomers(){
			customersService.getAll()
			.then(function(customers){
				$scope.customers = customers.data.data;
			})
			.catch(function(error){
				console.error("error!");
				console.error(error);
			})
		};

		//*****************************************************************

		getCustomers();
	};
}());