(function() {
  'use strict';

  angular
    .module('gardeningApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,  $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    $locationProvider.html5Mode(true);
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = true;
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
    // uiGmapGoogleMapApiProvider.configure({
    //   china: true
    // })
  }

})();
