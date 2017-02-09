console.log('App.js connected');

$(document).ready(function() {
  
  if ($('.active').prop('id') === 'home') {
    $('.container-fluid').css('background-color', 'transparent');
  };
  
  $('[data-toggle="tooltip"]').tooltip();

  $('.nav-contact').click(function() {
    $('footer').tooltip('toggle');
  });

  $('nav>div:last>ul>a').click(function() {
    if ($(this).prop('hash') !== '#contact') {
      $('.container-fluid:first').css('background-color', 'lightgray');
    };
  });

});


