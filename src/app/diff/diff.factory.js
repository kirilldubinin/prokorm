function DiffFactory() {
    
    var _onAdd = angular.noop;
    var _onClear = angular.noop;

    var feedsForDiff = [];
    return {
    	getFeeds: function () {
    		return feedsForDiff;
    	},
    	addFeed: function (feed) {
    		feedsForDiff.push(feed);
    		_onAdd(feed);
    	},
    	clear: function () {
    		feedsForDiff = [];
    		_onClear();
    	},
    	_onClear: function (fn) {
    		if (angular.isFunction(fn)) {
    			_onClear = fn;
    		}
    	},
    	onAdd: function (fn) {
    		if (angular.isFunction(fn)) {
    			_onAdd = fn;
    		}
    	}
    }
}
// Register factory
angular.module('mytodo').factory('diff', DiffFactory);