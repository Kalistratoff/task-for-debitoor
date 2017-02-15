(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.controller('usersController', usersController);

	usersController.$inject = ['$http','$scope','usersService'];  	

	function usersController($http, $scope, usersService){

		$scope.users = {};
		//*****************************************************************
		function getUsers(){
			usersService.getAll()
			.then(function(users){
				$scope.users = users.data.data;
			})
			.catch(function(error){
				console.error("error!");
				console.error(error);
			})
		};

		//*****************************************************************

		getUsers();
	};
}());