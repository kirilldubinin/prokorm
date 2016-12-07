(function() {
    'use strict';
    angular.module('mytodo').controller('FeedEditController', FeedEdiController);
    /** @ngInject */
    function FeedEdiController($window, $stateParams, $state, $scope, dimension, lang, feedHttp, _) {
        var vm = this;
        vm.feedItemControls = [];
        var feedId = $stateParams.feedId;

        var promise = feedId ? feedHttp.getFeed(feedId) : feedHttp.getEmptyFeed();
        promise.then(function(feed) {
            vm.feedItem = feed;
            vm.feedItemSections = getFeedItemSections();
        });

        vm.onAnalysisAdd = function () {
            // copy current 
            var newAnalysis = _.clone(vm.currentAnalysis);
            delete newAnalysis._id;
            newAnalysis.number = vm.feedItem.analysis.length + 1;

            vm.feedItem.analysis.push(newAnalysis);
            vm.feedItemSections = getFeedItemSections();
        };

        vm.onAnalysisSelect = function (item) {
            vm.currentAnalysis = item;
        };
 
        vm.save = function() {
            feedHttp.saveFeed(vm.feedItem).then(function(response) {
                if (response.message === 'OK') {
                    $state.go('farm.instance.feed.instance', {
                        'feedId': response.id
                    });    
                }
                
            });
        };
        vm.cancel = function() {
            $state.go('farm.instance.feed.instance', {
                'feedId': feedId
            });
        };
        vm.onSelfExplanationLinkClick = function (key) {
            $state.go('farm.help', {
                'key': key
            });    
        };
        vm.getModel = function (block, $index, control) {
            return feedEdit.feedItem[block][control];
        };

        function getFeedItemSections () {

            return [{
                width: 40,
                label: lang('analysis'),
                key: 'analysis',
                subSections: _.map(vm.feedItem['analysis'], function (analys) {
                    return {
                        initialItem: analys,
                        controls: convertToControl(analys)
                    }
                })
            }, {
                width: 20,
                label: lang('general'),
                key: 'general',
                subSections: [{
                    initialItem: vm.feedItem['general'],
                    controls: convertToControl(vm.feedItem['general'])
                }]
            }, {
                width: 20,
                label: lang('harvest'),
                key: 'harvest',
                subSections: [{
                    initialItem: vm.feedItem['harvest'],
                    controls: convertToControl(vm.feedItem['harvest'])
                }]
            }, {
                width: 20,
                label: lang('feeding'),
                key: 'feeding',
                subSections: [{
                    initialItem: vm.feedItem['feeding'],
                    controls: convertToControl(vm.feedItem['feeding'])
                }]
            }];
        }

        function convertToControl(item) {
            return _.map(item, function(value, key) {
                if (item.hasOwnProperty(key)) {

                    return {
                        isBoolean: value === true || value === false,
                        itemToBind: item,
                        label: lang(key),
                        dimension: dimension(key),
                        key: key,
                        children: (value && typeof(value) !== 'string' && typeof(value) !== 'number') ? convertToControl(value) : null
                    }
                }
            });
        };
    }
})();