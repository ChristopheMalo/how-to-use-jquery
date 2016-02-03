/* 
 * Code Javascript Cours 16 - Créer un plugin
 * 
 * 
 */
// Coder un plugin
(function($) {
    $.fn.changeText = function() {
        this.each(function() {
            $(this).wrap('<b><i><u></u></i></b>');
        });
        return this;
    };
})(jQuery);