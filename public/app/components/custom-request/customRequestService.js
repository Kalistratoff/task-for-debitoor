(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.factory('customRequestService', customRequestService);

	customRequestService.$inject = ['$http','myConfig'];  	

	function customRequestService($http, myConfig){

		var service = {
			getAll : getAll
		};

		return service;

		function getAll(url){
			return $http.get(myConfig.apiUrl + "customRequest");
		};
	};
}());