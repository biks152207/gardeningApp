(function(){
  'use strict';
    angular.module('gardeningApp')
      .controller('reminderDoneCtrl', Controller);

    function Controller(appUrl, $http){
      var done = this;
      done.loading = true;
      done.lists = [];
      var count = 0;
      done.infiniteLoading = true;
      done.getList = Getlist.bind();

      function Getlist(){
        if (done.infiniteLoading){
          done.infiniteLoading = false;
          $http.get(appUrl + 'reminders/done?page=' + count).success(function(result){
            if (result.data.next_page_url){
              done.infiniteLoading = true;
              count++
            }else{
              done.infiniteLoading = false;
            }
            done.loading = false;
            done.lists = done.lists.concat(result.data.data);
          }).error(function(err){

          })
        }

      }
      done.getList();
    }

})();
