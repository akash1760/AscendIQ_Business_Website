
$(function(){
  AOS.init({duration:800,once:true});

  // Smooth scroll
  $('a.nav-link, .btn').on('click', function(e){
    var target = $(this.hash);
    if(target.length){
      e.preventDefault();
      $('html, body').animate({scrollTop: target.offset().top - 70}, 600);
    }
  });

  // Navbar shrink on scroll
  $(window).on('scroll', function(){
    if($(this).scrollTop()>50){
      $('.navbar').addClass('navbar-shrink');
    }else{
      $('.navbar').removeClass('navbar-shrink');
    }
  });
});
