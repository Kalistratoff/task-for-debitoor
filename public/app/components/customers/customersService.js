(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.factory('customersService', customersService);

	customersService.$inject = ['$http','myConfig'];  	

	function customersService($http, myConfig){

		var service = {
			getAll : getAll
		};

		return service;

		function getAll(){
			return $http.get('http://localhost:8888/api/customers');
		};
	};
}());