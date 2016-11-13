function DimensionFactory() {
    
    var dimensionObj = {
        dryMaterial: '%'
    };

    return function (key) {
    	return dimensionObj[key] || '';
    } 
}
// Register factory
angular.module('mytodo').factory('dimension', DimensionFactory);