/* 
 * Code Javascript TP 02 - Mise en forme d'une page web
 * en utilisant bootstrap - en complément du TP
 * 
 * 
 */
$(function() {
   // Controle de la couleur de fond
   $('#couleur-fond').change(function() {
      var couleurFond = $('#couleur-fond option:selected').val();
      $('#contenu').css('background-color', couleurFond);
   });
   
   // Controle aspect texte 1er paragraphe
   $('#texte').change(function() {
       var texte = $('#texte option:selected').val();
       if (texte === 'Gras') {
           $('#contenu p').css('font-weight', 'bold');
       }
       if (texte === 'Italique') {
           $('#contenu p').css('font-style', 'italic');
       }
       if (texte === 'Souligne') {
          $('#contenu p').css('text-decoration', 'underline');
       }
       if (texte === 'Normal') {
           $('#contenu p').css('font-weight', 'normal');
           $('#contenu p').css('font-style', 'normal');
           $('#contenu p').css('text-decoration', 'none');
       }
   });
   
   // Choix de la font
    $('#font').change(function() {
       var font = '"' + $('#font option:selected').val() + '"';
       console.log(font);
       $('#contenu p').css('font-family', font);
    });
});