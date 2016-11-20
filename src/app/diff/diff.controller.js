(function() {
    'use strict';
    angular.module('mytodo').controller('DiffController', DiffController);

    function DiffController(feedHttp, lang, dimension, diff, _) {
    	var vm = this;

    	vm.feedsIdForDiff = [];
    	vm.propertiesForDiff = [];

    	diff.onAdd(function (feed) {

    		var existing = _.remove(vm.feedsIdForDiff, function (id) {
				return id === feed._id;
			});

    		if (!existing.length) {
    			vm.feedsIdForDiff.push(feed._id);
    		}

    		updateDiffRows();
    	});

    	function updateDiffRows() {

    		if (!vm.feedsIdForDiff.length) {
    			vm.diffRows = [];
    			return;
    		}

    		// request for diff
    		feedHttp.diffFeeds(vm.feedsIdForDiff).then(function (result) {
    			
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