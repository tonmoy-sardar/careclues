appModule.factory('commonServices', function($modal) {     
    var factory = {};     
    // Change Route Method 
    factory.changeRoute = function(url, forceReload, $scope) {
        $scope = $scope || angular.element(document).scope();
        if(forceReload || $scope.$$phase) {
            window.location = url;
        } else {
            $location.path(url);
            $scope.$apply();
        }
    };
    
    factory.open = function (content) {
        var modalInstance = $modal.open({
        templateUrl: 'views/Popup.html',
        controller: 'PopupInstanceController',
        resolve: {
        content: function () {
        return content
        }
        }
        });
    }
	factory.erroropen = function (content) {
        var modalInstance = $modal.open({
        templateUrl: 'views/PopupError.html',
        controller: 'PopupInstanceController',
        resolve: {
        content: function () {
        return content
        }
        }
        });
    }
    return factory;
});

appModule.factory('PageTitle', function () 
{
	var title = 'Find from Careclues';
	return {
		title: function () { return title; },
		setTitle: function (newTitle) { title = newTitle; }
	};
});

appModule.factory('MetaInformation', function() 
{
      var metaDescription = '';
      var metaKeywords = '';
      return {
        metaDescription: function() { return metaDescription; },
        metaKeywords: function() { return metaKeywords; },
        reset: function() {
          metaDescription = '';
          metaKeywords = '';
        },
        setMetaDescription: function(newMetaDescription) {
          metaDescription = newMetaDescription;
        },
        appendMetaKeywords: function(newKeywords) {
          for (var key in newKeywords) {
            if (metaKeywords === '') {
              metaKeywords += newKeywords[key].name;
            } else {
              metaKeywords += ', ' + newKeywords[key].name;
            }
          }
        }
      };
});// JavaScript Document