/* 
 * Code Javascript Cours 17 - Déboguer le code jQuery
 * 
 * 
 */
$(function() {
    // Utilisation d'alert
    x = 34;
    y = 50;
    
    //alert('x = ' + x + ', y = ' + y);
    
    // je préfère utiliser console.log -> moins intrusif
    console.log('x = ' + x + ', y = ' + y);
    
    
    // try catch
    var message='';
    
    try {
        
        // Erreur volontaire pour lancer le message d'erreur
        alort('un message');
    
    }
    
    catch(err) {
      
      // Message d'erreur
      message='Une erreur s\'est produite.\n\n';
      message+='Description : ' + err.message + '\n\n';
      // message+='Cliquez sur OK pour poursuivre.'; // à utiliser avec alert
      
      //alert(message);
      console.log(message);
    
    }
    

    
    // Capturer toutes les erreurs
//    function gestionErreurs(err) {
//      alert('Erreur : \n' + err);
//      return true;
//    }
//    window.onerror = gestionErreurs;


    // Utiliser firebug
});