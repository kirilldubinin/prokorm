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
        },{
          label: lang('feeding'),
          key: 'feeding',
          children: convertToControl(feed['feeding'])
        }
      ];
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
