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

    vm.isDrySwitch = true;

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

      var analysisControls = _.map(feed['analysis'], function (analys) {
        return convertToControl(analys);
      });

      // TODO:
      // join values in one section
      if (analysisControls.length > 1) {
        _.each(analysisControls[0], function (control, index) {
          var allValues = _.map(analysisControls, function (c) {
            return c[index].value;
          })
          control.values = allValues;
        });
      }

      vm.feedItemSections = [{
          width: 40,
          label: lang('analysis'),
          key: 'analysis',
          controls: analysisControls[0]
      }, {
          width: 20,
          label: lang('general'),
          key: 'general',
          controls: convertToControl(feed['general'])
      }, {
          width: 20,
          label: lang('harvest'),
          key: 'harvest',
          controls: convertToControl(feed['harvest'])
      }, {
          width: 20,
          label: lang('feeding'),
          key: 'feeding',
          controls: convertToControl(feed['feeding'])
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
