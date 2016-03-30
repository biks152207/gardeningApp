(function(){
  'use strict';
    angular.module('gardeningApp')
      .config(DoneConfig);

    function DoneConfig($stateProvider){
      $stateProvider
        .state('doneGartenumaenderung',{
          url: '/done-gartenumaenderung',
          controller: 'doneCtrl',
          controllerAs: 'done',
          templateUrl: 'app/done/done.html',
          resolve: {
            appData: function($q){
              var defer = $q.defer();
              var obj = {
                name: 'gartenumaenderung'
              }
              defer.resolve(obj);
              return defer.promise;
            }
          }
        })
        .state('doneGartenunterhalt',{
          url: '/done-gartenunterhalt',
          controller: 'doneCtrl',
          controllerAs: 'done',
          templateUrl: 'app/done/done.html',
          resolve: {
            appData: function($q){
              var defer = $q.defer();
              var obj = {
                name: 'gartenunterhalt'
              }
              defer.resolve(obj);
              return defer.promise;
            }
          }
        })
    }

})();
