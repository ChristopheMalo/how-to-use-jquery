/* 
 * Code Javascript Cours 10 - Textes et images
 * 
 * 
 */
/*
 * Les chaines de caractères
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
    
    // Recherche et remplacement de texte
    $('#changeCodeImg').click(function() {
        $('#img01').replaceWith('<img id="img02" src="../images/cours_10/img02.jpg" alt="img02">');
    });
    
    /*
     * Les images
     */
    // Réaction au survol
    $('#img03').mouseover(function() {
        $(this).attr('src','../images/cours_10/img03.jpg');
    });
    $('#img03').mouseout(function() {
        $(this).attr('src','../images/cours_10/img03_vignette.jpg');
    });

});