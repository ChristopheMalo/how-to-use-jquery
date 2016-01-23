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
    
    // agrandissement et animation au survol
    $('#img03-vignette').mouseover(function() {
        $(this).fadeOut(1000);
        $('#img03-full').fadeIn(1000);
    });
    $('#img03-full').mouseout(function() {
        $(this).fadeOut(1000);
        $('#img03-vignette').fadeIn(1000);
    });
    
    // Galerie d'images
    $('.vignette').css('border','5px white solid');
    $('#galerie01 img:first').css('border','5px black solid');
    $('.vignette').click(function() {
        $('.vignette').css('border','5px white solid');
        $(this).css('border','5px black solid');
        
        // Sans fondu
//        var nom = $(this).attr('id');
//        $('#grand').attr('src',nom);
        
        
        // avec fondu
        var nom = $(this).attr('id');
        
        $('#full').fadeOut(400, function() {
            $('#full').attr('src', ('../images/cours_10/' + nom)).fadeIn(400); 
        });
        
    });  
});