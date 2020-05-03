$(document).ready(function()
   { 

  $(".events .owl-carousel").owlCarousel({
      items: 4,
      nav:true,
      loop:true,
      autoplay:false,
      navText:['<span class="glyphicon glyphicon-chevron-left"></span>','<span class="glyphicon glyphicon-chevron-right"></span>'],
      responsiveClass:true,
      responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            991:{
                items:3,
                nav:true,
                loop:true
            },
            1024:{
                items:4,
                nav:true,
                loop:true
            }
        }
  });

    
});