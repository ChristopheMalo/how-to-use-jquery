/* 
 * Code Javascript TP 04 - Un jeu de collecte spatiale
 * 
 * 
 */
$(function() {
    var stopDetection = 0; // Détection des collisions

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
        
        stopDetection = 0;

        var cibleX = Math.floor(Math.random() * 500) + 20;   // Abscisse
        var cibleY = Math.floor(Math.random() * 300) + 20;   // Ordonnée
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
    
    
    // Gestion des collisions entre la soucoupe et les cibles
    function collisions() {
        
        posX = parseInt($('#soucoupe').css('left'));
        posY = parseInt($('#soucoupe').css('top'));
        
        if ($('#bon').css('display') === 'none') {
            
            cibleType = 'mauvais';
            cibleX = parseInt($('#mauvais').css('left'));
            cibleY = parseInt($('#mauvais').css('top'));
        
        } else  {
            
            cibleType = 'bon';
            cibleX = parseInt($('#bon').css('left'));
            cibleY = parseInt($('#bon').css('top'));
        
        }
        
        if ((cibleX > posX - 20) && (cibleX < (posX + 125 - 50 + 20)) && (cibleY > posY - 20) && (cibleY < (posY + 177 - 116 + 20)) && (stopDetection === 0)) {
            
            stopDetection = 1;
            
            if (cibleType === 'bon') {
            
                var nbBon = parseInt($('#info1').text()) + 1;
                $('#info1').text(nbBon);
                var score = parseInt($('#info3').text()) + 5;
                $('#info3').text(score);
                $('#bon').css('display', 'none');
            
            } else {
                
                var nbMauvais = parseInt($('#info2').text()) + 1;
                $('#info2').text(nbMauvais);
                var score = parseInt($('#info3').text()) - 5;
                $('#info3').text(score);
                $('#mauvais').css('display', 'none');
           
            }
        }
    }
    
    setInterval(afficheCibles, 2000);   // Affiche voitures et vaches aléatoirement
    setInterval(collisions, 200);       // Gérer les collisions

});