// FOLLOWING CODE FROM https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating 
// create the module and name it salehRestaurant
(function() {
  // create the module and name it salehRestaurant
  // also include ngRoute for all our routing needs
  var salehRestaurant = angular.module('salehRestaurant', ['ngRoute']);

  // configure our routes
  salehRestaurant.config(function($routeProvider) {
    $routeProvider

	  // route for the home page
	  .when('/', {
          templateUrl : '../views/home.html',
          controller  : 'mainController'
	  })

	  // route for the about page
	  .when('/about', {
          templateUrl : '../views/about.html',
          controller  : 'aboutController'
	  })

	  // route for the contact page
	  .when('/contact', {
          templateUrl : '../views/contact.html',
          controller  : 'contactController'
	  });
  });

  // create the controller and inject Angular's $scope
  salehRestaurant.controller('mainController', function($scope) {
      // create a message to display in our view
      $scope.message = 'Everyone come and see how good I look!';
  });

  salehRestaurant.controller('aboutController', function($scope) {
      $scope.message = 'Look! I am an about page.';
  });

  salehRestaurant.controller('contactController', function($scope) {
      $scope.message = 'Contact us! JK. This is just a demo.';
  });
})();

// (function() {
// 	var app = angular.module("restaurant", []);

// 	app.controller('MainController', ['$scope', function($scope) { 
// 	  $scope.title = 'Top Sellers in Books'; 
// 	}]);
// })();