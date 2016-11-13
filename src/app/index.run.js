(function() {
  'use strict';

  angular
    .module('mytodo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, url) {

    $log.debug('runBlock end');
    url.setBase('#/farm/kamenskoe/');
  }

})();
