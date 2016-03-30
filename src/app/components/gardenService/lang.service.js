(function(){
  'use strict';
    angular.module('gardeningApp')
      .service('lang', Lang);

    function Lang(){
      this.get = function(){
        return {
          select_garden: 'Bitte Projekt auswählen',
          active_success: 'Erfolgreich aktiviert',
          inactive_success: 'Erfolgreich deaktiviert',
          enter_name: 'Bitte Nachnamen eingeben',
          less_character: 'Bitte mindestens 2 Zeichen eingeben',
          more_character: 'Bitte maximal 20 Zeichen eingeben',
          enter_first: 'Bitte Vornamen eingeben',
          enter_address: 'Bitte Adresse eingeben',
          invalid_postal: 'Ungültige Postleitzahl',
          enter_postal: 'Bitte Postleitzahl eingeben',
          enter_phone: 'Bitte Telefonnummer eingeben',
          invalid_email: 'Ungültige E-Mail Adresse',
          enter_email: 'Bitte E-Mail Adresse eingeben',
          add_success: 'Erfolgreich hinzugefügt',
          update_success: 'Erfolgreich aktualisiert',
          are_you_sure: 'are you sure?'

        }
      }
    }
})();
