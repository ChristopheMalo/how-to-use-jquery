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

    
});