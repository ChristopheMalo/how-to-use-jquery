/* 
 * Code Javascript Cours 04 - Modifier le contenu d'un élément
 * 
 * 
 */
$(function() {
    /*
     * Getters et setters
     * */
    /* Title h3 */
    var sizeH3title = $('h3').css('font-size'); // Getter
    console.log('Font-size H3 avant setter : ' + sizeH3title);

    $('h3').css('font-size', '2em'); // Setter
    var sizeH3title = $('h3').css('font-size'); // Getter
    console.log('Font-size H3 après setter : ' + sizeH3title);
    
    
    /* Lien */
    var getHref = $('a').attr('href'); // Récupérer attribut du 1er élément
    console.log(getHref);
    
    var getHref2 = $('a').attr('class');
    console.log(getHref2);
    
    
    /* Image */
    var imgAnimal01 = $('#animal01').attr('src');
    console.log('SCR avant modif : ' + imgAnimal01);
    
    
    // Modification forme 1 - 1 seul attribut à modifier
//    $('#animal01').attr('src', '../images/cours_04/housefly.jpg');
//    var imgAnimal01 = $('#animal01').attr('src');
//    console.log('SRC après modif : ' + imgAnimal01);
    
    
    // Modification forme 2 - Plusieurs attribut à modifier
    $('#animal01').attr({
        src:    '../images/cours_04/housefly.jpg',
        alt:    'Une mouche',
        width:  '320'
    });
    var imgAnimal01 = $('#animal01').attr('src');
    console.log('SRC après modif : ' + imgAnimal01);
    
    
    // Modifiation forme 3 - Sous forme de fonction
    // Ici ajout d'un target à tous les liens a
    $('a').attr('target', function() {
        if (this.host === location.host) return '_self'; // self si lien vers le serveur hébergement
        else return '_blank'; // blank si lien vers extérieur du serveur
    });
    
    
    
    /*
     * Accéder aux attributs des balises HTML
     */
    var classDiv = $('div').attr('class'); // Retourne l'attribut class du 1er div
    console.log('Attribut class du 1er div : ' + classDiv);
    
    
    // Modifie ou crée attribut class des balises li
    $('li').attr('class', 'fictiveNameClass');
    var checkClassLiName = $('li').attr('class'); // Vérifier la class name sur le premier li
    console.log('Nom classe 1er li : ' + checkClassLiName);
    
    
    // Supprimer un attribut
//    var divIdName = $('div').attr('id'); // Verifier presence et nom de id du 1er div
//    console.log('Nom id 1er div : ' + divIdName);
//    
//    
//    $('div').removeAttr('id'); // Supprimer ID
//    var divIdName = $('div').attr('id'); // Verifier presence et nom de id du 1er div
//    console.log('Nom id 1er div après suppression : ' + divIdName); // Retourne undefined car supprimer

    
    /* Accéder aux propriétés CSS */
    var liFontSize = $('li').css('font-size'); // Retourne taille typo et li et stocke le résultat dans une variable
    console.log(('Taille Font li avant modif : ' + liFontSize));
    
    $('li').css('font-size', '1.25em');
    var liFontSize = $('li').css('font-size'); // Retourne taille typo et li et stocke le résultat dans une variable
    console.log(('Taille Font li après modif : ' + liFontSize));
    
    
    
    /*
     * Travailler avec l'attribut class
     */
    /* Ajouter supprimer */
    // Ajouter une class rouge à Julia
    $('#julia').addClass('rouge');
    
    // Ajouter la class vert + grande taille typo à Julia - à la suite de rouge
    $('#julia').addClass('vert grand');
    
    // Supprimer la class rouge - écraser par la verte à Julia
    $('#julia').removeClass('rouge');
    
    // Ajouter classe rouge - Rouge n'écrase pas verte donc il faut supprimer vert en premier
    $('#eric').removeClass('vert').addClass('rouge');
    
    // Afficher paul en petite taille et rouge
    $('#paul').removeClass('vert').addClass('rouge').removeClass('grand').addClass('petit');
    //$('#paul').toggleClass('vert').toggleClass('rouge').toggleClass('grand').toggleClass('petit');

    // Simplification
    // $('#pierre').removeClass('vert grand').addClass('rouge petit');
    
    
    /* Tester l'existence de classe */
    if ($('#jean').hasClass('rouge')) {
        console.log('Le span #jean est de classe rouge');
    } else {
        console.log('Le span #jean n\'est pas de classe rouge');
    }
    
    
    /*
     * Travailler avec les formulaires
     */
    // Prenom
    var prenom = $('#prenom').val(); // Retourne le prenom du champ
    console.log('Prenom avant modif : ' + prenom);
    $('#prenom').val('Christophe'); // Renseigne le prenom
    var prenom = $('#prenom').val(); // Retourne le prenom du champ
    console.log('Prenom avant modif : ' + prenom);
    
    // Password
    var password = $('#password').val(); // Retourne le password
    console.log('Password avant modif : ' + password);
    $('#password').val('TestPassword'); // Renseigne le password
    var password = $('#password').val(); // Retourne le password
    console.log('Password avant modif : ' + password);
    
    // Liste déroulante
    var select = $('#pays').val(); // Retourne l'élément sélectionné dans la liste déroulante
    console.log('Liste déroulante avant select : ' + select);
    $('#pays').val('France'); // Selectione value 'France'
    var select = $('#pays').val(); // Retourne l'élément sélectionné dans la liste déroulante
    console.log('Liste déroulante après select : ' + select);
    
    // Bouton radio
    $(':radio').val(['answerRadios2']); // Sélectionne / Coche value 2
    
    
    /*
     * Travailler avec les valeurs stockées dans des éléments
     */
    var contentP = $('.docjquery').text();
    console.log(contentP);
    
    $('p').text(function(index, actuel) {
       console.log('Paragraphe ' + (index+1) + ' : ' + actuel); 
    });
    
    console.log($('p').html());         // Affiche le code html du 1er élément
    console.log($('p:first').html());   // Idem - Identique
    console.log($('p:last').html());    // Affiche le code html du dernier élément
    
    $('p').html(function(index,actuel) { // Fonction pour afficher tous les codes HTML des éléments 
        console.log('Paragraphe ' + (index+1) + ' : '+actuel);
    });
    
    var pIndex4 = $('p:eq(4)').html();
    console.log('p index 4 avant modif : ' + pIndex4);
    $('p:eq(4)').html('<a href="http://www.google.com">Moteur de recherche Google</a>'); // Modifier le contenu du p index 4
    var pIndex4 = $('p:eq(4)').html();
    console.log('p index 4 après modif : ' + pIndex4);
    
    
    /*
     * Position et taille des éléments
     */
//    var coordParent          = $('#parent').offset();   // Retourne les coordonnées du parent par rapport au document
//    var coordEnfant          = $('#enfant').offset();   // Retourne les coordonnées du child par rapport au document
//    var coordParentRelative  = $('#parent').position(); // Retourne position au div parent
//    var coordEnfantRelative  = $('#enfant').position(); // Retourne la position relative par rapport au parent
//    console.log(coordParent);
//    console.log(coordEnfant);
//    console.log(coordParentRelative);
//    console.log(coordEnfantRelative);
//    // Afficher les coordonnées dans le span id resultat
//    // Utilisation de HTML car insertion d'une balise <br> dans le code
//    // Si aucune balise, possibilité d'utiliser la méthode text()
//    $('#resultat').html('Parent : x = '          + coordParent.left         + ' , y = ' + coordParent.top         + ' -- ' +
//                        'Enfant : x = '          + coordEnfant.left         + ' , y = ' + coordEnfant.top         + '<br>' +
//                        'Parent relative : x = ' + coordParentRelative.left + ' , y = ' + coordParentRelative.top + ' -- ' +
//                        'Enfant relative : x = ' + coordEnfantRelative.left + ' , y = ' + coordEnfantRelative.top);
//                
//    // Modifier la position absolue de enfant
//    var newCoordEnfant = $('#enfant').offset(); // Création d'un objet jQuery contenant les coordonnées de enfant
//    // Définir les nouvelles coordonnées de l'objet
//    console.log(newCoordEnfant);
//    newCoordEnfant.top = 100;
//    newCoordEnfant.left = 250;
//    $('#enfant').offset(newCoordEnfant);
//    console.log(newCoordEnfant);
    
    // Connaitre les dimensions des éléments
    var dimensions = 'width=' + $('#testDim').width() + ', innerWidth=' + $('#testDim').innerWidth() + ', outerWidth=' + $('#testDim').outerWidth() + ', outerWidth(true)=' + $('#testDim').outerWidth(true);
    dimensions = dimensions + ', height=' + $('#testDim').height() + ', innerHeight=' + $('#testDim').innerHeight() + ', outerHeight=' + $('#testDim').outerHeight() + ', outerHeight(true)=' + $('#testDim').outerHeight(true);
    $('#resultat').text(dimensions);
    
    // Modifier les dimensions d'un div
//    $('div').width('400px');
//    $('div').height('200px');



    /*
     * Associer des données aux balises
     */
    // Exemple
//    $(function() {
//        var div = $('div')[0];
//        $.data(div, 'mesValeurs', {premier: 'bonjour', deuxieme: 12, troisieme: 'http://www.url.com'});
//        var val1 = $.data(div, 'mesValeurs').premier;
//        var val2 = $.data(div, 'mesValeurs').deuxieme;
//        var val3 = $.data(div, 'mesValeurs').troisieme;
//        $('#sp1').text(val1);
//        $('#sp2').text(val2);
//        $('#sp3').text(val3);
//    });
    // Code HTML pour le résultat
    //<div id="mondiv">
    //<!--Les valeurs stockées dans la balise &lt;div&gt; sont : <span id="sp1"></span>, <span id="sp2"></span> et <span id="sp3"></span>.-->
    //</div>
    
    // Supprimer la valeur
//    var div = $('div')[0];
//    $.removeData(div, 'mesValeurs');
});