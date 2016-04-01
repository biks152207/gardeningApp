(function(){
  'use strict';
    angular.module('gardeningApp')
      .controller('editCtrl', Controller)
      .controller('DialogController', function($scope, $mdDialog){
        $scope.close = function(){
          $mdDialog.cancel();
        }
        $scope.ok = function(){
          $mdDialog.hide();
        }
      })

    function Controller(GardenService, $state, toastr, appData, moment, $http, appUrl, lang, $mdDialog){
      var edit = this;
      edit.profile = appData.data;
      edit.profile.time_to_finish = Number(edit.profile.time_to_finish)
      edit.lang = lang.get();
      if (appData.type == 'gartenumaenderung'){
        edit.header = 'Gartenumänderung';
      }else{
        edit.header = 'Gartenunterhalt';
      }
      if (edit.profile && edit.profile.type){
        delete edit.profile.type;
      }
      if (edit.profile && edit.profile.execution_time){
        edit.profile.execution_time = new Date(edit.profile.execution_time)
      }
      edit.metData = Meta.bind(edit);
      edit.opened = false;
      edit.uploadStatus = false;
      edit.upload = Uploader.bind(edit);
      edit.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      edit.format = edit.formats[0];
      edit.submit = function(validity, form){
        if (validity){
          var url = null;
          if (edit.profile.id){
            url = appUrl + 'project/'+ edit.profile.id;
          }else{
            url = appUrl + appData.type + '/project';
          }
          $http.post(url, edit.profile ).then(function(data){
            if (data.status == 200){
              if (edit.profile.id){
                toastr.info(lang.get().update_success);
              }else{
                $('#postForm')[0].reset();
                form.$setPristine(true)
                toastr.info(lang.get().add_success);
              }
            }
          })
        }else{
          $(document).scrollTop()
        }

      }

      edit.metData();

      edit.cancel = function(){
        $mdDialog.cancel();
      }
      edit.goDone = function(){
        if (appData.type == 'gartenumaenderung'){
          $state.go('doneGartenumaenderung')
        }else{
          $state.go('doneGartenunterhalt')
        }
      }

      edit.imageDelete = function(index, name){
        $mdDialog.show({
          controller: 'DialogController',
          template: '<md-dialog><md-toolbar><div class="md-toolbar-tools"><h2>Bist du sicher?</h2> <span flex></span></div></md-toolbar><md-dialog-content></md-dialog-content><md-dialog-actions layout="row"><md-button ng-click="close()">Cancel</md-button ><md-button ng-click="ok()">Ok</md-button><md-dialog-actions></md-dialog>',
          parent: angular.element(document.body),
          clickOutsideToClose:true,
          fullscreen: true
        }).then(function(){

          console.log(index);

          edit.profile.resources.splice(index, 1);
          edit.profile.thumbs.forEach(function(i, t){
            if (i.name == name){
              edit.profile.thumbs.splice(t, 1);
              // edit.profile.thumbs.splice(in, 1);
            }
          })
        })
      }

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
          GardenService.uploader(file).then(function(result){
            edit.uploadStatus = false;
            // console.log(data);
            edit.profile.resources.push(result.data.data.name);
            console.log(edit.profile.resources);

          }, function(err){
            edit.uploadStatus = false;
          })
        }
      }

    }

})();
