'use strict';

/**
 * Custom Filter
 */
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

angular.module('carecluesApp').controller('PatientListController', function($scope, $route, $http, PageTitle,MetaInformation,commonServices) 
{
	/**
	 * User controller functions
	 */
	 
	/**
	 * @function init
	 */
	
	$scope.init = function() 
	{
		$('.popup-close-btn').on('click',function(){
			$('#patient-popup').fadeOut();
		});
		
		
		PageTitle.setTitle('Find Patient from Careclues');
		MetaInformation.setMetaDescription('Find Patient from Careclues');
		
		var str = "abcdefghijklmnopqrstuvwxyz";
		$scope.alphabet = str.toUpperCase().split("");
		
  		$scope.activeLetter = 'A'; 
		$scope.dataLimit = 20;
		
		$http.get('resource/patients.json').success(function (data) 
		{
			for(var i=0; i<data.length; i++)
			{
				data[i].patientInfo = data[i].name.first +" "+ data[i].name.last +"("+ data[i].age + ")"  ;
			}
			$scope.patients = data;
         });
		
	};
	
	 
	/**
	 * @function activateLetter
	 * @parameter letter
	 */
	$scope.activateLetter = function(letter)
	{
		$scope.dataLimit = 20;
		$scope.activeLetter = letter;
	};

	/**
	 * @function NextPage
	 */
	$scope.NextPage = function () 
	{
			$scope.dataLimit = $scope.dataLimit + 20;
	};
	
	/**
	 * @function openPatientInfoPopup
	 * @parameter patient
	 */
	$scope.openPatientInfoPopup = function(patient)
	{
		$scope.patientPicture = patient.picture;
		$scope.patientFirstName = patient.name.first;
		$scope.patientLastName = patient.name.last;
		$scope.patientAge = patient.age;
		
		$('#patient-popup').fadeIn();
	};
	
	/**
	 * @function pendingWork
	 */
	$scope.pendingWork = function() 
	{
           commonServices.open('We are Coming Soon with this Functionality');
    };
});

