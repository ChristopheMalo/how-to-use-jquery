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