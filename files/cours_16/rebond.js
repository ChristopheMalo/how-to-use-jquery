/* 
 * Code Javascript Cours 16 - Créer un plugin
 * 
 * 
 */
// Coder un plugin qui permet à un élément d'effectuer un rebond
(function($) {
  $.fn.rebond = function(amplX, amplY)
  {
    this.each(function() {
      var x, y, affX, affY, initX, initY;
      initX = parseInt($(this).css('left'));
      initY = parseInt($(this).css('top'));
      for (x = (Math.PI)/2; x < (4*Math.PI); x = x+.2)
      {
        y = (Math.abs(Math.sin(x)))/x;
        affX = initX + x * amplX;
        affY = initY - y * amplY;
        $(this).animate({left: affX, top: affY},10);
      }
    });
    return this;
  };
})(jQuery);
