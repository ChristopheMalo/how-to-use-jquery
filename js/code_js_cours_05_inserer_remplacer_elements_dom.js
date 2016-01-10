/* 
 * Code Javascript Cours 05 - Insérer et modifier les éléments du DOM
 * 
 * 
 */
$(function() {
 
    /*
     * Insérer du contenu
     */
    // Ajout d'une espace et de trois astérisques à la suite de chaque titre <h2>
    $('h3').append(' ***');

    // Ajout de trois astérisques et d'une espace avant chaque titre <h2>
    $('h3').prepend('*** ');

    // Ajout d'une ligne de séparation horizontale avant le titre <h2> #trois
    $('#trois').before('<hr>');

    // Modifier les caracteristiques du hr
    $('hr').css('border-color', '#bbb');

    // insertion elements après balise selector
    // $(selector).after(things-to-add);
    $('hr').after('<p>Test insert after</p>');



    /*
     * Remplacer des éléments
     */
    // Remplacer hr par saut de ligne
    $('hr').replaceWith('<br>');

    // Remplacer h3 par des h4
    //$('h3').replaceWith('<h4>'); // Remplace simplement la balise, tout le contenu est perdu
    // La bonne methode
    $('h3').each(function() {
       var elementH3 = $(this);
       elementH3.replaceWith('<h4>' + elementH3.text() + '</h4>');
    });
    
    
    
    /*
     * Insérer des éléments
     */
    // Ajout d'un élément de liste à puces après le deuxième élément
    $('<li>Deuxième élément bis</li>').insertAfter($('li:nth-child(2)'));
    
    // Ajout d'une balise <hr> avant chaque titre <h4>
    $('<hr>').prependTo($('h4'));
    $('hr').css('border-color', '#bbb');
    
    // Juste pour l'exemple car HTML incorrect - Incohérence sémantique
    // Insère une puce dans une autre puce - avant le texte
    //$('<li>Deuxième élément ter</li>').prependTo($('li:nth-child(2)'));
    
    
    
    /*
     * Déplacer des éléments
     */
    // Déplacer élément pUn après un autre pDeux
    $('#pDeux').after($('#pUn'));
    
    // Déplacer élément pUn avant un autre pDeux (à la fin, après le texte et à l'intérieur de pDeux)
    // Sémantique incorrecte uniquement pour exemple
    // $('#pDeux').append($('#pUn'));
    
    // Déplacer élément pUn avant un autre pDeux
    //$('#pDeux').before($('#pUn'));
    
    // Déplacer élément pUn avant un autre pDeux (au début, avant le texte et à l'intérieur de pDeux)
    // Sémantique incorrecte uniquement pour exemple
    //$('#pDeux').prepend($('#pUn'));
    
    
    
    /*
     * Dupliquer des éléments
     */
    // Méthode possible : appendTo(), prependTo(), insertBefore() ou insertAfter()
    // Dupliquer (Cloner) pDeux et insérer avant pUn
    $('#pDeux').clone().insertBefore($('#pUn'));
    
    // Les descandants font parti du clonage - expemple -> liste à puce
    // Dupliquer devant le premier titre h4
    // $('ul').clone().insertBefore(($('h4:first')));
    
    // Création d'un sommaire (rapide sans liens)
    $('<h2 id="sommaire">Sommaire</h2>').insertBefore($('h4:first'));
    // Dupliquer tous les titres h4 et insérer dans le sommaire
    $('h4').clone().insertAfter('#sommaire');
    
    
    /*
     * Entourer des éléments
     */
    // Mettre en italique les li - 'entourer' les li des balises <i></i>
    //$('li').wrap('<i></i>');
    // Font en rouge, bold, italique et soulignée
    $('li').wrap('<font color="red"><b><i><u></u></i></b></font>');
    
    // wrapAll - Rassemble tous les p de la page dans un div unique
    $('p').wrapAll('<div id="wrapAll"></div>');
    // Appliquer un style
    $('#wrapAll').css({
                        'background-color'  : '#ccc',
                        'margin-bottom'     : '30px',
                        'padding'           : '10px'
                    });
    // console.log($('#wrapAll > ')); // debug
    // console.log($('#wrapAll > p:eq(0)')); // debug
    $('#wrapAll > p:eq(0)').wrapInner('<strong></strong>'); // Balise placée autour du texte à l'intérieur du p
});
