(function(){
  'use strict';
    angular.module('maintenence', [])
      .controller('maintenenceCtrl', Maintenence);

    /** @ngInject */

    function Maintenence(GardenService, toastr, $state, $location, lang){
      var vm = this;
      var page = 100;
      vm.lists = [];
      vm.Infiniteloading = true;
      var count = 0;
      // var pageLimit = null;
      var location = $location.$$absUrl
      var type = location.substring(location.lastIndexOf('/'),location.length )
      vm.selection = null;
      vm.disableScroll = false;
      vm.loading = true;
      vm.getList = list.bind(vm);
      vm.checked = function(value){
        console.log(value);
        // return value.status == 1;
      }
      vm.change = function(value){
        console.log(value);
      }
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
      vm.state = $state.current.name;
      vm.selectionFilter = Selection.bind(vm);
      vm.editor = Editor.bind(vm);
      function list(){
        if (vm.Infiniteloading){
          vm.Infiniteloading = false;
          GardenService.maintenence(vm.state, count).then(function(response){
            page = response.data.data.last_page;
            count++;
            if (vm.count == page){
              vm.Infiniteloading = false;
            }else{
              vm.lists = vm.lists.concat(response.data.data.data);
              vm.Infiniteloading = true;
            }
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
