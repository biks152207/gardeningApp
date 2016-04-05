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
      var count = 0;
      remind.Infiniteloading = true;
      remind.getList = GetList.bind(remind);
      remind.submit = Post.bind(remind);

      remind.goToDone = function(){
        $state.go('reminder-done');
      }

      function GetList(){
        if (remind.Infiniteloading){
          remind.Infiniteloading = false;
          $http.get(appUrl + 'reminders?page=' + count)
            .then(function(result){
              remind.loading = false;
              if (!result.data.data.next_page_url){
                remind.Infiniteloading = false;
              }else{
                remind.Infiniteloading = true;
                count++;
              }

              remind.lists = _.uniq(remind.lists.concat(result.data.data.data);
            })

        }

      }

      function Post(data){
        if (data){
          $http.post(appUrl + 'reminder', {title: data}).then(function(Data){
            if (Data.status == 200){
              remind.modalclose();
              remind.lists.unshift({title: data, status: 0})
              toastr.info(lang.get().add_success);
            }
          }, function(err){

          })
        }
      }
      remind.getList();
    }

})();
