/* 
 * Code Javascript Cours 09 - Files d'attente et timer
 * 
 * 
 */
$(function() {
    /*
     * Files d'attente
     */
    $('#enchainer').click( function() {
        $('#files-attente img').animate({ 'border-width': '100'}, 1500 ).animate({ 'width': '-=50%'}, 1500);
    });  
    $('#nePasEnchainer').click( function() {
        $('#files-attente img').animate({ 'border-width': '100'}, { queue: false, duration: 1500 }).animate({ 'width': '-=100'}, 1500);
    }); 
    $('#executerEnMemeTemps').click( function() {
        $('#files-attente img').animate({ 'border-width': '100', 'width': '-=100' }, 1500);
    }); 
    $('#etatInitial').click( function() {
        $('#files-attente img').css({'border-width': '2px', width: '640'});
    });
    
    
    /*
     * Etat de la file d'attente
     */
    $('#droite').click( function() {
        $('img').animate({left: '+=50'}, 2000);
    });  
    $('#gauche').click( function() {
        $('img').animate({left: '-=50'}, 2000);
    });  
    $('#bas').click( function() {
        $('img').animate({top: '+=50'}, 2000);
    });  
    $('#haut').click( function() {
        $('img').animate({top: '-=50'}, 2000);
    });  
    $('#etatFile').click(function() {
        var n = $('img').queue();
        $('#infos').text('Nombre d\'animations dans la file d\'attente : ' + n.length);
    });
    
    
    /*
     * Manipuler la file d'attente
     */
    $('#ajouter').click( function() {
        $('#guitar01').toggle(5000)
                 .queue(function() { 
                    $('#guitar02').animate({left: '+=200'}, 'slow')
                                 .animate({top: '+=200'}, 'slow')
                                 .animate({left: '-=200'}, 'slow')
                                 .animate({top: '-=200'}, 'slow');
                    });
    });  
    $('#annuler').click( function() {
        $('#manipuler-file-attente img').clearQueue();
    });  
    $('#remplacer').click( function() {
        $('#guitar02').css('left', 200).css('top', 200);
        $('#guitar02').queue(function() {
                    $(this).animate({top: '-=200'}, 'slow')
                           .animate({top: '+=200', 'left': '-=200'}, 'slow')
                           .animate({top: '-=200'}, 'slow');
                    $(this).dequeue();
        });
    });  
    $('#retour').click( function() {
        $('#manipuler-file-attente img').queue(function() {
            alert('Animation terminée.');
            $(this).dequeue();
        });
    }); 
    
    
    /*
     * Répéter une animation sans fin
     */
    function bis() {
      $('#balle').animate({left: '+=200'}, 'slow')
                 .animate({top: '+=200'}, 'slow')
                 .animate({left: '-=200'}, 'slow')
                 .animate({top: '-=200'}, 'slow', bis);
    };
    bis();
    
    
    /*
     * Arrêter et reprendre une animation
     */
    $('#stop-start-anim img').animate({left: '+=500'}, 2000).animate({top: '+=300'}, 2000);
    $('#stopFin').click( function() {
        $('#stop-start-anim img').stop(false, true);
    });  
    $('#stopAnnuleFin').click( function() {
        $('#stop-start-anim img').stop(true, true);
    });  
    $('#stop').click( function() {
        $('#stop-start-anim img').stop(true, false);
    });  
    $('#reprise').click( function() {
        $('#stop-start-anim img').css('left', 0).css('top', 0);
        $('#stop-start-anim img').animate({left: '+=500'}, 2000).animate({top: '+=300'}, 2000);
    });
    
    
    /*
     * Mettre en place un timer
     */
    // Une horloge élémentaire
    function Horloge() {
        var myDate = new Date();
        var h = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
        $('#horlogeElementaire').text(h);
    }
    setInterval(Horloge, 1000);
    
    // Une animation sans fin avec set interval
    function bis02() {
      $('#balle02').animate({left: '+=200'}, 'slow')
                   .animate({top: '+=200'}, 'slow')
                   .animate({left: '-=200'}, 'slow')
                   .animate({top: '-=200'}, 'slow');
    };
    setInterval(bis02, 2400);
    
    // Test simple avec animate
    $('#form-geo').animate({'width': '300'}).animate({'height': '300'}).animate({'border-width': '20'});
  });