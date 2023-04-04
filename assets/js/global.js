$(document).ready(function () {
   var windowWidth = $(window).width();
   var TM = TweenMax;
   var tl = new TimelineMax();
   console.log("Designed & Developed by Dcastalia");
   $("body").prepend('<div class="overlay"></div><div class="form-overlay"></div>');

   //------------ Light gallery
   if ($(".Light").length > 0) {
      $(".Light").lightGallery({
         selector: "a",
      });
   }

   //------------ Light gallery with thumbnail
   if ($(".LightThumb").length > 0) {
      $(".LightThumb").lightGallery({
         selector: "a",
         exThumbImage: "data-exthumbimage",
      });
   }

   //------------ nice select
   if ($(".Select").length > 0) {
      $(".Select select").niceSelect();
   }

   //------------ tab change in mobile using nice select
   $(".TabSelect").on("change", function (e) {
      $(".TabMenus li a").eq($(this).val()).tab("show");
   });

   //------ form validation
   $("form .dynamic_submit_btn").click(function () {
      $(".form-overlay").addClass("doit");
   });

   $(document).on("click", ".form-overlay.doit,.ok-class", function () {
      $(".form-overlay.doit, .form-message-container").hide();
   });

   $(".btn , button").click(function () {
      $(".form-overlay.doit, .form-message-container").removeAttr("style");
   });

   $(".dynamic_submit_btn").on("click", function () {
      setTimeout(function () {
         $(".form-overlay.doit").hide();
      }, 15000);
   });
   //------ form validation

   // sticky menu
   screenPosition = 0;
   $(window).scroll(function () {
      scrolled = $(window).scrollTop();
      if (screenPosition - scrolled > 0) {
         $("body").addClass("ShowIt");
      } else {
         $("body").removeClass("ShowIt");
      }
      screenPosition = scrolled;
   });
   var first_section = $("body").position().top + 250;
   $(window).scroll(function () {
      if ($(window).scrollTop() <= first_section) {
         $("body").removeClass("ShowIt");
      }
   });

   // scroll to section
   $(".scroll-to").click(function () {
      if (
         location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
         location.hostname == this.hostname
      ) {
         var $target = $(this.hash);
         $target = ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
         if ($target.length) {
            var targetOffset = $target.offset().top;
            $("html,body").animate({ scrollTop: targetOffset }, 1000);
            return false;
         }
      }
   });

   // disable scroll
   $(".Overlay,.menuItems").bind("mousewheel DOMMouseScroll hover", function (e) {
      var scrollTo = null;

      if (e.type == "mousewheel") {
         scrollTo = e.originalEvent.wheelDelta * -1;
      } else if (e.type == "DOMMouseScroll") {
         scrollTo = 40 * e.originalEvent.detail;
      }

      if (scrollTo) {
         e.preventDefault();
         $(this).scrollTop(scrollTo + $(this).scrollTop());
      }
   });

   //------- message box start

   $(document).delegate(".msg_cont", "click", function () {
      open_msg();
   });

   $(document).delegate(".msg_icon", "click", function () {
      open_msg();
   });

   function open_msg() {
      $(".msg_cont_wrap").css({ width: "330px", height: "446px" });
      TM.to(".msg_cont", 0.2, {
         height: 580,
         width: 580,
         right: -86,
         bottom: -86,
         borderRadius: 290,
         background: "rgba(255, 255, 255, 1)",
         onComplete: function () {},
      });

      TM.to(".msg_form", 0.5, {
         right: 0,
         delay: 0.2,
         onComplete: function () {
            $(".msg_cont_wrap").addClass("bx_shadow");
         },
      });

      $(".msg_cont_wrap").addClass("msg_opened");
      $(".msg_cont_wrap").removeClass("msg_closed");
   }

   $(document).delegate(".close_btn", "click", function () {
      close_msg();
   });

   function close_msg() {
      $(".msg_cont_wrap").removeClass("bx_shadow");

      TM.to(".msg_cont", 0.2, {
         width: "50px",
         height: "50px",
         right: 35,
         bottom: 8,
         borderRadius: "100%",
         background: "#008C44",
         onComplete: function () {
            setTimeout(function () {
               $(".msg_cont_wrap").css({ width: "120px", height: "120px" });
            }, 500);
         },
      });

      TM.to(".msg_form", 0.5, {
         right: -500,
      });

      setTimeout(function () {
         $(".msg_cont_wrap").removeClass("msg_opened");
         $(".msg_cont_wrap").addClass("msg_closed");
      }, 500);
   }

   $(".msg_cont , .msg_icon").click(function () {
      $(".msg_cont_wrap .title").fadeIn(2000);
      $(".close_btn").fadeIn();
   });

   $(".close_btn").click(function () {
      $(".msg_cont_wrap .title,.close_btn").hide();
   });

   // image preloader on slider
   $(".img-preload").length > 0 &&
      $(".img-preload").on("afterChange", function (event, slick, currentSlide) {
         imgPreloader();
      });

   //------------ message box end
}); //document.ready
