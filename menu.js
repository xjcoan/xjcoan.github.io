$(function() {
  var visible = false;
  $('#menuicon').click(function() {
    if (visible) {
      $('.glyphicon-remove').toggleClass('glyphicon-remove glyphicon-menu-hamburger');
      $('#menu').css({'display':'none'});
      visible = false;
      return;
    }
    $('.glyphicon-menu-hamburger').toggleClass('glyphicon-menu-hamburger glyphicon-remove');
    $('#menu').css({'display':'block'});
    visible = true;
  });
});
