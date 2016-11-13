function UrlFactory() {
    
    var base = '';
    return {
    	setBase: function (baseUrl) {
    		base = baseUrl;
    	},
    	format: function (state) {
    		return base + state;
    	}
    }
}
// Register factory
angular.module('mytodo').factory('url', UrlFactory);