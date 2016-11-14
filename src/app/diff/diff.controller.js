(function() {
    'use strict';
    angular.module('mytodo').controller('DiffController', DiffController);

    function DiffController(feedHttp, lang, dimension, diff, _) {
    	var vm = this;
    	vm.feedsForDiff = [];
    	vm.propertiesForDiff = [];

    	diff.onAdd(function (feed) {
    		feedHttp.getFeed(feed._id).then(function (feed) {
    			vm.feedsForDiff.push([
    				{
	                  label: lang('general'),
	                  key: 'general',
	                  children: convertToControl(feed['general'])
	                },
	                {
	                  label: lang('analysis'),
	                  key: 'analysis',
	                  children: convertToControl(feed['analysis'])
	                },
	                {
	                  label: lang('harvest'),
	                  key: 'harvest',
	                  children: convertToControl(feed['harvest'])
	                }
    			]);

    			vm.propertiesForDiff = [
    				{
	                  label: lang('general'),
	                  key: 'general',
	                  children: convertToControl(feed['general'])
	                },
	                {
	                  label: lang('analysis'),
	                  key: 'analysis',
	                  children: convertToControl(feed['analysis'])
	                },
	                {
	                  label: lang('harvest'),
	                  key: 'harvest',
	                  children: convertToControl(feed['harvest'])
	                }
    			];


    		});
    	});

    	function convertToControl (item) {

    		return _.map(item, function (value, key) {
    			if (item.hasOwnProperty(key)) {
                    return {
                        label: lang(key),
                        dimension: dimension(key),
                        key: key,
                        value: value,
                        children: (value && typeof(value) !== 'string' && typeof(value) !== 'number') ? 
                            convertToControl(value) : 
                            null
                    }    
                }
    		});
    	}	
    }
})();