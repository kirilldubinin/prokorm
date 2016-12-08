(function() {
    'use strict';
    angular.module('mytodo').controller('FeedEditController', FeedEdiController);
    /** @ngInject */
    function FeedEdiController($window, $stateParams, $state, $scope, dimension, lang, feedHttp, _) {
        var vm = this;
        vm.feedItemControls = [];
        var feedId = $stateParams.feedId;
        var promise = feedId ? feedHttp.getFeedEdit(feedId) : feedHttp.getEmptyFeed();
        promise.then(function(feed) {
            vm.feedItemSections = feed;

            //set analysis list
            vm.feedItem = {
                analysis: _.map(feed[0].subSections, function(subSection) {
                    return subSection.initialItem;
                })
            }
        });
        vm.onAnalysisAdd = function() {

            // copy current 
            var newAnalysis = _.clone(vm.currentAnalysis);
            delete newAnalysis._id;
            newAnalysis.number = vm.feedItem.analysis.length + 1;
            vm.feedItem.analysis.push(newAnalysis);

            var currentNumber = vm.currentAnalysis.number;

            var newAnalysisSection = 
                _.clone(_.filter(vm.feedItemSections[0].subSections, function (subSection) {
                    return subSection.initialItem.number === currentNumber;
                }));

            newAnalysisSection.initialItem = newAnalysis;
            vm.feedItemSections[0].subSections.push(newAnalysisSection);
        };
        vm.onAnalysisSelect = function(item) {
            vm.currentAnalysis = item;
        };
        vm.save = function() {

            var feed = {
                _id: feedId,
                analysis: _.map(vm.feedItemSections[0].subSections, function (subSection) {
                    return subSection.initialItem;
                }),
                general: vm.feedItemSections[1].subSections[0].initialItem,
                harvest: vm.feedItemSections[2].subSections[0].initialItem,
                feeding: vm.feedItemSections[3].subSections[0].initialItem
            };
            feedHttp.saveFeed(feed).then(function(response) {
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
        vm.onSelfExplanationLinkClick = function(key) {
            $state.go('farm.help', {
                'key': key
            });
        };
    }
})();