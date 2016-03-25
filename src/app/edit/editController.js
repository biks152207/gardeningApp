(function(){
  'use strict';
    angular.module('gardeningApp')
      .controller('editCtrl', Controller);

    function Controller(GardenService, $state, toastr, appData, moment){
      var edit = this;
      edit.profile = appData;
      edit.profile.created_at =new Date(edit.profile.created_at)
      edit.opened = false;
      edit.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      edit.format = edit.formats[0];
      edit.pop1 = function(){
        alert('test');
        edit.opened = true;
      }

    }

})();
