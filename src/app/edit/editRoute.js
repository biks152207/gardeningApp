(function(){
  'use strict';
    angular.module('gardeningApp')
      .config(Config);

    function Config($stateProvider){
      $stateProvider.state('edit',{
        url: '/edit/:id',
        controller: 'editCtrl',
        controllerAs: 'edit',
        templateUrl: 'app/edit/edit.html',
        resolve:{
          appData: function(GardenService, $stateParams, toastr, $q, $location){
            var defer = $q.defer();
            GardenService.getGardenById($stateParams.id).then(function(data){
              defer.resolve(data.data.data);
            }, function(err){
              toastr.info('Not Found');
              $location.url('/');
            })
            return defer.promise;
          }
        }
      })
    }


})();
