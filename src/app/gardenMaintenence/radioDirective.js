(function(){
  'use strict';
    angular.module('gardeningApp')
      .directive('radioBeautify', Controller)

    function Controller($timeout, $http, appUrl, $mdToast, $mdDialog, lang){
      return{
        restrict: 'AE',
        scope: {
          radioBeautify: '=',
          data: '='
        },
        link: function(scope,element, attr, ngModel){
          console.log(scope);
          $timeout(function () {
            element.screwDefaultButtons({
              image: 'url("assets/images/radio-2.png")',
              width: 32,
              height: 33
            });

          }, 0);

          var change = function(id, status){
            scope.data.filter(function(Data){
              if (Data.id == id){
                Data.status = status;
              }
            })
          }
          element.on('change', function(el){
            var url = null;
            var obj = JSON.parse(el.target.value);
            console.log(obj.status);
            if (obj.status == 0){
              url = appUrl + 'project/' + obj.id + '/set-status/' + 1;
            }else{
              url = appUrl + 'project/' + obj.id + '/set-status/' + 0;
            }
            console.log(url);
            $http.post(url).then(function(Data){
              console.log(Data);
              if (Data.status == 200){
                var msg = null;
                if (obj.status == 0){
                  change(obj.id, 1);
                  msg = lang.get().active_success
                }else{
                  change(obj.id, 0);
                  msg = lang.get().inactive_success
                }
                $mdToast.show({
                    template: '<md-toast class="md-toast toastClass">'+msg+'</md-toast>',
                    hideDelay: 6000,
                    position: 'top right'
                });
              }
            })


          })
        }
      }
    }

})();
