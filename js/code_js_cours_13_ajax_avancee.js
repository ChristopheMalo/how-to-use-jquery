/* 
 * Code Javascript Cours 13 - Plus loin avec Ajax
 * 
 * 
 */
$(function() {
    // Charger un script avec $.getScript
    //$.getScript('adresse');
    //OU
    //$.getScript('adresse', function() {
            // Une ou plusieurs instructions
    //});
    
    
    // Charger un fichier JSON
    $('#charger').click(function() {
        $.getJSON('../files/cours_13/file.json', function(donnees) {
            $('#r').html('<p><b>Nom</b> : ' + donnees.nom + '</p>');
            $('#r').append('<p><b>Age</b> : ' + donnees.age + '</p>');
            $('#r').append('<p><b>Ville</b> : ' + donnees.ville + '</p>');
            $('#r').append('<p><b>Domaine de compétences</b> : ' + donnees.domaine + '</p>');
        });
    });
    
    
    // La fonction $.ajax()
    $('#action').click(function() {
        $.ajax({
            type: 'GET',
            url: '../files/cours_12/proverbes.php?l=7',
            timeout: 3000,
            success: function(data) {
                console.log(data); },
            error: function() {
                console.log('La requête n\'a pas abouti'); }
        });    
    }); 
    
    
    // Attention depuis la version 1.8 les méthodes .ajax sont attachés uniquement à document
    // L'exemple OC doit donc être adapté
    // Évènements associés à une requête Ajax
    $('#action2').click(function() {
        // À partir de la version 1.8
        $(document).ajaxStart(function() {
            $('#message').html('Méthode ajaxStart exécutée<br>'); 
        });
        $(document).ajaxSend(function(event, request, options) {
            $('#message').append('Méthode ajaxSend exécutée, ');
            $('#message').append('nom du fichier : ' + options.url + '<br>'); 
        });
        $(document).ajaxStop(function() {
            $('#message').append('Méthode ajaxStop exécutée<br>');
        });
        $(document).ajaxSuccess(function(event, request, options) {
            $('#message').append('Méthode ajaxSuccess exécutée<br>');
        });
        $(document).ajaxComplete(function(event, request, options) {
            $('#message').append('Méthode ajaxComplete exécutée<br>');
        });
        $(document).ajaxError(function(event, request, options, erreur) {
            $('#message').append('Méthode ajaxError exécutée, ');
            $('#message').append('erreur : ' + erreur + '<br>');
        });
        $('#donnees').load('../files/cours_13/file.html');
        
        // Avant la version 1.8
//        $('#message').ajaxStart(function() {
//            $(this).html('Méthode ajaxStart exécutée<br>');
//        });
//        $('#message').ajaxSend(function(event, request, options) {
//            $(this).append('Méthode ajaxSend exécutée, ');
//            $(this).append('nom du fichier : ' + options.url + '<br>');
//        });
//        $('#message').ajaxStop(function() {
//            $(this).append('Méthode ajaxStop exécutée<br>');
//        });
//        $('#message').ajaxSuccess(function(event, request, options) {
//            $(this).append('Méthode ajaxSuccess exécutée<br>');
//        });
//        $('#message').ajaxComplete(function(event, request, options) {
//            $(this).append('Méthode ajaxComplete exécutée<br>');
//        });
//        $('#message').ajaxError(function(event, request, options, erreur) {
//            $(this).append('Méthode ajaxError exécutée, ');
//            $(this).append('erreur : ' + erreur + '<br>');
//        });
//        $('#donnees').load('../files/cours_13/file.html');
    });  



});