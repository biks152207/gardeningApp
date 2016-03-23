/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('gardeningApp')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('appUrl', 'http://slctn.us/garden/public/api/');

})();
