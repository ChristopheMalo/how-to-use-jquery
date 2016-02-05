/* 
 * Code Javascript Cours 03 - Sélection d'éléments avancée
 * 
 * 
 */
/* Sélecteurs d'attributs  */
// Modifier couleur du border selon différentes façons de sélectionner
// style contient 1
//$('[style*="1"]').css('border-color', 'red');

// Style contient 4
//$('[style*="4"]').css('border-color', 'red');

// Title contient animal
//$('[title~="animal"]').css('border-color', 'red');

// src se termine par e.jpg
//$('[src$="e.jpg"]').css('border-color', 'green');

// style ne contient pas 15
//$('[border!="15"]').css('border-color', 'yellow');

// src commence par ch
$('[src^="../images/cours_03/ch"]').css('border-color', '#ccc');


/* Sélecteurs hiérarchiques */
// ul directement descandant de li
// $('li > ul').css('color', 'red');

// li précédés directement d'un li
//$('li + li').css('color', 'red');

// 1er li enfant
//$('li:first-child').css('color', 'red');

// 1er li
//$('li:first').css('color', 'red');

// Dernier li
//$('li:last').css('color', 'red');

// Dernier élément li enfant
//$('li:last-child').css('color', 'red');

// Element li unique de leur parent
//$('li:only-child').css('color', 'red'); // Aucune sélection

// 2ème enfant li
$('li:nth-child(2)').css('color', 'red');


/* Pseudo-sélecteurs d'éléments sélectionnés */
/* Attention, la page possède un premier paragraphe en haut de page */
// Elements p pairs
//$('p:even').css('color', 'red');

// Elements p impairs
//$('p:odd').css('color', 'red');

// Element p après le 2ème
//$('p:gt(1)').css('color', 'red');

// Element p d'index 4
//$('p:eq(3)').css('color', 'red');

// Element p avant le 4ème
$('p:lt(3)').css('color', 'red');


/* Sélecteur d'éléments particuliers */
// Caché un élément
$('#divHidden').hide();

// Sélection de tous les titres
//$(':header').css('color', 'red');

// Afficher un élément caché
$('#divHidden:hidden').show();

// Cacher tous les titres sauf le h1
//$(':header:not(h1)').hide();


/* Pseudo-sélecteurs spécifiques aux formulaires */
// Coloration de tous les éléments de saisie
$(':input').css('background', '#ddd');

// Coloration de password et de la font
$(':password').css('background', '#bbb');

// Focus au 1er champ du form puis change sa couleur de fond
document.forms[0].prenom.focus();
$(':focus').css('background', 'yellow');


/* Sélecteurs pour les tableaux */
// Ajoute une class bootstrap à un table
$('table').addClass('table table-bordered');

// Coloration de la dernière ligne
$('tr:last').css('background-color', '#c4c4ff');

// Coloration des cellules vides
$('td:empty').css('background-color', '#d43a1b');

// Coloration 1ère cellule
$('td:first').css('background-color', '#9999f8');

// Coloration des lignes paires
$('tr:even').css('background', '#ddd');

// exemples selecteurs tableaux
// Coloration des cellules paires
// $('td:even')

// Coloration des lignes d'index supérieur à 2
// $('tr:gt(1)')

// Coloration des lignes d'index supérieur à 1, et, dans le sous-ensemble correspondant, des lignes d'index inférieur à 5
// $('tr:gt(0):lt(4)')

// Coloration des cellules d'index supérieur à 5, et, dans le sous-ensemble correspondant, des cellules d'index inférieur à 11
// $('td:gt(4):lt(10)')

// Coloration de toutes les lignes à l'exception de la dernière
// $('tr:not(tr:last)')


/* Parcourir les éléments sélectionnés et remplacer */
// ici les images (img) avec la classe img
$(function() {
    $('img.img').each(function(index){
        this.src = '../images/cours_03/2/animal' + (index+1) + '.jpg';
    });  
});


/* Conversion variable JS en objet jQuery */
var varJs = 'Texte variable javascript transformé en objet jQuery'; // Création d'une variable js en affectant un texte
var varJq = $(varJs); // Conversion d'un objet jQuery
console.log(varJq);
console.log('Objet jQuery : ' + varJq);


/* Conversion objet jQuery en élément DOM  */
var imgDocs = $('img').get();
console.log(imgDocs);
console.log('Img index 2 : ' + imgDocs[2]);
console.log(imgDocs[2]);