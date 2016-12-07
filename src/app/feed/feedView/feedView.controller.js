(function() {
    'use strict';
    angular.module('mytodo').controller('FeedViewController', FeedViewController);
    /** @ngInject */
    function FeedViewController($mdDialog, $stateParams, $state, feedHttp, lang, dimension, diff, _) {
        
        var vm = this;

        var feedId = $stateParams.feedId;
        if (!feedId) {
            return;
        }
        vm.isDrySwitch = true;
        vm.diff = function() {
            $state.go('farm.instance.feed.diff');
            diff.toggleFeed(vm.feed);
        }
        vm.edit = function() {
            $state.go('farm.instance.feed.edit', {
                'feedId': feedId
            });
        };
        vm.delete = function(ev) {
            var confirm = $mdDialog.confirm().title(lang('removeFeedConfirmDialogTitle')).textContent(lang('removeFeedConfirmDialogContent')).targetEvent(ev).ok(lang('yes')).cancel(lang('no'));
            $mdDialog.show(confirm).then(function() {
                feedHttp.deleteFeed($stateParams.feedId).then(function(res) {
                  $state.go('farm.instance.feed');
                });
            }, function() {});
        }; 

        feedHttp.getFeedView(feedId).then(function(feedView) {
          vm.feed = feedView;
          vm.feedItemSections = [{
              width: 40,
              label: lang('analysis'),
              key: 'analysis',
              controls: feedView.analysis
          }, {
              width: 20,
              label: lang('general'),
              key: 'general',
              controls: feedView.general
          }, {
              width: 20,
              label: lang('harvest'),
              key: 'harvest',
              controls: feedView.harvest
          }, {
              width: 20,
              label: lang('feeding'),
              key: 'feeding',
              controls: feedView.feeding
          }];
        });
    }
})();