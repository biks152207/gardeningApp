(function(){
  'use strict';
    angular.module('maintenence', [])
      .controller('maintenenceCtrl', Maintenence);

    /** @ngInject */

    function Maintenence(GardenService, toastr, $state, $location, lang, $mdDialog, $http, appUrl, $filter){
      var vm = this;
      vm.lists = [];
      var count = 0;
      // vm.Infiniteloading = true;
      // var pageLimit = null;
      var location = $location.$$absUrl
      var type = location.substring(location.lastIndexOf('/'),location.length )
      vm.selection = null;
      vm.disableScroll = false;
      vm.loading = true;
      vm.getList = list.bind(vm);
      // vm.checked = function(value,obj){
      //   console.log(value);
      // }
      vm.convert = function(due_date, created){
        // console.log(data);
        if (due_date){
          return moment(due_date).format('DD.MM.YYYY');
          return;
        }
        return moment(created).format('DD.MM.YYYY');

      }
      vm.goBack = function(){
        $state.go('home');
      }

      vm.generator = function(list){
        var detail = '';
        if (list.firstname){
          detail += list.firstname + ', ';
        }
        if (list.lastname){
          detail += list.lastname + ', ';
        }
        if (list.address){
          detail += list.address + ', ';
        }
        if (list.place){
          detail += list.place + ', ';
        }
        return detail;
      }
      vm.dblclick = function(list){
        if (list.added_to_calender == 0){
          $mdDialog.show({
            controller: 'DialogController',
            templateUrl: 'app/gardenMaintenence/dialog1.html',
            clickOutsideToClose:true,
            fullscreen: true
          })
          .then(function(answer) {
            $http.get(appUrl+ 'project/' + list.id + '/add-calender').then(function(res){
              list.added_to_calender = 1;
            })
            // $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            // $scope.status = 'You cancelled the dialog.';
          });
      }
    }


      vm.addGarden = function(){
        if (type == '/gartenumaenderung'){
          $state.go('addGartenumaenderung')
        }else{
          $state.go('addGartenunterhalt');
          }
      }

      vm.goDone = function(){
        if (type == '/gartenumaenderung'){
          $state.go('doneGartenumaenderung')
        }else{
          $state.go('doneGartenunterhalt')
        }
      }
      vm.state = $state.current.name;
      vm.selectionFilter = Selection.bind(vm);
      vm.editor = Editor.bind(vm);
      function list(){
        if (!vm.disableScroll){
          vm.disableScroll = true;
          GardenService.maintenence(vm.state, count).then(function(response){
            if (response.data.data.next_page_url == null){
              vm.disableScroll = true;

            }else{
              count++;
              vm.disableScroll = false;

            }
            vm.lists = vm.lists.concat(response.data.data.data);
            vm.loading = false;
          })
        }

      }

      function Editor(id){
        if (!vm.selection){
          vm.selection = id;
        }
        $location.url(type + '/' + id);
      }

      function Selection(){
        if (vm.selection){
          vm.selected = vm.lists.filter(function(l){
            return l.id == vm.selection;
          });
          if (vm.selected.length > 0){
            GardenService.setStorage(vm.selected);
          }
          return;
        }
        toastr.info(lang.get().select_garden);

      }
      vm.getList();

      // list();
    }



})();
