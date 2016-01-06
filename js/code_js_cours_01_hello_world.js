/* 
 * Code Javascript Cours 01 - Premier pas
 * 
 * 
 */
// Utiliser jQUery après le chargement complet du DOM
jQuery(document).ready(function() {
    // Le DOM est définie
    // La feuille de style est chargée
    // Code
});

// OU

$(document).ready(function() {
    // Le DOM est définie
    // La feuille de style est chargée
    // Code
});

// OU
// Instruction retenue - la plus synthetique - Les 3 instructions sont identiques
$(function() {
    // Le DOM est définie
    // La feuille de style est chargée
    // Code
    $('#txtJQuery').html('Texte défini en jQuery'); // Utilisation de la methode HTML pour modifier une balise
});