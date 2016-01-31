/* 
 * Code Javascript Cours 14 - Trouver et utiliser un plugin
 * 
 * 
 */
$(function() {
    // Trouver et utiliser un plugin
    $("#wcp1").wColorPicker({
        initColor: '#ccf',
        onSelect: function(color){
          $('body').css('background', color);
        },
        onMouseover: function(color){
          $('#wcp-input').css('background', color).val(color);
        }
    });
});