(function() {
  'use strict';
  angular
    .module('mytodo')
    .controller('FeedViewController', FeedViewController);

  /** @ngInject */
  function FeedViewController($mdDialog, $stateParams, $state, feedHttp, lang, dimension, diff, _) {
    var vm = this;
    var feedId = $stateParams.feedId;

    if (!feedId) {
      return;
    }

    vm.diff = function () {
      $state.go('farm.instance.feed.diff');
      diff.toggleFeed(vm.feed);
    }

    vm.edit = function () {
      $state.go('farm.instance.feed.edit', { 'feedId': feedId });
    };

    vm.delete = function (ev) {
      var confirm = $mdDialog.confirm()
        .title(lang('removeFeedConfirmDialogTitle'))
        .textContent(lang('removeFeedConfirmDialogContent'))
        .targetEvent(ev)
        .ok(lang('yes'))
        .cancel(lang('no'));

      $mdDialog.show(confirm).then(function() {
        feedHttp.deleteFeed($stateParams.feedId).then(function (res) {
          debugger;
        });
      }, function() {
        
      });
    };

    feedHttp.getFeed(feedId).then(function (feed) {
      vm.feed = feed;
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

    function convertToControl(item) {
      return _.map(item, function(value, key) {
        return {
          label: lang(key),
          value: value,
          dimension: dimension(key),
          key: key
        }  
      });
    };
  }
})();
