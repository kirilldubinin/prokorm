(function() {
    'use strict';
    angular.module('mytodo').controller('DiffController', DiffController);

    function DiffController(feedHttp, lang, dimension, diff, _) {
    	var vm = this;
    	vm.propertiesForDiff = [];

        // if diff.getFeeds is not empty
        updateDiffRows(diff.getFeeds());

    	diff.onChange(updateDiffRows);
    	function updateDiffRows(feedsForDiff) {

    		if (!feedsForDiff.length) {
    			vm.diffRows = [];
    			return;
    		}

    		// request for diff
            var ids = _.map(feedsForDiff, function (f) {
                return f._id;
            });
    		feedHttp.diffFeeds(ids).then(function (result) {
    			
    			vm.diffRows = [
			        {
			          label: lang('general'),
			          key: 'general',
			          children: convertToControl(result['general'])
			        },
			        {
			          label: lang('analysis'),
			          key: 'analysis',
			          children: convertToControl(result['analysis'])
			        },
			        {
			          label: lang('harvest'),
			          key: 'harvest',
			          children: convertToControl(result['harvest'])
			        },
			        {
			          label: lang('feeding'),
			          key: 'feeding',
			          children: convertToControl(result['feeding'])
			        }
			      ];
    		});
    	}

    	function convertToControl (item) {

    		return _.map(item, function (value, key) {
    			if (item.hasOwnProperty(key)) {
                    return {
                        label: lang(key),
                        dimension: dimension(key),
                        key: key,
                        values: value.values,
                        children: (value && !value.values && !_.isArray(value) && !_.isNumber(value) && !_.isString(value)) ? 
                            convertToControl(value) : null
                            
                    }    
                }
    		});
    	}	
    }
})();