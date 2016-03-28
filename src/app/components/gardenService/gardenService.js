(function(){
  angular.module('gardeningApp')
    .service('GardenService', GardenService);
  /** @ngInject */
  function GardenService($http, appUrl, Upload){
    var list;
    this.maintenence = function(type){
      return $http.get(appUrl + type + '/projects');
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
    this.metaData = function(){
      return $http.get(appUrl + 'project/meta-data')
    }
    this.uploader = function(file){
      return Upload.upload({
        url: appUrl + 'file/upload',
        data: {
          project_file: file
        }
      });
    }
  }

})();
