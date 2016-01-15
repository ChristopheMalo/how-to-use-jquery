/* 
 * Code Javascript Cours 07 - Gestion évènementielle avancée
 * 
 * 
 */
$(function() {
    /*
     * Une méthode pour gérer plusieurs évènements
     */
    // $('img').on('mouseenter mousemove', function() { … })
    // pour remplacer les 2 instructions :
    // $('img').mouseenter(function() { … }
    // $('img').mousemove(function() { … }
    
    
    /*
     * Plusieurs méthodes en une seule instruction
     */ 
    // $('img.grand').on({mouseenter:traitement1, mousemove:traitement2});
    // pour remplacer :
    // $('img.grand').mouseenter(traitement1);
    // $('img.grand').mousemove(traitement2);
    
    
    /*
     * Désactiver une méthode de gestion évèmentielle
     */
    function traitement() {
      console.log('Image cliquée');
    }  
    $('#activer').on('click', function() {
      $('#imageClick').click(traitement);
    });
    $('#desactiver').on('click', function() {
      $('#imageClick').off('click', traitement);
    });
    
    
    /*
     * Étiqueter plusieurs méthodes événementielles
     */
    // Façon 1
    // Définir une fonction
    // function actions() {
            // Insérer les instructions de traitement appropriées
    //  }
    // puis appeler la fonction avec l'une des 2 instructions :
    // $('img').mouseenter(actions);
    // OU
    // $('img').on('mouseenter', actions);
    // Enfin supprimer la méthode :
    // $('img').off('mouseenter', actions);
    
    // Façon 2
    // Affecter un namespace (ici depanPC aux méthodes évènementielles
    // Utili lors de 'lutilisation ou developpement de plug-ins
    // $('img').on('mouseenter.depanPC', function() { //traitement });
    // $('img').on('mouseleave.depanPC', function() { //traitement });
    // $('img').on('mousemove.depanPC', function() { //traitement });
    // Supprimer une méthode :
    // $('img').off('mouseleave.depanPC');
    // Supprimer toutes les méthodes en 1 seule fois :
    // $('img').off('.depanPC');
    // Supprimer toutes les méthodes (appliquées aux balises img) et liées à 2 espaces de noms (namespace)
    // $('img').off('click.depanPC.depanMAC');
    // ou appliquées aux balises a
    // $('a').off('.depanPC.depanMAC');
    
    
    /*
     * gestion évènementielle unique
     */
    // Prise ne compte du 1er clic, les autres seront ignorés
    $('#imageOneClick').one('click', function() {
      $('#message').text('Tu as cliqué sur l\'image. Désormais, Tu ne peux plus.').fadeIn(1000).fadeOut(5000);
    });

    
    /*
     * Déclenchement d'évènements
     */
    // évènements déclenchables avec trigger()
    // blur, change, click, dblclick, error, focus, keydown, keypress, keyup, select et submit
    // 
    // évènements pas déclenchables :
    // load, mousedown, mouseout, mouseover, mousemove, mouseup, resize et unload
    // 
    // Plusieurs paramètres passés à trigger() : $(selecteur).trigger('evenement', ['param1', 'param2', 'param3', 'etc.']);
    // 
    // Exemple simple
//    $('#imageTrigger').click(function() {
//        $('#message2').text('L\'image a été cliquée.').fadeIn(1000).fadeOut(1000);
//    });
//    $('button').click(function() {
//        $('#imageTrigger').trigger('click'); // Simule le click sur l'image et affiche le message ci-dessus
//    });
    
    // Exemple avec message personnalisé
    $('#imageTrigger').click(function(event,texte) {
        if (texte === undefined)
            texte = "par vous";
        $('#message2').text('L\'image a été cliquée ' + texte).fadeIn(1000).fadeOut(1000);
    });
    $('#clicTrigger').click(function() {
        $('#imageTrigger').trigger('click', 'par jQuery'); // Simule le click sur l'image et affiche le message ci-dessus - personnalisé
    });
    
    
    /*
     * Créer des évènements personnalisés
     */
    $('#bonjour').on('bonjour_jquery', function() {
        console.log('jQuery te dit bonjour !');
    });
    $('#bonjour').click(function() {
        $('#bonjour').trigger('bonjour_jquery');
    });
    
    // En passant des paramètres - ici un prénom
    $('#bonjour2').on('bonjour_jquery', function(event, param) {
        console.log(param + ', jQuery te dit bonjour !');
    });
    $('#bonjour2').click(function() {
        $('#bonjour2').trigger('bonjour_jquery', 'Christophe');
    });
    
    
    /*
     * Délégation d'évènements
     */
    $('#master').on('click', '.deleg', function(){
        $(this).after('<div class="deleg">Ce &lt;div&gt; a les mêmes caractéristiques que son parent</div>');
    });
    
    // Stopper la délégation
    $('#suppr').on('click', function() {
        $('#master').off('click','.deleg');
    });
});