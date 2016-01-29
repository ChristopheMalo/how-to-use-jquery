/* 
 * Code Javascript TP 04 - Un jeu de collecte spatiale
 * 
 * 
 */
$(function() {
    // Déplacement de la soucoupe sur l'aire de jeu...
    $(document).keydown(function(e){
        // ...vers la droite
        if (e.which === 39) {
            posX = parseInt($('#soucoupe').css('left'));
            if (posX < 460) {
                $('#soucoupe').css('left', posX+30);
            }
        }
        
        // ...vers la gauche
        if (e.which === 37) {
            posX = parseInt($('#soucoupe').css('left'));
            if (posX > 20) {
                $('#soucoupe').css('left', posX-30);
            }
        }
        
        // ...vers le bas
        if (e.which === 40) {
            posY = parseInt($('#soucoupe').css('top'));
            if (posY < 230) {
                $('#soucoupe').css('top', posY+30);
            }
        }
        
        // ...vers le haut
        if (e.which === 38) {
            posY = parseInt($('#soucoupe').css('top'));
            if (posY > 20) {
                $('#soucoupe').css('top', posY-30);
            }
        } 
        
        // ...vers le haut et la gauche
        if (e.which === 36) {
            posX = parseInt($('#soucoupe').css('left'));
            posY = parseInt($('#soucoupe').css('top'));
            if ((posY > 20) && (posX > 20)) {
                $('#soucoupe').css('left', posX-30).css('top', posY-30);
            }
        }
        
        // ...vers le haut et la droite
        if (e.which === 33) {
            posX = parseInt($('#soucoupe').css('left'));
            posY = parseInt($('#soucoupe').css('top'));
            if ((posY > 20) && (posX < 460)) {
                $('#soucoupe').css('left', posX+30).css('top', posY-30);
            }
        }
        
        // ...vers le bas et la gauche
        if (e.which === 35) {
            posX = parseInt($('#soucoupe').css('left'));
            posY = parseInt($('#soucoupe').css('top'));
            if ((posX > 20) && (posY < 230)) {
                $('#soucoupe').css('left', posX-30).css('top', posY+30);
            }
        }
        
        // ...vers le bas et la droite
        if (e.which === 34) {
            posX = parseInt($('#soucoupe').css('left'));
            posY = parseInt($('#soucoupe').css('top'));
            if ((posY < 230) && (posX < 460)) {
                $('#soucoupe').css('left', posX+30).css('top', posY+30);
            }
        }
    });
    
    
    // Fonction pour afficher vache et voiture alétoirement
    function afficheCibles() {

        var cibleX = Math.floor(Math.random() * 500)+ 20;   // Abscisse
        var cibleY = Math.floor(Math.random() * 300)+ 20;   // Ordonnée
        var cibleType = Math.floor(Math.random() * 2);      // Type -> Vache ou voiture

        if (cibleType === 0) {

            $('#bon').css('top', cibleY).css('left', cibleX);
            $('#bon').show();
            $('#mauvais').css('display','none');

        } else {

            $('#mauvais').css('top', cibleY).css('left', cibleX);
            $('#mauvais').show();
            $('#bon').css('display','none');

        }
    }
    
    
    setInterval(afficheCibles, 2000); // Affiche voitures et vaches aléatoirement
 
});