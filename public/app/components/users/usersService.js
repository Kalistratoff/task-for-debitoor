(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.factory('usersService', usersService);

	usersService.$inject = ['$http','myConfig'];  	

	function usersService($http, myConfig){

		var service = {
			getAll : getAll
		};

		return service;

		function getAll(){
			return $http.get('http://localhost:8888/api/users');
		};
	};
}());