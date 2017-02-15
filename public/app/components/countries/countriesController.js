(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.controller('countriesController', countriesController);

	countriesController.$inject = ['$http','$scope','countriesService'];  	

	function countriesController($http, $scope, countriesService){

		console.log('countriesController is connected');

		$scope.countries = {};
		//*****************************************************************
		function getCountries(){
			countriesService.getAll()
			.then(function(countries){
				$scope.countries = countries.data.data;
			})
			.catch(function(error){
				console.error("error!");
				console.error(error);
			})
		};

		//*****************************************************************
		getCountries();
	};
}());