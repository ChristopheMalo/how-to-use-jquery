/* 
 * Code Javascript TP 03 - Un jeu en jQuery
 * 
 * 
 */
$(function() {
    // Fonction de déplacement de la route
    function deplace() {
        $('.fond').animate({
            top: '-=360'
        },
        1000,
        'linear',
        function(){
            $('.fond').css('top', 0);
            deplace();
        });
    }
    
    deplace(); // Déplacement de la route
});