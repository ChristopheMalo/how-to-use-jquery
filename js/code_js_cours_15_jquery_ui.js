/* 
 * Code Javascript Cours 15 - jQuery UI
 * 
 * 
 */
$(function() {
   // Déplacer les éléments
   $('#drag-div, #content-drag img').draggable();
   
   // Redimensionner des éléments
   $('#contentresize').resizable();
   $( "#resizable" ).resizable();
});