/* 
 * Code Javascript Cours 05 - Insérer et modifier les éléments du DOM
 * 
 * 
 */
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

