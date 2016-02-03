/* 
 * Code Javascript Cours 16 - Créer un plugin
 * 
 * 
 */
// Squelette d'un plugin
//jQuery.fn.nomMethode = function(param1, param2, param3) {
//  // Une ou plusieurs instructions JavaScript
//};

//$('p').nomMethode(5, 'abc', 10);

// Pour éviter les conflits avec d'autres bibliothèques
// Fonction anonyme
//(function($) {
//    $.fn.nomMethode = function(param)
//    {
//        this.each(function() { // Pour parcourir le ou les éléments retournés par le sélecteur
//            // Les instructions du plugin
//        });
//        return this;
//    };
//})(jQuery);


$(function() {
    // Utiliser le plugin changeText
   $('#action').click(function() {
       $('.grasItaliqueSouligne').changeText();
   }); 
   
   // Utiliser le plugin rebond
   $('#action2').click(function() {
       $('#ball').rebond(20, 100);
   });
});