'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var app = angular.module('myApp.services', []);

// Restangular ReKognition service
// http://rekognition.com/func/api/?api_key={api_key}&api_secret={api_secret}&jobs={jobs}&urls={urls}
// API Docs: http://v2.rekognition.com/developer/docs
app.factory('rekognitionFactory', function($http, $q) {
	return function (params) {
		var config = {
			method: 'POST',
			url: 'http://rekognition.com/func/api/',
			params: params
		};

		var deferred = $q.defer();

		$http(config).
			success(function (data, status, headers, config) {
				deferred.resolve(data);
				// this callback will be called asynchronously
				// when the response is available
			}).
			error(function (data, status, headers, config) {
				deferred.reject();
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		return deferred.promise;
	};
});

app.factory('apiresponseFactory', function() {
	return {
		'response' : {}
	};
});

app.factory('apirequestFactory', function() {
	return {
		'request' : {}
	};
});

app.factory('formFactory', function() {
	return {
		'data' : {
			firstname : '',
			lastname : ''
		}
	};
});