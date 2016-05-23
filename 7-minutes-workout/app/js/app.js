var app = angular.module('app', ['ngRoute', '7minWorkout']);
angular.module('7minWorkout', []);

app.config(function ($routeProvider){
	$routeProvider.when('/start', { templateUrl: 'partials/start.html'});
	$routeProvider.when('/workout', {
		templateUrl: 'partials/workout.html'
		, controller: 'WorkoutController'
	});
	$routeProvider.when('/finish', { templateUrl: 'partials/finish.html'});
	$routeProvider.otherwise({ redirectTo: '/start'});
});
