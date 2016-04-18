(function(){
  'use strict';
    angular.module('gardeningApp')
      .controller('reminderCtrl', Remind)
      .directive('myModal', function() {
         return {
           restrict: 'A',
           scope: {
             close: '='
           },
           link: function(scope, element, attr) {
             scope.close = function() {
                 element.modal('hide');
             };
           }
         }
      });

    function Remind($http, appUrl, lang, toastr, $scope, $state){
      var remind = this;
      remind.lists = [];
      remind.modalclose = null;
      remind.loading= true;
      remind.disableInfiniteScroll = false;
      var count = 0;
      remind.getList = GetList.bind(remind);
      remind.submit = Post.bind(remind);

      remind.goToDone = function(){
        $state.go('reminder-done');
      }

      function GetList(){
        if (!remind.disableInfiniteScroll){
          remind.disableInfiniteScroll = true;
          $http.get(appUrl + 'reminders?page=' + count)
            .then(function(result){
              if (result.data.data.next_page_url == null){
                remind.disableInfiniteScroll = true;
              }else{

                count++;
                remind.disableInfiniteScroll = false;
                // GetList();
              }
              remind.loading = false;
              remind.lists = remind.lists.concat(result.data.data.data);


            })
        }
      }

      function Post(data){
        if (data){
          remind.submitting = true;
          $http.post(appUrl + 'reminder', {title: data}).then(function(Data){
            if (Data.status == 200){
              remind.modalclose();
              remind.lists.unshift({title: data, status: 0})
              toastr.info(lang.get().add_success);
            }
            remind.submitting = false;
            remind.newText = '';
          }, function(err){
            remind.submitting = false;
          })
        }
      }
      remind.getList();
    }

})();
