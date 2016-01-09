/* 
 * Code Javascript Cours 04 - Modifier le contenu d'un élément
 * 
 * 
 */
$(function() {
    /* Getters et setters */
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
    
    
    /* Accéder aux attributs des balises HTML */
    var classDiv = $('div').attr('class'); // Retourne l'attribut class du 1er div
    console.log('Attribut class du 1er div : ' + classDiv);
    
    // Modifie ou crée attribut class des balises li
    $('li').attr('class', 'fictiveNameClass');
    var checkClassLiName = $('li').attr('class'); // Vérifier la class name sur le premier li
    console.log('Nom classe 1er li : ' + checkClassLiName);
    
    // Supprimer un attribut
    var divIdName = $('div').attr('id'); // Verifier presence et nom de id du 1er div
    console.log('Nom id 1er div : ' + divIdName);
    
    $('div').removeAttr('id'); // Supprimer ID
    var divIdName = $('div').attr('id'); // Verifier presence et nom de id du 1er div
    console.log('Nom id 1er div après suppression : ' + divIdName); // Retourne undefined car supprimer

    /* Accéder aux propriétés CSS */
    var liFontSize = $('li').css('font-size'); // Retourne taille typo et li et stocke le résultat dans une variable
    console.log(('Taille Font li avant modif : ' + liFontSize));
    
    $('li').css('font-size', '1.25em');
    var liFontSize = $('li').css('font-size'); // Retourne taille typo et li et stocke le résultat dans une variable
    console.log(('Taille Font li après modif : ' + liFontSize));
    
});