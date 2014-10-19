$(document).ready(function(){
  
  $('.ripple-button').click(function(e){
    var parent = $(this).parent();

      //create ripple if it doesnt exist
      if (parent.find('.ripple').length == 0) {
        parent.prepend('<span class="ripple"></span>');
      }

      var ripple = parent.find('.ripple');
      ripple.removeClass('animate');
      if (!ripple.height() && !ripple.width()) {
        var dim = Math.max(parent.outerHeight(), parent.outerWidth());
        ripple.css({
          height: dim,
          width: dim
        });
      }

      var x = e.pageX - parent.offset().left - ripple.width()/2;
      var y = e.pageY - parent.offset().top - ripple.height()/2;
      ripple
        .css({
          top: y + 'px',
          left: x + 'px'
        })
        .addClass('animate');
  });

});