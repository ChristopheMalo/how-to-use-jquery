/* 
 * Code Javascript Cours 10 - Textes et images
 * 
 * 
 */
/*
 * Las chaines de caractères
 */
// Supprimer des espaces dans une chaine
$(function() {
    $('#action').click(function() {
      var texte = $('#texte').val();
      $('#resultat').html('Texte original           : "' + texte + '"' + 
                      '<br>Après la fonction trim() : "' + $.trim(texte) + '"');
    });  
});