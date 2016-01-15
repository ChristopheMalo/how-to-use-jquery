/* 
 * Code Javascript Cours 08 - Animations et effets
 * 
 * 
 */
/*
 * Apparition et disparition
 */
$(function() {
    $('td').css('text-align','center'); // Centrer le texte dans la colonne
    
    $('#affiche').click(function() {
        $('tr:even').show('slow');
    } ); 
    $('#cache').click(function() {
        $('tr:even').hide(1000);
    });
    
    // en cascade
    $('#affiche2').click(function() {
        $('img').first().show('slow', function showNextOne() {
            $(this).next('img').show('slow', showNextOne);
        });    
    });
    $('#cache2').click(function() {
        $('img').first().hide('slow', function hideNextOne() {
            $(this).next('img').hide('slow', hideNextOne);
        });    
    });
});