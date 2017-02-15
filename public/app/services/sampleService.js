(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.factory('sampleService', sampleService);

	sampleService.$inject = ['$http'];  	

	function sampleService($http){

		var service = {
			getData : getData
		};

		return service;

		function getData(){
			return $http.get('api url')
            .then(getDataSuccess)
            .catch(getDataFailed);

	        function getDataSuccess(response) {
	            return response.data.results;
	        }

	        function getDataFailed(error) {
	            console.log('XHR Failed for getAvengers.' + error.data);
	        }
		};
	};
}());