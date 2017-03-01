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
          controller  : 'homeController'
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
	  })
      
      // route for the menu page
	  .when('/menu', {
          templateUrl : '../views/menu.html',
          controller  : 'menuController'
	  })
      
      .otherwise({redirectTo: '/'});
  });

  // create the controller and inject Angular's $scope
  salehRestaurant.controller('homeController', function($scope) {

  });

  salehRestaurant.controller('aboutController', function($scope) {
    console.log($scope);
    // $scope.apply();
  });

  salehRestaurant.controller('contactController', function($scope) {

  });
    
  salehRestaurant.controller('menuController', function($scope) {

  });
})();

// (function() {
// 	var app = angular.module("restaurant", []);

// 	app.controller('homeController', ['$scope', function($scope) { 
// 	  $scope.title = 'Top Sellers in Books'; 
// 	}]);
// })();