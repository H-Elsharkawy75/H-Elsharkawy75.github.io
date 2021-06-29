/* -------------------------------------------

Name: 		Tastyc
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */
( function( $ ) {
    'use strict';

    var elementor = 0;
    if ( window.location.href.indexOf('/?elementor-preview=') > -1 ) {
        elementor = 1;
    }

  /*-------------------------
  preload
  -------------------------*/
  $(document).ready(function() {
    $('.tst-menu-frame').addClass('tst-active');
    $('html').addClass('is-animating');
    setTimeout(function() {
      $(".tst-app").animate({
        opacity: 1
      }, {
        duration: 400,
        complete: function() {
          $('html').removeClass('is-animating');
          $('.tst-menu-frame').removeClass('tst-active');
        }
      });
    }, 1200);
  });
  
  /*-------------------------
  datepicker
  -------------------------*/
  $('#reservation_date').datepicker({
    minDate: new Date(),
    language: 'en',
  });
  /*-------------------------
  nice select
  -------------------------*/
  $('select').not('[autocomplete]').niceSelect();
  
  /*-------------------------
  mobile menu
  -------------------------*/
  $('.tst-menu-btn').on('click', function() {
    $('.tst-menu-btn , .tst-menu nav, .tst-menu-nav').toggleClass('tst-active');
    $('.tst-minicart-window , .tst-popup-bg').removeClass('tst-active');
  });
  $('.menu-item-has-children > a').on('click', function() {
    $(this).closest('li').toggleClass('dropdown-active');
    return false;
  });
  /*-------------------------
  minicart
  -------------------------*/
  $('.tst-cart').on('click', function() {
    $('.tst-minicart-window').toggleClass('tst-active');
    $('.tst-menu-btn , .tst-menu nav , .tst-popup-bg').removeClass('tst-active');
  });

  $('.woocommerce-mini-cart__buttons a').on('click', function() {
    $('.tst-minicart-window').removeClass('tst-active');
  });
  /*-------------------------
  popup
  -------------------------*/
  $('.tst-res-btn').on('click', function() {
    $('.tst-popup-bg').toggleClass('tst-active');
    $('.tst-minicart-window , .tst-menu-btn , .tst-menu nav').removeClass('tst-active');

    return false;
  });
  $('.tst-close-popup').on('click', function() {
    $('.tst-popup-bg').removeClass('tst-active');
  });
  /*-------------------------
  menu after scroll
  -------------------------*/
  var sct_h = 120;
  if ( $(window).width() < 768 ) {
    var sct_h = 46;
  }
  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    if (scroll >= sct_h) {
      $(".tst-menu-frame").addClass("tst-active");
    } else {
      $(".tst-menu-frame").removeClass("tst-active");
    }
  });
  /*-------------------------
  main title after scroll
  -------------------------*/
  $(window).scroll(function() {
    $(".tst-main-title , .tst-main-slider-nav , .tst-main-pagination").css("opacity", 1 - $(window).scrollTop() / 500);
  });
  /*-------------------------
  parallax
  -------------------------*/
  $(window).on('scroll', parallax)

  function parallax() {
    var s = $(window).scrollTop();

    function parallaxDown(e, t) {
      $(e).css({
        'position': 'relative',
        'top': (s * t) + 'px'
      });
    }
    parallaxDown('.tst-parallax', .3);
  }
  /*-------------------------
  fade scroll object
  -------------------------*/
  $(window).scroll(function() {
    $('.tst-fade-up , .tst-fade-down').each(function(i) {
      var bottom_of_object = $(this).offset().top - 200 + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).addClass('tst-active');
      }
      if (bottom_of_window < bottom_of_object) {
        $(this).removeClass('tst-active');
      }
    });
  });
  if ($(window).width() < 992) {
    $('footer').removeClass('tst-fade-down');
  } else {
    $('footer').addClass('tst-fade-down');
  }
  $(window).on('resize orientationChange', function(event) {
    if ($(window).width() < 992) {
      $('footer').removeClass('tst-fade-down');
    } else {
      $('footer').addClass('tst-fade-down');
    }
  });
  /*-------------------------
  onepage navigation and anchor scroll
  -------------------------*/
  $('.tst-onepage a , .tst-anchor-scroll').on("click", function() {
    $(".tst-onepage .current-menu-item").removeClass("current-menu-item");
    $(this).closest('li').addClass("current-menu-item");
    var theClass = $(this).attr("class");
    $('.' + theClass).parent('li').addClass('current-menu-item');
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 140
    }, 800);
    return false;
  });  
  /*-------------------------
  Magnific Popups
  -------------------------*/
  if(/\.(?:jpg|jpeg|gif|png)$/i.test($('.wp-block-gallery .blocks-gallery-item:first a').attr('href'))){
    $('.wp-block-gallery a').magnificPopup({
      gallery: {
          enabled: true
      },
      type: 'image',
      closeOnContentClick: false,
      fixedContentPos: false,
      closeBtnInside: false,
      callbacks: {
        beforeOpen: function() {
          // just a hack that adds mfp-anim class to markup 
           this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
           this.st.mainClass = 'mfp-zoom-in';
        }
      },
    });
  }
  $('[data-magnific-inline]').magnificPopup({
    type: 'inline',
    overflowY: 'auto',
    preloader: false,
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = 'mfp-zoom-in';
      }
    },
  });
  $('[data-magnific-image]').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    fixedContentPos: false,
    closeBtnInside: false,
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup 
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
         this.st.mainClass = 'mfp-zoom-in';
      }
    },
  });
  if (!$('body').hasClass('elementor-page')) {
    $("a").each(function(i, el) {
      var href_value = el.href;
      if (/\.(jpg|png|gif)$/.test(href_value)) {
         $(el).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            fixedContentPos: false,
            closeBtnInside: false,
            callbacks: {
              beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup 
                 this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                 this.st.mainClass = 'mfp-zoom-in';
              }
            },
          });
      }
    });
  }
  $('[data-magnific-video]').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube_short: {
              index: 'youtu.be/',
              id: 'youtu.be/',
              src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }
        }
    },
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      markupParse: function(template, values, item) {
        template.find('iframe').attr('allow', 'autoplay');
      },
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup 
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
         this.st.mainClass = 'mfp-zoom-in';
      }
    },
  });
  $('[data-magnific-music]').magnificPopup({
    type: 'iframe',
    preloader: false,
    fixedContentPos: false,
    closeBtnInside: true,
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup 
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
         this.st.mainClass = 'mfp-zoom-in';
      }
    },
  });
  $('[data-magnific-gallery]').magnificPopup({
    gallery: {
        enabled: true
    },
    type: 'image',
    closeOnContentClick: false,
    fixedContentPos: false,
    closeBtnInside: false,
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup 
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
         this.st.mainClass = 'mfp-zoom-in';
      }
    },
  });

  /*-------------------------
  just slider
  -------------------------*/
  var swiper = new Swiper('.tst-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      prevEl: '.tst-prev',
      nextEl: '.tst-next',
    },
    pagination: {
      el: '.tst-blog-pagination',
      clickable: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  /*-------------------------
  banner slider
  -------------------------*/
  var param_autoplay = false;
  if ( elementor ) {
    param_autoplay = {
      delay: 5000,
    };
  }
  var swiper = new Swiper('.tst-main-slider', {
    slidesPerView: 1,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.tst-main-pagination',
      clickable: true,
    },
    parallax: true,
    autoplay: param_autoplay,
    navigation: {
      prevEl: '.tst-main-prev',
      nextEl: '.tst-main-next',
    },
  });
  /*-------------------------
  footer gallery slider
  -------------------------*/
  var swiper = new Swiper('.tst-footer-gallery', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: '.tst-fg-prev',
      nextEl: '.tst-fg-next',
    },
    breakpoints: {
      280: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });
  /*-------------------------
  testimonials slider
  -------------------------*/
  var swiper = new Swiper('.tst-testimonials-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    centeredSlides: true,
    loop: true,
    navigation: {
      prevEl: '.tst-testi-prev',
      nextEl: '.tst-testi-next',
    },
    pagination: {
      el: '.tst-testi-pagination',
      clickable: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
  /*-------------------------
  menu slider
  -------------------------*/
  var menu = [];
  $('.swiper-menu-nav .span-category').each(function(){
    menu.push( $(this).find('span').text() );
  });

  var mySwiper = new Swiper('.swiper-menu', {
    effect: 'fade',
    parallax: true,
    speed: 600,
    pagination: {
      el: '.swiper-menu-nav',
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
  })
  /*-------------------------
  counter up
  -------------------------*/
  if ( $('.tst-number').length ) {
    var count = 0;
    $(window).scroll(function() {
      var oTop = $('.tst-number').offset().top - window.innerHeight;
      if (count == 0 && $(window).scrollTop() > oTop) {
        $('.tst-number').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 3000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
        });
        count = 1;
      }
    });
  }
  /*-------------------------
  map
  -------------------------*/
  if ($("div").is("#map")) {
    var map_long = $('#map').data('long');
    var map_lat = $('#map').data('lat');
    var map_zoom = $('#map').data('zoom');

    mapboxgl.accessToken = 'pk.eyJ1Ijoic3Rvc2NhciIsImEiOiJja2VpbDE4b2UwbDg3MnNwY2d3YzlvcDV5In0.e26tLedpKwxrkOmPkWhQlg';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/stoscar/ckggs77460wxw19ob8q5wldwf',
      center: [map_long, map_lat],
      zoom: map_zoom
    });

    var marker = new mapboxgl.Marker()
      .setLngLat([map_long, map_lat])
      .addTo(map);
  }
  $('.tst-lock').on('click', function() {
    $('.tst-with-map').toggleClass('tst-active');
    $('.tst-map').toggleClass('tst-active');
    $('.tst-lock').toggleClass('tst-active');
    $('.tst-lock .fas').toggleClass('fa-unlock');
  });

  if ( $('.tst-call-to-action').length ) {
    var divider_el = $('.tst-call-to-action');
    var divider_sec = divider_el.closest('section');

    if ( divider_sec.length ) {
      divider_sec.css('background-color', 'transparent');
      divider_sec.prev().find('.tst-spacer:last').hide();
    }

    var last_section = $('.tst-dynamic-content .elementor-section').last();
    if ( last_section.find('.tst-call-to-action').length ){
      $('.tst-content-box > .tst-content-frame--end').hide();
    }

    var first_section = $('.tst-dynamic-content .elementor-section').first();
    if ( first_section.find('.tst-call-to-action').length ){
      $('.tst-content-box > .tst-content-frame--start').css('background-color', 'transparent');
    }
  }

  if ( $('.tst-woo-breadcrumbs').length ) {
    var bread_ul = $('.tst-woo-breadcrumbs').find('ul');
    $('.tst-breadcrumbs').html( bread_ul.html() );
  }

} )( jQuery );