(function(){
  'use strict';
    angular.module('gardeningApp')
      .config(gardeningConfig)

      /** @ngInject */
      function gardeningConfig($stateProvider, $urlRouterProvider){
        $stateProvider
          .state('gartenunterhalt',{
            url: '/gartenunterhalt',
            controller: 'maintenenceCtrl',
            controllerAs: 'vm',
            templateUrl: 'app/gardenMaintenence/gardenMaintenence.html'
          })
          .state('gartenumaenderung',{
            url: '/gartenumaenderung',
            controller: 'maintenenceCtrl',
            controllerAs: 'vm',
            templateUrl: 'app/gardenMaintenence/gardenMaintenence.html'
          })
          .state('change',{
            url: '/change/:id',
            controller: 'taskCtrl',
            controllerAs: 'task',
            templateUrl: 'app/gardenMaintenence/task.html',
            resolve: {
              data: function(GardenService, $q){
                var defer = $q.defer();
                var storage = GardenService.getStorage();
                if (storage.length != 0){
                  defer.resolve(storage);
                }else{

                }
                return defer.promise;
              }
            }
          })
          .state('Gartenumänderung',{
            url: '/change',
            controller: 'changeCtrl',
            controllerAs: 'vm',
            templateUrl: 'app/gardenMaintenence/gardenMaintenence.html'
          })
      }

})();
