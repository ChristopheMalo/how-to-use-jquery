/* 
 * Code Javascript Cours 11 - Les formulaires
 * 
 * 
 */
/*
 * Les formulaires
 */
$(function() {
    // Donner le focus
    $('#focus').focus();
    
    // Déterminer le focus
    var focusIs;  
    $('#determiner-focus input, #determiner-focus textarea').focus( function() { 
        focusIs = $(this).attr('id');        
        $('#resultat1').text(focusIs + ' a le focus');
    }); 
});