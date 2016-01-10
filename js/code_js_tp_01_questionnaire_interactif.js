/* 
 * Code Javascript TP 01 - Questionnaire intéractif
 * à partir du code HTML sémantique - hors br à supprimer
 * construire le formulaire intéractif en jQuery
 * en utilisant bootstrap - en complément de l'exercice
 * label est ajouté au code HTML pour la sémantique
 * les br sont supprimés
 * 
 * 
 */
$(function() {
    /* 
    * Formater la structure général du formulaire
    */
    // Class container
    // console.log($('div')); // Debug - Controler ordre de l'ensemble des div
    $('div:eq(0)').addClass('container');

    // Class row
    $('div:eq(1)').addClass('row');

    // Form
    $('form').attr({
        class   :   'form-horizontal col-sm-12',
        method  :   'post',
        action  :   '#',
        style   :   'margin-bottom: 45px; margin-top:20px;'
    });

    // Form-group
    $('.question').addClass('form-group');

    // Label + Input
    // Entourer les groupe de 3 labels / input par un div
    // console.log($('label'));
    $('label').wrap('<div class="radio"></div>');

    // Col set
    $('.texte').addClass('col-sm-10');



    /*
    * Formater les buttons
    */ 
    // console.log($('a')); // Debug
    // Button tester les réponses
    $('a:eq(0)').attr({
        class  : 'btn btn-primary',
        href   : '#',
        role   : 'button',
        style  : 'margin-bottom: 10px;'
    });

    // Button retour page index
    $('a:eq(1)').attr({
        class  : 'btn btn-primary',
        href   : '../index.html',
        role   : 'button' 
    });


    /*
    * Formater les blocs questions
    */
    $('.question').css({
        border            : 'solid 5px #bbb',
        backgroundColor   : '#ddd',
        paddingBottom    : '20px'
    });
    
    
    // Une autre possibilité
//    var q = $('.question');          //Mémorisation du sélecteur dans une variable pour optimiser le code
//    q.css('background', '#9EEAE0');  //Couleur d'arrière-plan
//    q.css('border-style', 'groove'); //Type de la bordure
//    q.css('border-width', '4px');    //Largeur de la bordure
//    q.css('width', '900px');         //Largeur des balises <div> de classe « question »
//    q.css('height', '250px');        //Hauteur des balises <div> de classe « question »
//    q.css('margin', '20px');         //Marge autour des balises <div> de classe « question »


    /*
    * Formater les paragraphes p
    */
    $('p').css('margin-top', ('10px'));


    /*
    * Formater les images
    */
    $('img').wrap('<p class="contentImg"></p>'); // Mettre les images dans un p pour centrer l'image
    $('.contentImg').css('text-align', 'center');
    $('img').css({
        border      : 'solid 1px #aaa',
        marginTop   : '40px'
    });


    /*
    *  Masquer les réponses au lancement
    */
    $('.reponse').hide(); // Dissimuler les réponses
    
    
    /*
     * Gérer les réponses
     */
    $('a').hover(
        function() { 
            $('.reponse').show();
            if ($(':radio[id="r1"]:checked').val()) {
                $('#img1').attr('src', '../images/tp_01/bon.png'); 
                $('#reponse1').css('color', 'green');
            }  
            else {
                $('#img1').attr('src', '../images/tp_01/mauvais.png');
                $('#reponse1').css('color', 'red');
            } 

            if ($(':radio[id="r4"]:checked').val()) {
                $('#img2').attr('src', '../images/tp_01/bon.png');
                $('#reponse2').css('color', 'green');
            }
            else {
                $('#img2').attr('src', '../images/tp_01/mauvais.png');
                $('#reponse2').css('color', 'red');
            } 

            if ($(':radio[id="r8"]:checked').val()) {
                $('#img3').attr('src', '../images/tp_01/bon.png'); 
                $('#reponse3').css('color', 'green');
            }
            else {
                $('#img3').attr('src', '../images/tp_01/mauvais.png');
                $('#reponse3').css('color', 'red');
            }
          },
          function() { 
                $('.reponse').hide(); 
                $('#img1').attr('src', '../images/tp_01/question.png');
                $('#img2').attr('src', '../images/tp_01/question.png');
                $('#img3').attr('src', '../images/tp_01/question.png');
          }
    );
});