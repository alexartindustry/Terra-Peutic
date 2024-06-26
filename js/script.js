
$(document).ready(function(){

  $( ".item" ).hover(
    function() {
      $(this).find('.image-text').slideDown();
    }, function() {
      $(this).find('.image-text').slideUp();
    }
  );

  /*questions begin*/
  /*
  $('.quest').on('click', function(e) {

      $('.active-question').each(function() {
          $(this).parent('.question').find('.answer-text').slideToggle();
          $(this).removeClass('active-question');
      });

      $(this).addClass('active-question');
      $(this).parent('.question').find('.answer-text').slideToggle();
  });
  */

  $('.quest').on('click', function(e) {

      $('.active-question').each(function() {
          $(this).find('.answer-text').slideToggle();
          $(this).removeClass('active-question');
      });

      $(this).parent('.question').addClass('active-question');
      $(this).parent('.question').find('.answer-text').slideToggle();
  });
  /*questions end*/
  
});


document.addEventListener('DOMContentLoaded', function(){

  document.getElementById('burger').onclick = function(e){
    e.preventDefault();
    e.currentTarget.classList.toggle('click');
    document.getElementById('burger-menu').classList.toggle('click');
  }

});


