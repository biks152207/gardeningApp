(function(){
  'use strict';
    angular.module('gardeningApp')
      .controller('editCtrl', Controller);

    function Controller(GardenService, $state, toastr, appData, moment){
      var edit = this;
      edit.profile = appData;
      console.log(edit.profile);
      edit.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
      edit.metData = Meta.bind(edit);
      edit.profile.created_at =new Date(edit.profile.created_at)
      edit.opened = false;
      edit.uploadStatus = false;
      edit.upload = Uploader.bind(edit);
      edit.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      edit.format = edit.formats[0];

      edit.metData();

      function Meta(){
        GardenService.metaData().then(function(result){
          if (result.status == 200){
            edit.type = result.data.data.repeat;
            edit.users = result.data.data.users;
          }
        })
      }

      function Uploader(file){
        if (file){
          edit.uploadStatus = true;
          GardenService.uploader(file).then(function(data){
            edit.uploadStatus = false;
            edit.profile.resources.push(data.data);
            console.log(edit.profile.resources);

          }, function(err){
            edit.uploadStatus = false;
          })
        }
      }

    }

})();
