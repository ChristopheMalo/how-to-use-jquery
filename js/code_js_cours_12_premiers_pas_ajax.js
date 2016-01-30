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
});