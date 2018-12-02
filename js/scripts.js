$('.menu-btn').on('click', function(e){
  e.preventDefaut;
  $(this).toggleClass('menu-btn-active');
  $('.menu-nav_child').toggleClass('hide');
  $('.grid-container_child').addClass('hide');
})
$('.seeMore_btn').on('click', function(e){
  e.preventDefaut;
  $(this).toggleClass('seeMore_btn_active');
  $('.grid-container_child').toggleClass('hide');
})
