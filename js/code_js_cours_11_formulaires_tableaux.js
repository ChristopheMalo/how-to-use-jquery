/* 
 * Code Javascript Cours 11 - Les formulaires
 * 
 * 
 */
$(function() {
    /*
    * Les formulaires
    */
    // Donner le focus
    $('#focus').focus();
    
    // Déterminer le focus
//    var focusIs;  
//    $('#determiner-focus input, #determiner-focus textarea').focus( function() { 
//        focusIs = $(this).attr('id');        
//        $('#resultat1').text(focusIs + ' a le focus');
//    });
    
    // Déterminer le focus et modifer le CSS du focus
    var focusIs;  
    $('#determiner-focus input, #determiner-focus textarea').focus( function() { 
        focusIs = '#' + $(this).attr('id');
        $('#resultat1').text(focusIs + ' a le focus');
        $(focusIs).css('background-color', '#afc');
    }); 
    $('#determiner-focus input, #determiner-focus textarea').blur( function() { 
        focusIs = '#' + $(this).attr('id');        
        $(focusIs).css('background-color', '#fff');
    });
    
    // Vider un formulaire
    $('#reset-form').click(ResetFormulaire);
    function ResetFormulaire() {
        $('#determiner-focus input, #determiner-focus textarea')
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .prop('checked', false)
                .prop('selected', false);
    }
    
    /*
     * Les tableaux (array)
     */
    // Fonction $.grep() - Rechercher des éléments dnas un array selon critères définis
    var tableau = ['Luca', 'Emma', 'Mathis', 'Jade', 'Léa', 'Enzo', 'Chloé', 'Nathan', 'Manon', 'Noah', 'Sarah ', 'Louis', 'Luna', 'Kylian', 'Clara', 'Ethan', 'Camille', 'Hugo', 'Lylou', 'Théo', 'Zoé', 'Yanis', 'Maélys'];
    var tableau2;
    
    $('#resultat1b').text('Données originales : ' + tableau.join(', '));
    
    $('#filtre1').click(function() {
        tableau2 = $.grep(tableau, function(elementToFind,index) {
        return (index > 4);
      });
    $('#resultat1c').text('Après le cinquième : ' + tableau2.join(', '));
    });
    
    $('#filtre2').click(function() {
        tableau2 = $.grep(tableau, function(elementToFind,index) {
            return (elementToFind !== 'Mathis' && elementToFind !== 'Hugo' && elementToFind !== 'Yanis');
        });
    $('#resultat1c').text('Différent de Mathis, Hugo et Yanis : ' + tableau2.join(', '));
    });
    
    $('#filtre3').click(function() {
      tableau2 = $.grep(tableau, function(elementToFind,index) {
        return (index > 4);
      }, true);
    $('#resultat1c').text('Avant le cinquième : ' + tableau2.join(', '));
    });

});