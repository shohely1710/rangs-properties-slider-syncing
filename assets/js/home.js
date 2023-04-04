$(document).ready(function () {
   var windowWidth = $(window).width();
   var TM = TweenMax;
   var tl = new TimelineMax();



//slider syncing part start


$('.slider-active').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-nav-active'
});
$('.slider-nav-active').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-active',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  infinite: false,
  arrows:false
});

//slider syncing part end



//slider prev and next button js start

$('.timeline__slider-bg__slider_navigation__next').click(function(e){ 
  //e.preventDefault(); 
$('.slider-active').slick('slickNext');
} );

$('.timeline__slider-bg__slider_navigation__prev').click(function(e){
//e.preventDefault(); 
$('.slider-active').slick('slickPrev');
} );  

//slider prev and next button js end


//slider text loader animation start





//  function removeAddClass1() {
//   $(".timeline__slider-bg__item__content__zoom").removeClass("do_zoom");
//   setTimeout(removeAddClass1, 8000);
// }
// removeAddClass1();

// function removeAddClass2() {
//   $(".timeline__slider-bg__item__content__zoom").addClass("do_zoom");
//   setTimeout(removeAddClass2, 5000);
// }
// removeAddClass2();



setTimeout(function(){$('.slick-current').find('.timeline__slider-bg__item__content__loader').addClass('stop_zoom').removeClass('do_zoom');},1200);
setTimeout(function(){$('.slick-current').find('.timeline__slider-bg__item__content__zoom,.timeline__slider-bg__item__content__loader').addClass('do_zoom').removeClass('stop_zoom');},2500);

 $('.slider-active').on('afterChange',function(){
  $(".timeline__slider-bg__item__content__zoom,.timeline__slider-bg__item__content__loader").removeClass('do_zoom');

 setTimeout(function(){$('.slick-current').find('.timeline__slider-bg__item__content__loader').addClass('stop_zoom').removeClass('do_zoom');},400);

 setTimeout(function(){$('.slick-current').find('.timeline__slider-bg__item__content__zoom,.timeline__slider-bg__item__content__loader').addClass('do_zoom').removeClass('stop_zoom');},1500);

});


//slider text loader animation end



// $('.slider-active').on('afterChange', function(event, slick, currentSlide){
//   console.log(currentSlide);
// }); 




}); //document.ready
