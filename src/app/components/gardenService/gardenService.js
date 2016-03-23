(function(){
  angular.module('gardeningApp')
    .service('GardenService', GardenService);
  /** @ngInject */
  function GardenService($http, appUrl){
    var list;
    this.maintenence = function(){
      return $http.get(appUrl + 'gartenumaenderung/projects');
    }
    this.getGardenById = function(id){
      return $http.get(appUrl + 'project/' + id );
    }
    this.setStorage = function(arg){
      list = arg;
    }
    this.getStorage = function(){
      return list;
    }
  }

})();
