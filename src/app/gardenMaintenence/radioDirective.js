(function(){
  'use strict';
    angular.module('gardeningApp')
      .directive('radioBeautify', Controller)
      .directive('radioCheck', Controller1);

      function Controller1($timeout, $http, appUrl, $mdToast, $mdDialog, lang,toastr){
        return{
          restrict: 'AE',
          scope: {
            radioBeautify: '=',
            data: '='
          },
          link: function(scope,element, attr, ngModel){
            $timeout(function () {
              if (attr.enable){
                element.screwDefaultButtons({
                  image: 'url("assets/images/radio-1-checked.png")',
                  width: 32,
                  height: 34
                });

            }else{
              element.screwDefaultButtons({
                image: 'url("assets/images/radio-2.png")',
                width: 32,
                height: 34
              });
            }
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
              if (obj.status == 0){
                url = appUrl + 'reminder/' + obj.id + '/set-status/' + 1;
              }else{
                url = appUrl + 'reminder/' + obj.id + '/set-status/' + 0;
              }
              $http.post(url).then(function(Data){
                if (Data.status == 200){
                  var msg = null;
                  if (obj.status == 0){
                    change(obj.id, 1);
                    msg = 'Erledigt';
                  }else{
                    change(obj.id, 0);
                    msg = lang.get().inactive_success
                  }
                  toastr.info(msg);
                }
              })


            })
          }
        }
      }

    function Controller($timeout, $http, appUrl, $mdToast, $mdDialog, lang, toastr){
      return{
        restrict: 'AE',
        scope: {
          radioBeautify: '=',
          data: '='
        },
        link: function(scope,element, attr, ngModel){
          $timeout(function () {
            if (attr.enable){
              element.screwDefaultButtons({
                image: 'url("assets/images/radio-1-checked.png")',
                width: 32,
                height: 34
              });

          }else{
            element.screwDefaultButtons({
              image: 'url("assets/images/radio-2.png")',
              width: 32,
              height: 34
            });
          }
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
            if (obj.status == 0){
              url = appUrl + 'project/' + obj.id + '/set-status/' + 1;
            }else{
              url = appUrl + 'project/' + obj.id + '/set-status/' + 0;
            }
            $http.post(url).then(function(Data){
              if (Data.status == 200){
                var msg = null;
                if (obj.status == 0){
                  change(obj.id, 1);
                  msg = 'Erledigt';
                }else{
                  change(obj.id, 0);
                  msg = lang.get().inactive_success
                }
                toastr.info(msg);

              }
            })


          })
        }
      }
    }

})();
