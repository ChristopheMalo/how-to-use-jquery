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
    
    // La fonction $.map() - Recopier une partie ou la totalité d'un tableau
    var tableau3 = ['Luca', 'Emma', 'Mathis', 'Jade', 'Léa', 'Enzo', 'Chloé'];
    var tableau4;
    $('#resultat1d').text('Données originales : ' + tableau3.join(', '));
    $('#firstCopy').click(function() {
      tableau4 = $.map(tableau3, function(element,index) {
            return (element.toUpperCase());
      });
      $('#resultat1e').text('Prénoms en majuscules : ' + tableau4.join(', '));
    });
    $('#secondCopy').click(function() {
      tableau4 = $.map(tableau3, function(element,index) {
            return (index + ' : ' + element.toLowerCase());
      });
      $('#resultat1e').text('Index et prénoms en minuscules : ' + tableau4.join(', '));
    });
    
    // La fonction $.inArray() - Rechercher l'index d'un élément dans un tableau
    var tableau5 = ['element1', 'element2', 'element3', 'element4', 'element5'];
    //$.inArray('element5',tableau5, 4);
    $('#search-array-1').click(function() {
        // Sans indiquer la position
       var resultat = $.inArray('element1', tableau5);
       $('#resultat1f').text('Position element1 : ' + resultat); // retourne 0
    });
    $('#search-array-4').click(function() {
        // en indiquant une mauvaise position, la bonne position est tout de même retournée
       var resultat = $.inArray('element4', tableau5, 1);
       $('#resultat1f').text('Position element4 : ' + resultat); // retourne 3
    });
    $('#search-array-6').click(function() {
         // Sans indiquer la position et en indiquant un mauvais élément
       var resultat = $.inArray('element6', tableau5);
       $('#resultat1f').text('Position element6 : ' + resultat); // retourne -1
    });
    
    // La fonction $.merge() - Regrouper 2 tableaux dans un seul
    var tableau6 = ['Luca', 'Emma', 'Mathis', 'Jade', 'Léa', 'Enzo', 'Chloé'];
    var tableau7 = ['Clara', 'Ethan', 'Camille', 'Hugo', 'Lylou', 'Théo'];
    $('#afficheT6').text('Données originales tableau 6 : ' + tableau6.join(', '));
    $('#afficheT7').text('Données originales tableau 7 : ' + tableau7.join(', '));
    $('#group-array').click(function() {
       $.merge(tableau6, tableau7);
       var resultat = tableau6.join(', ');
       $('#resultat1g').text('Résultat groupé : ' + resultat);
    });
});