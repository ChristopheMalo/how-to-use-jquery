/* 
 * Code Javascript Cours 06 - Base de la gestion évènementielle
 * 
 * 
 */
$(function() {
    /*
     * La souris
     */
    /* Déplacer une image aléatoirement en cliquant dessus */
    // Trouver la position initiale de l'image
    // console.log($('#imgToMove').offset());

    // Mémoriser les dimensions de la fenêtre dans 2 variables
    // 180 correspond à largeur de l'image et à sa hauteur
    // Permet ainsi d'afficher entièrement l'image à l'écran
    var largeur = ($(window).width()) - 180; 
    var hauteur = ($(window).height()) - 180;

    // Afficher la première image en (43, 273)
    var p = $('#imgToMove').offset();
    p.top=273;
    p.left=43;
    $('#imgToMove').offset(p);
    
    // Gérer le clic et déplacer l'image
    $("#imgToMove").click(function() {
      x = Math.floor(Math.random()*largeur);
      y = Math.floor(Math.random()*hauteur);
      var p = $('#imgToMove').offset();
      p.top = y;
      p.left = x;
      $('#imgToMove').offset(p);
    });
    
    
    /* Détecter le scroll de souris */
    $('div').scroll(function() {
        console.log('Utilisation de la roulette dans la balise <div>');
    });
    $(window).scroll(function() {
        console.log('Utilisation de la roulette dans le document');
    });
    
    
    /* Détecter le bouton de la souris utilisé */
    $('#imgToClick').mousedown(function(e){
        $('#resultat').html('Événement : ' + e.type + '. Bouton pressé : ' +  e.which );
    });
});