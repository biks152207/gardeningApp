(function(){
  'use strict';
    angular.module('maintenence', [])
      .controller('maintenenceCtrl', Maintenence);

    /** @ngInject */

    function Maintenence(GardenService, toastr, $state){
      var vm = this;
      vm.selection = null;
      vm.loading = true;
      // vm.checked = function(value,obj){
      //   console.log(value);
      // }
      vm.state = $state.current.name;
      vm.selectionFilter = Selection.bind(vm);
      vm.editor = Editor.bind(vm);
      function list(){
        GardenService.maintenence(vm.state).then(function(response){
          vm.loading = false;
          vm.lists = response.data.data.data;
        })
      }

      function Editor(id){
        if (!vm.selection){
          vm.selection = id;
        }
        $state.go('edit', {id: vm.selection});
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
        toastr.info('Please select the garden');

      }

      list();
    }



})();
