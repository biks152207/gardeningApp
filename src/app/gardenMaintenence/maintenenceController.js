(function(){
  'use strict';
    angular.module('maintenence', [])
      .controller('maintenenceCtrl', Maintenence);

    /** @ngInject */

    function Maintenence(GardenService, toastr, $state, $location, lang){
      var vm = this;
      vm.lists = [];
      var count = 0;
      vm.Infiniteloading = true;
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
          GardenService.maintenence(vm.state, count).then(function(response){
            if (!response.data.data.next_page_url){
              console.log(response.data.data.next_page_url);
              vm.Infiniteloading = false;

            }else{
              count++;
              list();
            }
            vm.lists = vm.lists.concat(response.data.data.data);
            vm.loading = false;
          })

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
