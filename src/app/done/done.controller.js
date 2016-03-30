(function(){
  'use strict';
    angular.module('gardeningApp')
      .controller('doneCtrl', Done);

    function Done(appData, GardenService){
      var done = this;
      done.lists = [];
      done.getList = Getlist.bind(done);
      done.search = Filter.bind(done);
      // console.log(appData);

      done.getList();
      function Getlist(){
        GardenService.getDoneList(appData.name).then(function(Data){
          if (Data.status == 200){
            done.lists = Data.data.data;
            done.oldValue = JSON.parse(JSON.stringify(done.lists));
          }
        })
      }

      function Filter(searchTerm){
        if (searchTerm){
          // done.lists.filter(function(data){
          //   var condition1 = false;
          //   data.projects.filter(function(i){
          //     // console.log(i);
          //     var condition2 = false;
          //     console.log(i.lastname.toLowerCase().indexOf(searchTerm));
          //     if (i.lastname.toLowerCase().indexOf(searchTerm) != -1){
          //       console.log('1');
          //       condition2 = true;
          //     }
          //
          //     return condition2;
          //
          //   })
          // })
        }else{
          // done.lists = done.oldValue;
        }
      }
    }

})();
