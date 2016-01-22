/* 
 * Code Javascript Cours 10 - Textes et images
 * 
 * 
 */
/*
 * Las chaines de caractères
 */
$(function() {
    // Supprimer des espaces dans une chaine
    $('#action').click(function() {
      var texte = $('#texte').val();
      $('#resultat').html('Texte original           : "' + texte + '"' + 
                      '<br>Après la fonction trim() : "' + $.trim(texte) + '"');
    });
    
    // Position d'un caractère dans une chaine
    $('#action2').click(function() {
        var texte = $('#texte2').val();
        var charPosition = $('#position').val();
        var resultat = 'Le caractère en position ' + charPosition + ' est un "' + texte.charAt(charPosition) + '"';
        $('#resultat2').text(resultat);
    });  
});