/* 
 * Code Javascript Cours 06 - Base de la gestion évènementielle
 * 
 * 
 */
$(function() {
    console.log('Le DOM est chargé'); // pour le test de chargement avec load
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
    
    
    /*
     * Le clavier
     */
    // keydown / keyup
    $('#resultat2').keydown(function(){
      $('#flashWhite').css('background-color', 'green');
    });
    $('#resultat2').keyup(function(){
        $('#flashWhite').css('background-color', 'white');
    });
    
    // Déterminer le caractère
    $('#saisie').keypress(function(e) {
        $('#keycodeSaisi').text(e.which);  //keyCode
      
        var c = String.fromCharCode(e.which); // le caractère
        $('#caractereSaisi').text(c);
    });
    
    
    /*
     * Méthodes évènementielles relatives aux éléments
     */
    // focus() - blur
    $('.f').focus(function() {
      $('#resultat3').text($(this).attr('id'));
    });
    $('.f').blur(function() {
      $('#resultat4').text($(this).attr('id'));
    });
    
    // focusin()- focusout()
    $('fieldset').focusin(function() {
      $('#resultat5').text($(this).attr('id'));
    });
    $('fieldset').focusout(function() {
      $('#resultat6').text($(this).attr('id'));
    });
    
    // resize() - window
    $(window).resize(function() {
        var taille = 'Taille de la fenêtre : ' + $(window).width() + 'px x ' + $(window).height() + 'px';
        $('#resultat7').text(taille);
        console.log(taille);
    });
    
    // change()
    $('select').change(function() {
        $('#resultat8').text('La sélection : ' + $(this).val() + '.');
    });
    
    /*
     * Les pages - Load
     */
    // test de chargement
    $(window).load(function() {
        console.log('La page est entièrement chargée');
    });
//    $('#imgToClick').load(function() {
//        alert(this.width + ' x ' + this.height);
//    });
//    $(window).unload(function() {
//        alert('alerte - Changement de page');
//    });
    
});