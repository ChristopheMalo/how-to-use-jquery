/* 
 * Code Javascript Cours 15 - jQuery UI
 * 
 * 
 */
$(function() {
   // Déplacer les éléments
   $('#drag-div, #content-drag img').draggable();
   
   
   // Redimensionner des éléments - utilisation d'un thème
   $('#contentresize').resizable();
   $( "#resizable" ).resizable();
   
   
   // Accordéon
   $('#accordeon').accordion();
   
   
   // Choisir une date
   // Initialiser un calendrier français
   $.datepicker.regional['fr'] = {
        closeText: 'Fermer',
        prevText: 'Précédent',
        nextText: 'Suivant',
        currentText: 'Aujourd\'hui',
        monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
        dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
        dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
        dayNamesMin: ['D','L','M','M','J','V','S'],
        weekHeader: 'Sem.',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    // indiquer l'utilisation des réglages
    $.datepicker.setDefaults($.datepicker.regional['fr']);

    $('#datepicker').datepicker();
    
    
    // Boite de dialogue
    // Affichage d'une boite après clic sur un bouton
    $('#dialog1').click(function() {
        $('#dialog1b').dialog();
    });
    
    $('#dialog2').click(function() {
        $('#dialog2b').dialog({
            modal: true,
            buttons: {
                "Oui": function() {
                    $('body').css('background', 'yellow');
                    $( this ).dialog( "close" );
                },
                "Non": function() {
                    $( this ).dialog( "close" );
                }
            }
        }); 
    });
    
    
    // Afficher des onglets
    $('#onglets').tabs();
    
    
    // Animation
    $('#anim1').click(function() {
       $('#contenu').show('explode'); 
    });
});