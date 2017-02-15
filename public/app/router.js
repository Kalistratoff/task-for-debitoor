(function(){
	'use strict';
	
	angular.module('sampleApp')
        .run(['$rootScope', function($rootScope) {}])
		.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	    // no route goes to index
	    $urlRouterProvider.when('', '/');
	    // use a state provider for routing

	    $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/components/main/main.view.html',
            controller: "mainController"
        });
	    
	    $stateProvider.state('users', {
            url: '/users',
            templateUrl: 'app/components/users/users.view.html',
            controller: "usersController"
        });
	        
	    $stateProvider.state('customers', {
            url: '/customers',
            templateUrl: 'app/components/customers/customers.view.html',
            controller: "customersController"
        });

        $stateProvider.state('countries', {
            url: '/countries',
            templateUrl: 'app/components/countries/countries.view.html',
            controller: "countriesController"
        });

        $stateProvider.state('resources', {
            url: '/resources',
            templateUrl: 'app/components/resources/resources.view.html',
            controller: "resourceController"
        });

        $stateProvider.state('custom-request', {
            url: '/custom-request',
            templateUrl: 'app/components/custom-request/custom-request.view.html',
            controller: "customRequestController"
        });

        $stateProvider.state('404', {
            url: '/404',
            templateUrl: 'app/shared/404.html'
        });

        // any unknown URLS go to 404
   		$urlRouterProvider.otherwise('/404');
	}]);
}());