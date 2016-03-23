(function() {
  'use strict';

  angular
    .module('gardeningApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
