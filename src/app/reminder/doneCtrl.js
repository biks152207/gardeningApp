(function(){
  'use strict';
    angular.module('gardeningApp')
      .controller('reminderDoneCtrl', Controller);

    function Controller(appUrl, $http){
      var done = this;
      done.loading = true;
      done.disableInfiniteScroll = false;
      done.lists = [];
      var q= '';
      var count = 0;
      var hasCount = false;
      done.infiniteLoading = true;
      done.oldTerm = '';
      done.getList = Getlist.bind();
      done.search = Getlist.bind();

      function Getlist(){
        if (!done.disableInfiniteScroll){
          done.loading = true;
          done.disableInfiniteScroll = true;
          if (done.searchTerm && (done.oldTerm != done.searchTerm)){
            done.oldTerm = JSON.parse(JSON.stringify(done.searchTerm));
            count = 0;
            q = done.searchTerm;
            done.lists = [];
          }else{
            q = ''
          }
          $http.get(appUrl + 'reminders/done?page=' + count+ '&q='+ q).success(function(result){
            console.log(result);
            if (result.data.next_page_url){
              count++
              done.disableInfiniteScroll = false;
            }else{
              done.disableInfiniteScroll = true;
            }
            done.lists = done.lists.concat(result.data.data);
            done.loading = false;

          }).error(function(err){
            done.loading = false;
          })
        }
      }

      done.getList();
    }

})();
