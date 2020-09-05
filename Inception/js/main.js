$(document).ready(function()
   { 

  $(".features .owl-carousel").owlCarousel({
      items: 4,
      nav:true,
      loop:true,
      autoplay:true,
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

    
    // login and register
    $("#ooo").click(function(){
      $("#pppp").hide();
    });
    //regester


    
});


$(document).ready(function()
{
    // show matter
    $(".other_matter").click(function(){
        $(".other_matter").hide();
        $(".courses_search_form").show();
    });
    
});


$(document).ready(function()
{
    // show matter
    $("::-webkit-scrollbar").hover(function(){
        $(this).fadeToggle();
    });
    
});

