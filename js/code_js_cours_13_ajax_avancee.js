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
    
    
    // CHarger un fichier JSON
    $('#charger').click(function() {
        $.getJSON('../files/cours_13/file.json', function(donnees) {
            $('#r').html('<p><b>Nom</b> : ' + donnees.nom + '</p>');
            $('#r').append('<p><b>Age</b> : ' + donnees.age + '</p>');
            $('#r').append('<p><b>Ville</b> : ' + donnees.ville + '</p>');
            $('#r').append('<p><b>Domaine de compétences</b> : ' + donnees.domaine + '</p>');
        });
    });


});