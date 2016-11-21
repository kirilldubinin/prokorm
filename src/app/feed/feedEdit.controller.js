(function() {
    'use strict';
    angular.module('mytodo').controller('FeedEditController', FeedEdiController);
    /** @ngInject */
    function FeedEdiController($window, $stateParams, $state, dimension, lang, feedHttp, _) {
        var vm = this;
        vm.feedItemControls = [];

        /*vm.feedItem = {
            general: {
                name: '',
                source: '',
                composition: '',
                year: '',
                weight: 0,
                opened: false,
                storage: '',
                done: false
            },
            analysis: {
                dryMaterial: '',
                protein: '',
                digestedProtein: '',
                fat: '',
                cellulose: '',
                sugar: '',
                ash: '',
                exchangeEnergy: '',
                carotene: '',
                starch: ''
            },
            harvest: {
                field: '',
                cutNumber: '',
                preservative: '',
                dosage: '',
                storage: '',
                film: '',
                start: '',
                end: ''
            },
            feeding: {
                start: '',
                end: '',
                tonnPerDay: ''
            }
        };*/

        var feedId = $stateParams.feedId;

        var promise = feedId ?
                feedHttp.getFeed(feedId) :
                feedHttp.getEmptyFeed();

        promise.then(function (feed) {
            vm.feedItem = feed;
            vm.feedItemControls = [
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
                }, {
                  label: lang('feeding'),
                  key: 'feeding',
                  children: convertToControl(feed['feeding'])
                }
              ];
        });

        vm.save = function () {
            feedHttp.saveFeed(vm.feedItem).then(function () {
                $state.go('farm.instance.feed.instance', { 'feedId': feedId });
            });
        };

        vm.cancel = function () {
            $state.go('farm.instance.feed.instance', { 'feedId': feedId });
        }

        function convertToControl(item) {
            return _.map(item, function(value, key) {
                if (item.hasOwnProperty(key)) {
                    return {
                        label: lang(key),
                        dimension: dimension(key),
                        key: key,
                        children: (value && typeof(value) !== 'string' && typeof(value) !== 'number') ? 
                            convertToControl(value) : 
                            null
                    }    
                }
            });
        };
    }
})();