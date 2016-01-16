/* 
 * Code Javascript Cours 08 - Animations et effets
 * 
 * 
 */
/*
 * Apparition et disparition
 */
$(function() {
    $('td').css('text-align','center'); // Centrer le texte dans la colonne
    
    $('#affiche').click(function() {
        $('tr:even').show('slow');
    } ); 
    $('#cache').click(function() {
        $('tr:even').hide(1000);
    });
    
    // en cascade
    $('#affiche2').click(function() {
        $('img').first().show('slow', function showNextOne() {
            $(this).next('img').show('slow', showNextOne);
        });    
    });
    $('#cache2').click(function() {
        $('img').first().hide('slow', function hideNextOne() {
            $(this).next('img').hide('slow', hideNextOne);
        });    
    });
    
    
    /*
     * Fondu enchaîné
     */
    // Apparition / Disparition
    // $('sel').fadeIn(1200,'linear');
    // $('sel').fadeOut(1000,'swing');
    $('#affiche3').click(function() {
        $('.img2').first().fadeIn('slow', function showNextOne() {
            $(this).next('.img2').fadeIn('slow', showNextOne);
        });    
    });
    $('#cache3').click(function() {
        $('.img2').first().fadeOut('slow', function hideNextOne() {
            $(this).next('.img2').fadeOut('slow', hideNextOne);
        });    
    });
    
    // Modification de l'opacité
    $('#fadeToDown').click(function() {
        $('.img3').fadeTo(1000, 0.4);
    });
    $('#fadeToUp').click(function() {
        $('.img3').fadeTo(1000, 1);
    });
    
    // Ebauche de diaporama
    $('#startDiapo').click(function() {
        $('.img4').first().fadeOut(2000, function nextImg() {
            $(this).next('.img4').fadeOut(2000, nextImg);
        }); 
    });
    
    
    
    /*
     * Aller plus loin
     */
    // Déplier / Replier des éléments
    // slideDown(), slideup() et slideToggle()
    
    // Définir une animation personnalisée avec animate()
    // Syntaxe 1
//    $('sel').animate({ prop1: val1, prop2: val2, prop3: val3, etc. }, durée, modèle, function() {
//        //Une ou plusieurs instructions
//    });
    // Syntaxe 2
//    $('sel').animate({ prop1: val1, prop2: val2, prop3: val3, etc. }, {options});

    // delay
    $('#afficheMessage').click(function() {
        $('#message').fadeIn('slow').delay(2000).fadeOut('slow');
    });
    
    // Désactive toutes les animations
    $('.stopAnim').click(function() {
        jQuery.fx.off = true;
    });
    // active toutes les animations
    $('.execAnim').click(function() {
        jQuery.fx.off = false;
    });
    
});