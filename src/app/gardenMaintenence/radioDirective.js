(function(){
  'use strict';
    angular.module('gardeningApp')
      .directive('radioBeautify', Controller)

    function Controller($timeout){
      return{
        restrict: 'AE',
        scope: {
          radioBeautify: '='
        },
        link: function(scope,element, attr, ngModel){
          $timeout(function () {
            element.screwDefaultButtons({
              image: 'url("assets/images/radio-2.png")',
              width: 32,
              height: 33
            });

          }, 0);
          element.on('change', function(el){
            console.log(el)
            scope.$apply(function(){
              scope.radioBeautify = el.target.value;
            })


          })
        }
      }
    }

})();
