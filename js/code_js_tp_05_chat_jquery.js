/* 
 * Code Javascript TP 05 - Un chat en jQuery
 * 
 * @AméliorationsPossibles
 *      Améliorer le système de raffraichissement du message - temps trop juste pour saisir le message     
 *      Permettre aux chatteurs d'utiliser un avatar graphique ;
 *      Autoriser des messages sur plusieurs lignes ;
 *      Améliorer la mise en forme des messages postés en affectant une couleur d'arrière-plan différente un message sur deux ;
 *      Définir plusieurs groupes de conversation (ici toutes les personnes qui affichent la page chat.htm partagent le même espace de conversation).
 * 
 * 
 */
$(function() {
    afficheConversation();
    
    $('#envoyer').click(function() {
        var pseudo = $('#pseudo').val();
        var message = $('#message').val();
        $.post('../files/tp_05/chat.php', {'pseudo':pseudo, 'message': message }, function() {
            afficheConversation;
        });
    });
    
    function afficheConversation() {
      $('#conversation').load('../files/tp_05/ac.html');
      $('#message').val('');
      $('#message').focus();
    }
    
    setInterval(afficheConversation, 4000);
});