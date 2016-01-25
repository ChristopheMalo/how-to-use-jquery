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
       // console.log(font); // Debug
       $('#contenu p').css('font-family', font);
    });
    
    // Choix font paragraphe 1
    $('#font-p-first').change(function() {
       var font =  '"' + $('#font-p-first option:selected').val() + '"';
       $('#contenu p:first').css('font-family', font);
    });
    
    // Premier charactère de chaque paragraphe en gras
    $('#first-char-p').change(function() {
        var firstCharP = $('#first-char-p option:selected').val();
        if (firstCharP === 'Gras') {
            $('#contenu p').each(function() {
                var tableau = $(this).text().split('. ');
                if (tableau.length === 1) { }
                else {
                    var tableau2 = $.map(tableau, function(element, index) {
                        if (element[0] !== null) {
                            return '<b>' + (element[0]) + '</b>' + element.substring(1) + '. ';
                        }
                    });  
                    $(this).html(tableau2.join(''));
                }  
            });
        }

        if (firstCharP === 'Normal') {
            $('p').each(function() {
                var unPar = $(this).html();
                if (unPar.indexOf('<img') === -1) {
                    $(this).text($(this).text());
                }
            });
        }
    });
  
    // Mot en rouge        
    $('#couleurMot').click(function() {
        var mot = $('#mot').val();
        console.log('Le mot : ' + mot);
        
        var tableau = $('#contenu p:first').text().split(' ');
        
        var tableau2 = $.map(tableau, function(element, index) {
            if (index+1 == mot) {
                return ('<font color="red">' + element + '</font>');
            } else {
                return(element);
            }
        });  
        $('#contenu p:first').html(tableau2.join(' '));
    });
    
    // Bordure images
    $('#bordure-images').change(function() {
        var borderImage = $('#bordure-images option:selected').val();
        if (borderImage === 'Rien') {
            $('#contenu img').css('border', '2px solid white');
        }
        if (borderImage === 'Simple') {
            $('#contenu img').css('border', '2px solid red');
        }
        if (borderImage === 'Double') {
            $('#contenu img').css('border', '5px double red');
        }
    });
    
    // Reset de la page
    $('#raz').click(function() {
        location.reload();
    });



});