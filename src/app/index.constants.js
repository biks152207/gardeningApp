/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('gardeningApp')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('appUrl', 'http://mueller-gartengestaltung.ch/server/public/api/');

})();
