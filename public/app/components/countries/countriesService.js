(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.factory('countriesService', countriesService);

	countriesService.$inject = ['$http','myConfig'];  	

	function countriesService($http, myConfig){

		var service = {
			getAll : getAll
		};

		return service;

		function getAll(){
			return $http.get('http://localhost:8888/api/countries');
		};
	};
}());