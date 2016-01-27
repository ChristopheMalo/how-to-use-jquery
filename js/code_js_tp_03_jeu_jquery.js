/* 
 * Code Javascript TP 03 - Un jeu en jQuery
 * 
 * 
 */
$(function() {
 
    function deplace() {
        // Afficher et animer la voiture rouge
        $('#vr').animate({top: '-=600'}, 2500, 'linear', function() {
            var vrX = Math.floor(Math.random()*194)+70;
            var vrY = 400;
            $('#vr').css('top',vrY);
            $('#vr').css('left',vrX);
        });
         
        // Fonction de déplacement de la route
        $('.fond').animate( {top: '-=360' }, 1000, 'linear', function(){
            $('.fond').css('top', 0);
            deplace();
        });
    };
    
    // Déplacer la voiture jaune
    $(document).keydown(function(e){
        if (e.which === 39) {
            vjX = parseInt($('#vj').css('left'));
            
            if (vjX < 280) {
                $('#vj').css('left', vjX + 30);
            }
        }
        
        if (e.which === 37) {
            vjX = parseInt($('#vj').css('left'));
          
            if (vjX > 70) {
                $('#vj').css('left', vjX - 30);
            }
        }
    });
    
    
    deplace(); // Appel de la fonction pour le déplacement de la route et de la voiture rouge
    
});