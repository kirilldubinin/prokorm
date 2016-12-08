angular.module('mytodo')
    .config(['$httpProvider', function($httpProvider) {
        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};    
        }    

        // Answer edited to include suggestions from comments
        // because previous version of code introduced browser-related errors

        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    }]);

angular.module('mytodo')
    .factory('feedHttp', ['$http', function($http) {
        var urlBase = 'http://localhost:8080/api/feeds/';
        var feedHttp = {};
        feedHttp.getFeeds = function() {
            return $http.get(urlBase).then(function(response) {
                if (response.data) {
                    return response.data;
                }
            });
        };
        feedHttp.saveFeed = function (feed) {
            var methode = feed._id ? 'put' : 'post';
            var url = feed._id ? (urlBase + feed._id) : urlBase
            return $http[methode](url, feed).then(function(response) {
                if (response.data) {
                    return response.data;
                }
            });    
        };

        feedHttp.getFeedView = function (feedId) {
            return $http.get(urlBase + feedId + '/view').then(function(response) {
                if (response.data) {
                    return response.data;
                }
            });    
        };

        feedHttp.getFeedEdit = function (feedId) {
            return $http.get(urlBase + feedId + '/edit').then(function(response) {
                if (response.data) {
                    return response.data;
                }
            });    
        };  

        feedHttp.getEmptyFeed = function () {
            return $http.post(urlBase + 'new').then(function(response) {
                if (response.data) {
                    return response.data;
                }
            });
        }

        feedHttp.deleteFeed = function (feedId) {
            return $http.delete(urlBase + feedId);
        };

        feedHttp.diffFeeds = function (feedIds) {
            return $http.post(urlBase + 'diff', {feedIds: feedIds}).then(function(response) {
                if (response.data) {
                    return response.data;
                }
            }); 
        }
        return feedHttp;
    }]);