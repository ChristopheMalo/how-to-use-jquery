/* 
 * Code Javascript Cours 15 - jQuery UI
 * 
 * 
 */
$(function() {
   // Déplacer les éléments
   $('#drag-div, #content-drag img').draggable();
   
   // Redimensionner des éléments - utilisation d'un thème
   $('#contentresize').resizable();
   $( "#resizable" ).resizable();
   
   // Accordéon
   $('#accordeon').accordion();
});