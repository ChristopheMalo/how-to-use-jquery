/* 
 * Code Javascript Cours 12 - Premiers pas avec Ajax
 * 
 * 
 */
// Utilité d'Ajax : Mettre à jour une partie de la page et non toute la page


$(function() {
    // Charger un fichier
    $('#majPremier').click(function() {
        $('#premier').load('../files/cours_12/maj1.html', function() {
            console.log('La première zone a été mise à jour');
        });
    });

    $('#majDeuxieme').click(function() {
        $('#deuxieme').load('../files/cours_12/maj2.html', function() {
            console.log('La deuxième zone a été mise à jour');
        });
    });
    
    
    // Charger une partie d'un fichier
    $('#majPremierB').click(function() {
        $('#premier').load('../files/cours_12/maj1.html #modifMaj1b', function() {
            console.log('La première zone a été mise à jour avec une partie du fichier');
        });
    });
    
    
    // Passer des paramètres à un programme PHP
    // 1ère forme
    $('#action').click(function() {
        var param = 'l=' + $('#ref').val();
        console.log('param : ' + param);
        $('#r').load('../files/cours_12/proverbes.php', param);
    });
    
    // 2ème forme - en passant un objet en 2ème argument de la méthode load
    // Valeur passée par une requête http POST donc les données doivent être récupérées en POST
    // $('sel').load('http://www.url-site.com/page-test.php', { id:20, nom: 'Toto'});
    
    
    // Requêtes GET et POST
    // Fonction $.GET
    $('#action2').click(function() {
        $.get('../files/cours_12/proverbes.php?l=9', function(data) {
            console.log(data);
        });    
    });
    
    // Fonction $.POST - exemple
//    $.post('traiteFormulaire.php', { nom: 'Pierre34', heure: '2pm', post:'Un peu de texte récupéré dans un formulaire HTML et destiné à être posté dans un forum.' },
//        function(data) {
//            alert(data);
//    });

});