/* 
 * Code Javascript TP 03 - Un jeu en jQuery
 * 
 * 
 */
$(function() {
 
    function deplace() {
        // Afficher et animer la voiture rouge
        $('#vr').animate({top: '-=600'}, 2500, 'linear', function(){
            var vrX = Math.floor(Math.random()*194)+70;
            var vrY = 400;
            $('#vr').css('top',vrY);
            $('#vr').css('left',vrX);
        });

        
        // Fonction de déplacement de la route
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