(function() {
    'use strict';
    angular.module('mytodo').controller('FeedEditController', FeedEdiController);
    /** @ngInject */
    function FeedEdiController($window, $stateParams, $state, dimension, lang, feedHttp, _) {
        var vm = this;
        vm.feedItemControls = [];
        var feedId = $stateParams.feedId;

        var promise = feedId ? feedHttp.getFeed(feedId) : feedHttp.getEmptyFeed();
        promise.then(function(feed) {
            vm.feedItem = feed;

            vm.feedItemSections = [{
                width: 40,
                label: lang('analysis'),
                key: 'analysis',
                subSections: _.map(feed['analysis'], function (analys) {
                    return convertToControl(analys);
                })
            }, {
                width: 20,
                label: lang('general'),
                key: 'general',
                subSections: [convertToControl(feed['general'])]
            }, {
                width: 20,
                label: lang('harvest'),
                key: 'harvest',
                subSections: [convertToControl(feed['harvest'])]
            }, {
                width: 20,
                label: lang('feeding'),
                key: 'feeding',
                subSections: [convertToControl(feed['feeding'])]
            }];
        });

        vm.save = function() {
            console.log(vm.feedItem);
            return;
            feedHttp.saveFeed(vm.feedItem).then(function() {
                $state.go('farm.instance.feed.instance', {
                    'feedId': feedId
                });
            });
        };
        vm.cancel = function() {
            $state.go('farm.instance.feed.instance', {
                'feedId': feedId
            });
        }

        vm.onSelfExplanationLinkClick = function (key) {
            $state.go('farm.help', {
                'key': key
            });    
        }

        vm.getModel = function (block, $index, control) {
            return feedEdit.feedItem[block][control];
        }

        function convertToControl(item) {
            return _.map(item, function(value, key) {
                if (item.hasOwnProperty(key)) {
                    return {
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