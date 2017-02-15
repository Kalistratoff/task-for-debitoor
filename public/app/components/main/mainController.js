(function(){
	'use strict';

	angular
		.module('sampleApp')
	  	.controller('mainController', mainController);

	mainController.$inject = [];  	

	function mainController(){

		console.log('mainController is connected');
	};
}());