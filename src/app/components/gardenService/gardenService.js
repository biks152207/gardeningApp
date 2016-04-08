(function(){
  angular.module('gardeningApp')
    .filter('unique', function() {
       return function(collection, keyname) {
          var output = [],
              keys = [];

          angular.forEach(collection, function(item) {
              var key = item[keyname];
              if(keys.indexOf(key) === -1) {
                  keys.push(key);
                  output.push(item);
              }
          });

          return output;
       };
    })
    .service('GardenService', GardenService);
  /** @ngInject */
  function GardenService($http, appUrl, Upload){
    var list;
    this.maintenence = function(type, id){
      return $http.get(appUrl + type + '/projects?page=' + id + '');
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

    this.getDoneList = function(type,searchTerm){
      if (searchTerm){
        q = searchTerm;
      }else{
        q = '';
      }
      return $http.get(appUrl + type + '/projects/done?q='+q);
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
