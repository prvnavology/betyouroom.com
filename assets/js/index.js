// Menu Toggle Functionality JS Start

$(document).ready(function () {
    $(".menu-icon").click(function () {
      $("body").addClass("menuToggle");
    });
    $(".close-icon").click(function () {
      $("body").removeClass("menuToggle");
    });
  });
  // Menu Toggle Functionality JS End


// Slick Slider JS Start
  $('.home-page-cards-wrapper').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
     });
// Slick Slider JS End


    // Read More Functionality JS Start 
  $('.subpage-readmore-btn').click(function(e) {
    e.preventDefault();
       $(this).parent().prev().slideToggle('slow');
       $(this).text($(this).text() == 'Read Less' ? 'Read More' : 'Read Less');
    });
      // Read More Functionality JS End 