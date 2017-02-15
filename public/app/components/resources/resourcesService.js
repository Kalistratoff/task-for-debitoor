(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.factory('resourceService', resourceService);

	resourceService.$inject = ['$http','myConfig'];  	

	function resourceService($http, myConfig){

		var service = {
			getAll : getAll
		};

		return service;

		function getAll(){
			return $http.get('http://localhost:8888/api/resources');
		};
	};
}());