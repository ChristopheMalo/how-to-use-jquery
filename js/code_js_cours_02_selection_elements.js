/* 
 * Code Javascript Cours 02 - Sélection d'éléments
 * 
 * 
 */
// Différents exemples de sélection
// Sélection des balises ul
console.log('Balises ul : ' + $('ul').length);
console.log($('ul'));

console.log('\n');

// Sélection des liens a
console.log('Balise a : ' + $('a').length);
console.log($('a'));

console.log('\n');

// Sélection ul de classe bleu
console.log('Balise ul class bleu : ' + $('ul.bleu').length);
console.log($('ul.bleu'));

console.log('\n');

// Selection li impair
console.log('Balises li de classe impair : '+ $('li[class="impair"]').length);
console.log($('li[class="impair"]'));

console.log('\n');

// Sélection de body
console.log('Balise body : '+ $('body').length);
console.log($('body'));

console.log('\n');

// Selection 2ème li de la page
console.log($('li')[1]);


/* Application d'une méthode (html) après sélection */
$('#title-exemple').html('Exemple avec texte en jQuery');


/* Fonction de rappel - Callback */
// Fonction de rappel appliquée aux éléments de classe rouge
// Disparition progressive puis réapparition progressive
$(function() {
   $('.rouge').fadeOut('slow', function() {
      $(this).fadeIn('slow'); 
   }); 
});


/* Chainage de méthode */
$('#title-exemple').css('font-size', '3em').css('color', '#ddd');