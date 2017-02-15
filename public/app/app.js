(function(){
	'use strict';
	angular.module('sampleApp', ['ui.router'])
	.constant("myConfig", {
        "mainUrl": "http://localhost:8888/",
        "apiUrl": "http://localhost:8888/api/"
    });
}());