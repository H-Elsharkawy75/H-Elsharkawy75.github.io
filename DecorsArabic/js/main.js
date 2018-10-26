$(document).ready(function()
   { 

    // nice scrole

    
    // owl carousel

  $(".owl-carousel").owlCarousel({
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
                items:3,
                nav:true,
                loop:true
            }
        }
  });

    
    
        // fillter

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
    
});





