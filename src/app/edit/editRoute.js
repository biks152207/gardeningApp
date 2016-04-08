(function(){
  'use strict';
    angular.module('gardeningApp')
      .config(Config);

    function Config($stateProvider){
      $stateProvider.state('editGartenumaenderung',{
        url: '/gartenumaenderung/:id',
        controller: 'editCtrl',
        controllerAs: 'edit',
        templateUrl: 'app/edit/edit.html',
        resolve:{
          appData: function(GardenService, $stateParams, toastr, $q, $location){
            var defer = $q.defer();
            var obj = {
              type: 'gartenumaenderung'
            };
            GardenService.getGardenById($stateParams.id).then(function(data){
              obj.data = data.data.data;
              defer.resolve(obj);
            }, function(err){
              toastr.info('Not Found');
              $location.url('/');
            })
            return defer.promise;
          }
        }
      })
      .state('editGartenunterhalt',{
        url: '/gartenunterhalt/:id',
        controller: 'editCtrl',
        controllerAs: 'edit',
        templateUrl: 'app/edit/edit.html',
        resolve:{
          appData: function(GardenService, $stateParams, toastr, $q, $location){
            var defer = $q.defer();
            var obj = {
              type: 'gartenunterhalt'
            };
            GardenService.getGardenById($stateParams.id).then(function(data){
              obj.data = data.data.data;
              defer.resolve(obj);
            }, function(err){
              toastr.info('Not Found');
              $location.url('/');
            })
            return defer.promise;
          }
        }
      })
      .state('addGartenumaenderung',{
        url: '/add-gartenumaenderung',
        controller: 'editCtrl',
        controllerAs: 'edit',
        templateUrl: 'app/edit/edit.html',
        resolve:{
          appData: function(){
            return {
              type: 'gartenumaenderung',
              data: {}
            }
          }
        }
      })
       .state('addGartenunterhalt',{
        url: '/add-gartenunterhalt',
        controller: 'editCtrl',
        controllerAs: 'edit',
        templateUrl: 'app/edit/edit.html',
        resolve:{
          appData: function(){
            return {
              type: 'gartenunterhalt',
              data: {}
            }
          }
        }
      })
    }


})();
