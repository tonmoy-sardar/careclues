'use strict';

appModule.filter('startsWithLetter', function() 
{
	return function(items, letter) 
	{
		var filtered = [];
		var letterMatch = new RegExp(letter, 'i');
		if(typeof items !== 'undefined')
		{
			for (var i = 0; i < items.length; i++)
			{
				var item = items[i];
				if (letterMatch.test(item.name.first.substring(0, 1))) {
				filtered.push(item);
				}
			}
		}
		return filtered;
	};
});

angular.module('carecluesApp').controller('PatientListController', function($scope, $route, $http, $window, $aside, $location,PageTitle,MetaInformation,commonServices) {
	
	$scope.init = function() 
	{
		$('.popup-close-btn').on('click',function(){
			$('#patient-popup').fadeOut();
		});
		PageTitle.setTitle('Find Patient from Careclues');
		MetaInformation.setMetaDescription('Find doctors in your area, view their profiles, phone number or driving directions and schedule appointments.');
		
		var str = "abcdefghijklmnopqrstuvwxyz";
		$scope.alphabet = str.toUpperCase().split("");
		
  		$scope.activeLetter = 'A'; 
		$scope.dataLimit = 20;
		
		$http.get('resource/patients.json').success(function (data) {
			  
			for(var i=0; i<data.length; i++)
			{
				data[i].patientInfo = data[i].name.first +" "+ data[i].name.last +"("+ data[i].age + ")"  ;
			}
			$scope.patients = data;
         });
		
	};
	
	$scope.activateLetter = function(letter)
	{
		$scope.dataLimit = 20;
		$scope.activeLetter = letter;
	};

	$scope.goTo = function(page) {
		$location.url(page);
	};
	
	
	$scope.NextPage = function () 
	{
			$scope.dataLimit = $scope.dataLimit + 20;
	};
		
	$scope.openPatientInfoPopup = function(patient)
	{
		$scope.patientPicture = patient.picture;
		$scope.patientFirstName = patient.name.first;
		$scope.patientLastName = patient.name.last;
		$scope.patientAge = patient.age;
		
		$('#patient-popup').fadeIn();
	};
	
	$scope.pendingWork = function() {
            // Function code
           commonServices.open('We are Coming Soon with this Functionality');
    };
});

