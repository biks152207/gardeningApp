(function(){
  'use strict';
    angular.module('gardeningApp')
      .controller('doneCtrl', Done);

    function Done(appData, GardenService){
      var done = this;
      done.lists = [];
      done.loading = false;
      done.getList = Getlist.bind(done);
      // done.search = Filter.bind(done);
      // console.log(appData);
      done.convert = function(data){
        return moment(data).format('DD.MM.YYYY');
      }

      done.getList();
      function Getlist(){
        done.loading = true;
        GardenService.getDoneList(appData.name,done.searchTerm).then(function(Data){
          if (Data.status == 200){
            done.lists = Data.data.data;
            // done.oldValue = JSON.parse(JSON.stringify(done.lists));
          }
          done.loading = false;
        })
      }
      done.search = Getlist.bind(done);
      //
      // function Filter(searchTerm){
      //   if (searchTerm){
      //     done.loading = true;
      //     done.lists.filter(function(data){
      //         var obj = data.projects.filter(function(i){
      //           // console.log(i);
      //           var condition2 = false;
      //           console.log(i.lastname.toLowerCase().indexOf(searchTerm.toLowerCase()));
      //           if (i.lastname.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1){
      //             console.log('1');
      //             condition2 = true;
      //           }
      //           if (i.firstname.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1){
      //             console.log('1');
      //             condition2 = true;
      //           }
      //           if (i.address.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1){
      //             condition2 = true;
      //           }
      //
      //           return condition2;
      //
      //         })
      //       data.projects = obj;
      //     })
      //     done.loading = false;
      //   }else{
      //     done.lists = JSON.parse(JSON.stringify(done.oldValue));
      //     done.loading = false;
      //   }
      // }
    }

})();
