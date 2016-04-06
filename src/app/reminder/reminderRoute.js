(function(){
  'use strict';
    angular.module('gardeningApp')
      .config(ReminderConfig);

    function ReminderConfig($stateProvider){
      $stateProvider
        .state('reminder',{
          url: '/reminder',
          controller: 'reminderCtrl',
          controllerAs: 'remind',
          templateUrl: 'app/reminder/reminder.html'
        })
        .state('reminder-done',{
          url: '/reminder/done',
          controller: 'reminderDoneCtrl',
          controllerAs: 'done',
          templateUrl: 'app/reminder/done.html'
        })

    }

})();
