/**
 * Code jQuery activité partie 4
 * Simplifiez le générateur avec des messages d'aide
 * 
 * Intégration de Bootstrap dans le générateur à partir de l'activité 2
 * Pour cette nouvelle activité, j'ai utilisé le code développer lors de l'activité partie 2
 * 
 * Dans l'activité 2 et 3 j'ai utilisé html(), last() et append() à la place de after() et append()
 * J'utilise donc ici de nouveau html(), last() et append()
 * 
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
 * Ce n'est pas demandé dans l'exercice, mais sur une version pro je travaille la mise en place de fonction
 * 
 * Contrôle de saisie de l'utilisateur : L'utilisateur doit saisir des caractères, pas de chaine vide
 * 
 * Pour une meilleure comprehension, commentaire du code uniquement sur la partie création label
 * 
 * Cours jQuery OpenClassrooms
 * Adaptation Christophe Malo
 *
 * @project         jQuery
 * @namefile        code_js_activite_partie4.js
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
                    '<button id="validButton" class="btn btn-info">ok</button>' +
                    '<button id="annuler" class="btn btn-warning">annuler</button>' +
                '</div>').hide().fadeIn(); // Injecter le html en le cachant et lui affecter le fadeIn
        
        // Insérer un texte d'aide derrière le bloc champ en Ajax dans le container help
        $('#help').load('files/content_help.html #aide-label').hide().fadeIn();
        
        // Désactive les 3 buttons de création
        // Utilisation d'une class bootstrap
        $('#content-button button').attr('disabled', 'disabled');
        
        $('#validButton').click(function() {
            
            // Détecter si le champ est vide ou saisie d'espace / tab
            // Utiliser == et non === ici pour éviter un test faux avec erreurs de transtypage
            if (($('#contentText').val()).trim() !== "" ) { // Si caractères saisis
                
                // Construire l'élément en récupérant la variable de l'input
                var contentLabel = '<div class="form-group"><label>' + $('#contentText').val() + '</label></div>';

                // Générer le contenu dans le conteneur gauche
                $('#gauche form').append(contentLabel);

                // En fondu - Disparition
                $('#construct-form #label').fadeOut(function() {
                    // Supprimer le contenu dans le conteneur droit
                    $('#construct-form #label').remove();

                    // Réactiver les buttons de création en supprimant disabled
                    $('#content-button button').removeAttr('disabled');
                });
                
                // Fondu disparition de l'aide
                $('#help #aide-label').fadeOut();
                
            } else { // Si vide, espace ou tab
                
                alert('Vous devez saisir un texte pour le label');
                
            }
            
        });
        
        // Gestion du bouton annuler
        $('#annuler').click(function() {
            $('#construct-form #label').fadeOut(function() {
                $('#construct-form #label').remove();
                $('#content-button button').removeAttr('disabled');
            });
            
            // Fondu disparition de l'aide
            $('#help #aide-label').fadeOut();    
        });
    });
    
    
    
    // La zone de texte - Le cheminement de la méthode est identique à la création du label - pas de commentaire
    $('button:eq(1)').click(function() {
        $('#construct-form').html(
                '<div id="input">' +
                    '<div class="form-group">' +
                        '<label class="control-label">' +
                            'ID de la zone de texte :' +
                        '</label>' +
                        '<input id="contentText" type="text" class="form-control">' +
                    '</div>' +
                    '<button id="validButton" class="btn btn-info">ok</button>' +
                    '<button id="annuler" class="btn btn-warning">annuler</button>' +
                '</div>').hide().fadeIn();
        
        $('#help').load('files/content_help.html #aide-input').hide().fadeIn();
        
        $('#content-button button').attr('disabled', 'disabled');
        
        $('#validButton').click(function() {
            
            if (($('#contentText').val()).trim() !== "" ) {
                
                var contentInput = '<input class="form-control" id="' + $('#contentText').val() + '" type="text">';
                $('#gauche form div.form-group').last().append(contentInput);
                $('#construct-form #input').fadeOut(function() {
                    $('#construct-form #input').remove();
                    $('#content-button button').removeAttr('disabled');
                });
                
                $('#help #aide-input').fadeOut();
                
            } else {
                
                alert('Vous devez saisir un id pour le champ');
                
            }
            
        });
        
        $('#annuler').click(function() {
            $('#construct-form #input').fadeOut(function() {
                $('#construct-form #input').remove();
                $('#content-button button').removeAttr('disabled');
            });
            $('#help #aide-input').fadeOut();
        });
    });
    
    
    
    // Le button - Le cheminement de la méthode est identique à la création du label et de la zone de texte - pas de commentaire
    $('button:eq(2)').click(function() {
       $('#construct-form').html(
                '<div id="button">' +
                    '<div class="form-group">' +
                        '<label class="control-label">' +
                            'Texte du bouton :' +
                        '</label>' +
                        '<input id="contentText" type="text" class="form-control">' +
                    '</div>' +
                    '<button id="validButton" class="btn btn-info">ok</button>' +
                    '<button id="annuler" class="btn btn-warning">annuler</button>' +
                '</div>').hide().fadeIn();
        
        $('#help').load('files/content_help.html #aide-button').hide().fadeIn();
        
        $('#content-button button').attr('disabled', 'disabled');
        
        $('#validButton').click(function() {
            
            if (($('#contentText').val()).trim() !== "" ) {
                
                var contentButton = '<button type="submit" class="btn btn-default">' + $('#contentText').val() + '</button>';
                $('#gauche form').last().append(contentButton);
                $('#construct-form #button').fadeOut(function() {
                    $('#construct-form #button').remove();
                    $('#content-button button').removeAttr('disabled');
                });
                
                $('#help #aide-button').fadeOut();
                
            } else {
                
                alert('Vous devez saisir un texte pour le bouton');
                
            }
            
        });
        
        $('#annuler').click(function() {
            $('#construct-form #button').fadeOut(function() {
                $('#construct-form #button').remove();
                $('#content-button button').removeAttr('disabled');
            });
            $('#help #aide-button').fadeOut();
        });
    });
});
