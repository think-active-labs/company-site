// ------------------------------------------------
// Project Name: Nimi Coming Soon Template
// Project Description: Nimi - awesome coming soon template to kick-start your project
// Tags: nimi, coming soon, under construction, template, coming soon page, html5, css3
// Version: 1.0.0
// Build Date: April 2018
// Last Update: April 2018
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: http://mixdesign.club
// File name: app.js (main)
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. SVG Fallback
//  2. Chrome Smooth Scroll
//  3. PhotoSwipe Gallery Images Replace
//  4. Sections Behavior
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(function() {

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

  // Gallery Images Replace
  $('.works-link')
    // Background set up
    .each(function(){
    $(this)
    // Add a photo container
    .append('<div class="picture"></div>')
    // Set up a background image for each link based on data-image attribute
    .children('.picture').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
  });

  // Sections Behavior Start
  // Declaring Variables
  var notify             = $('.notify'),
      writealine         = $('.writealine'),
      notifyTrigger      = $('#notify-trigger'),
      notifyClose        = $('#notify-close'),
      writealineTrigger  = $('#contactform-trigger'),
      writealineClose    = $('#writealine-close'),
      mainSection        = $('.main'),
      aboutTrigger       = $('#about-trigger'),
      worksTrigger       = $('#works-trigger'),
      contactTrigger     = $('#contact-trigger'),
      aboutSection       = $('#about'),
      worksSection       = $('#works'),
      contactSection     = $('#contact'),
      aboutClose         = $('#about-close'),
      worksClose         = $('#works-close'),
      contactClose       = $('#contact-close');

  // Contact Forms Open/Close Start
  // Notify Form Open
  notifyTrigger.on('click', function(event){
    event.preventDefault();
    mainSection.addClass('notify-is-visible');
    notify.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      notifyClose.addClass('is-scaled-up');
    });
    if($('html').hasClass('no-csstransitions')) {
      notifyClose.addClass('is-scaled-up');
    }

    setTimeout(function(){
      $('body').addClass('overflow-hidden');
    }, 150);
  });

  // Notify Form Close
  notifyClose.on('click', function(event){
    event.preventDefault();
    mainSection.removeClass('notify-is-visible');
    notify.removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      notifyClose.removeClass('is-scaled-up');
    });
    if($('html').hasClass('no-csstransitions')) {
      notifyClose.removeClass('is-scaled-up');
    }
    $('body').removeClass('overflow-hidden');
  });

  // Write-a-line Form Open
  writealineTrigger.on('click', function(event){
    event.preventDefault();
    contactSection.addClass('popup-is-visible');
    writealine.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      writealineClose.addClass('is-scaled-up');
    });
    if($('html').hasClass('no-csstransitions')) {
      writealineClose.addClass('is-scaled-up');
    }

    setTimeout(function(){
      $('body').addClass('overflow-hidden');
    }, 150);
  });

  // Write-a-line Form Close
  writealineClose.on('click', function(event){
    event.preventDefault();
    contactSection.removeClass('popup-is-visible');
    writealine.removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      writealineClose.removeClass('is-scaled-up');
    });
    if($('html').hasClass('no-csstransitions')) {
      writealineClose.removeClass('is-scaled-up');
    }
    $('body').removeClass('overflow-hidden');
  });

  // Sections Open/Close
  // About Section Open
  aboutTrigger.on('click', function(event) {
    event.preventDefault();
    mainSection.addClass('is-hidden');
    aboutSection.addClass('is-visible');
  });

  // About Section Close
  aboutClose.on('click', function(event) {
    event.preventDefault();
    mainSection.removeClass('is-hidden');
    aboutSection.addClass('is-hidden');

    setTimeout(function(){
      aboutSection.removeClass('is-visible');
      aboutSection.removeClass('is-hidden');
    }, 600);
  });

  // Works Section Open
  worksTrigger.on('click', function(event) {
    event.preventDefault();
    mainSection.addClass('is-hidden');
    worksSection.addClass('is-visible');
  });

  // Works Section Close
  worksClose.on('click', function(event) {
    event.preventDefault();

    mainSection.removeClass('is-hidden');
    worksSection.addClass('is-hidden');

    setTimeout(function(){
      worksSection.removeClass('is-visible');
      worksSection.removeClass('is-hidden');
    }, 600);
  });

  // Contact Section Open
  contactTrigger.on('click', function(event) {
    event.preventDefault();
    mainSection.addClass('is-hidden');
    contactSection.addClass('is-visible');
  });

  // Contact Section Close
  contactClose.on('click', function(event) {
    event.preventDefault();
    mainSection.removeClass('is-hidden');
    contactSection.addClass('is-hidden');
    
    setTimeout(function(){
      contactSection.removeClass('is-visible');
      contactSection.removeClass('is-hidden');
    }, 1200);
  });

});
