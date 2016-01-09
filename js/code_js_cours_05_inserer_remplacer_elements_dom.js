/* 
 * Code Javascript Cours 05 - Insérer et modifier les éléments du DOM
 * 
 * 
 */
/*
 * Insérer du contenu
 */
// Ajout d'une espace et de trois astérisques à la suite de chaque titre <h2>
$('h2').append(' ***');

// Ajout de trois astérisques et d'une espace avant chaque titre <h2>
$('h2').prepend('*** ');

// Ajout d'une ligne de séparation horizontale avant le titre <h2> #trois
$('#trois').before('<hr>');

// Modifier les caracteristiques du hr
$('hr').css('border-color', '#bbb');

// insertion elements après balise selector
// $(selector).after(things-to-add);
$('hr').after('<p>Test insert after</p>');