var app = angular.module('app',
	['ngRoute', 'ngSanitize',  '7minWorkout', 'mediaPlayer', 'ui.bootstrap']);
angular.module('7minWorkout', []);

app.config(function ($routeProvider, $sceDelegateProvider){
	$routeProvider.when('/start', { templateUrl: 'partials/start.html'});
	$routeProvider.when('/workout', {
		templateUrl: 'partials/workout.html'
		, controller: 'WorkoutController'
	});
	$routeProvider.when('/finish', { templateUrl: 'partials/finish.html'});
	$routeProvider.otherwise({ redirectTo: '/start'});

	$sceDelegateProvider.resourceUrlWhitelist([
	// Allow same origin resource loads.
	'self',
	'http://*.youtube.com/**']);
});
