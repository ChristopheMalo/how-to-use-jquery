/* 
 * Code Javascript Cours 09 - Files d'attente et timer
 * 
 * 
 */
$(function() {
    /*
     * Files d'attente
     */
    $('#enchainer').click( function() {
        $('#files-attente img').animate({ 'border-width': '100'}, 1500 ).animate({ 'width': '-=50%'}, 1500);
    });  
    $('#nePasEnchainer').click( function() {
        $('#files-attente img').animate({ 'border-width': '100'}, { queue: false, duration: 1500 }).animate({ 'width': '-=100'}, 1500);
    }); 
    $('#executerEnMemeTemps').click( function() {
        $('#files-attente img').animate({ 'border-width': '100', 'width': '-=100' }, 1500);
    }); 
    $('#etatInitial').click( function() {
        $('#files-attente img').css({'border-width': '2px', width: '640'});
    });
    
    
    /*
     * Etat de la file d'attente
     */
    $('#droite').click( function() {
        $('img').animate({left: '+=50'}, 2000);
    });  
    $('#gauche').click( function() {
        $('img').animate({left: '-=50'}, 2000);
    });  
    $('#bas').click( function() {
        $('img').animate({top: '+=50'}, 2000);
    });  
    $('#haut').click( function() {
        $('img').animate({top: '-=50'}, 2000);
    });  
    $('#etatFile').click(function() {
        var n = $('img').queue();
        $('#infos').text('Nombre d\'animations dans la file d\'attente : ' + n.length);
    }); 
  });