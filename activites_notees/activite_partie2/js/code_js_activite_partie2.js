/**
 * Code jQuery activité partie 2
 * Créez un générateur de formulaires
 * 
 * Intégration de Bootstrap dans le générateur
 * Choix du formulaire de base - Orientation simple
 * On peut imaginer la possibilité de modifier le style d'orientation du formulaire (inline, horizontale etc.)
 * On peut également imaginer la possibilité de choisir le style du formulaire (default, info, etc.)
 * 
 * Dans cet exercice de base, il faut suivre un parcours hierarchique de construction :
 *      label puis champ,
 *      label puis champ etc.
 *      et terminer par le bouton.
 * On peut alors imaginer choisir la destination des champs par exemple
 * On peut également développer la possibilité de réorganiser l'ordre des form-group
 * 
 * À ce stade du développement aucun contrôle de saisie de l'utilisateur n'est effectué.
 * 
 * Cours jQuery OpenClassrooms
 * Adaptation Christophe Malo
 *
 * @project         jQuery
 * @namefile        code_js_activite_partie2.js
 * @fileversion     1.0.0
 * @jqueryversion   2.2.0
 * @author          Christophe Malo
 * @copyright       2016 by the author & openclassrooms
 * @license         no license - free to use - just link to my github - Thanks :)
 * @mygithub        https://github.com/ChristopheMalo    
*/
$(function() {
    /* Construire les éléments du formulaire */
    // Le label
    $('button:eq(0)').click(function() { // Clic sur le 1er bouton
        // Affiche le label à créer
        $('#construct-form').html(
                '<div id="label">' +
                    '<div class="form-group">' +
                        '<label class="control-label">' +
                            'Texte du label :' +
                        '</label>' +
                        '<input id="contentText" type="text" class="form-control">' +
                    '</div>' +
                    '<button id="validButton" class="btn btn-info push-right">ok</button>' +
                '</div>');
        
        $('#validButton').click(function() {
            // Construire l'élément en récupérant la variable de l'input
            var contentLabel = '<div class="form-group"><label>' + $('#contentText').val() + '</label></div>';
            
            // Générer le contenu dans le conteneur gauche
            $('#gauche form').append(contentLabel);
            
            // Supprimer le contenu dans le conteneur droit
            $('#construct-form #label').remove();
        });
    });
    
    // La zone de texte - Le cheminement de la méthode est identique à la création du label
    $('button:eq(1)').click(function() {
        $('#construct-form').html(
                '<div id="input">' +
                    '<div class="form-group">' +
                        '<label class="control-label">' +
                            'ID de la zone de texte :' +
                        '</label>' +
                        '<input id="contentText" type="text" class="form-control">' +
                    '</div>' +
                    '<button id="validButton" class="btn btn-info push-right">ok</button>' +
                '</div>');
        
        $('#validButton').click(function() {
            var contentInput = '<input class="form-control" id="' + $('#contentText').val() + '" type="text">';
            $('#gauche form div.form-group').last().append(contentInput);
            $('#construct-form #input').remove();
        });
    });
    
    // Le button - Le cheminement de la méthode est identique à la création du label et de la zone de texte
    $('button:eq(2)').click(function() {
       $('#construct-form').html(
                '<div id="button">' +
                    '<div class="form-group">' +
                        '<label class="control-label">' +
                            'Texte du bouton :' +
                        '</label>' +
                        '<input id="contentText" type="text" class="form-control">' +
                    '</div>' +
                    '<button id="validButton" class="btn btn-info push-right">ok</button>' +
                '</div>');
        
        $('#validButton').click(function() {
            var contentButton = '<button type="submit" class="btn btn-default">' + $('#contentText').val() + '</button>';
            $('#gauche form').last().append(contentButton);
            $('#construct-form #button').remove();
        });
    });
});
