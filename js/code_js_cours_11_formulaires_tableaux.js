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

});