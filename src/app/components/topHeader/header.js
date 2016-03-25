(function(){
  'use strict';
    angular.module('gardeningApp')
      .directive('top', Header);

    function Header(){
      return{
        restrict: 'AE',
        templateUrl: 'app/components/topHeader/top.html',
        link: function(scope, element, attr){
          console.log('hi');
        }
      }
    }


})();
