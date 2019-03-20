// ------------------------------------------------
// Project Name: Ramio Coming Soon Template
// Project Description: Ramio - awesome coming soon template to kick-start your project
// Tags: Ramio, coming soon, under construction, template, coming soon page, html5, css3
// Version: 1.0.0
// Build Date: April 2018
// Last Update: April 2018
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: http://mixdesign.club
// File name: app-demo.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader
//  2. Demo Main Section Loading Animation
//  3. Animated Headline Settings
//  4. Background-attachment: fixed Solution for IE
//  5. SVG Fallback
//  6. Chrome Smooth Scroll
//  7. Fullscreen Layout
//  8. Smooth Scroll To Section
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).load(function() {

  // --------------------------------------------- //
  // Loader Start
  // --------------------------------------------- //
  setTimeout(function(){
    $(".loader-logo").removeClass('slideInDown').addClass('fadeOutUp');
    $(".loader-caption").removeClass('slideInUp').addClass('fadeOutDown');
  },600);
  // --------------------------------------------- //
  // Loader End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Demo Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function(){
    $(".loader").addClass('loaded');
    $("body").addClass('loaded');
  },1200);
  // --------------------------------------------- //
  // Demo Main Section Loading Animation End
  // --------------------------------------------- //

});

$(document).ready(function() {

  // ----------------------------------------------- //
  // Background-attachment: fixed Solution for IE Start
  // ----------------------------------------------- //
  if(navigator.userAgent.match(/Trident\/7\./)) {
    $('body').on("mousewheel", function () {
        event.preventDefault();

        var wheelDelta = event.wheelDelta;

        var currentScrollPosition = window.pageYOffset;
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    });

    $('body').keydown(function (e) {
          e.preventDefault(); // prevent the default action (scroll / move caret)
          var currentScrollPosition = window.pageYOffset;

          switch (e.which) {

              case 38: // up
                  window.scrollTo(0, currentScrollPosition - 120);
                  break;

              case 40: // down
                  window.scrollTo(0, currentScrollPosition + 120);
                  break;

              default: return; // exit this handler for other keys
          }
      });
  }
  // --------------------------------------------- //
  // Background-attachment: fixed Solution for IE End
  // --------------------------------------------- //

  // SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // Fullscreen Layout
  function fullscreenLayout() {
    $(".fullscreen").css({
        height: $(window).height()
    });
  };
  fullscreenLayout();
  $(window).resize(function(){
    fullscreenLayout();
  });

  // Smooth Scroll To Section
  var scrollToPreview = $('#scroll-to-preview');

  scrollToPreview.on('click', function(event){
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  function smoothScroll(target){
    $('body,html').animate(
      {'scrollTop':target.offset().top},
      500
    );
  }

});
