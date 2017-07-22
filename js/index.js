var appModule = angular.module('carecluesApp',['ui.bootstrap', 'ngRoute','ngAside','ngAnimate', 'ngTouch', 'uiSwitch','infinite-scroll']);

appModule.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider, httpMethodInterceptorProvider){
	
	$locationProvider.html5Mode(true);
	
    $routeProvider.when('/', {
        templateUrl: 'views/PatientListPageTemplate.html',
        controller: 'PatientListController'
      }).otherwise({
        redirectTo: '/'
   	  })
	  ;      
  
  }]);
  


appModule.controller('MainCtrl', function($scope,PageTitle,MetaInformation) {
  //$scope.pageCtx = myPageCtx;
  $scope.PageTitle = PageTitle;
  $scope.MetaInformation = MetaInformation;
});


