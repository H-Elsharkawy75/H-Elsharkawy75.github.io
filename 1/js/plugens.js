$(document).ready(function()
   { 
    //علامه البحث اللى فى التليفون xs
    $(".navbar .fa").click(function()
        {
            $(".navbar .form-control").toggle();
        
        });
    
    // loading
    $(".dropdown .drop li a").mouseenter(function()
    {
        $(".choose-loading").show();    
    });
    $(".stop").mouseenter(function()
    {
        $(".choose-loading").hide();
    });
    

    // Social Links
    $(".gear-check").click(function()
     {
    
    $(".social").toggle().css("color","#f00");
    
    });
    ////// scroll top
    var scrollbotton =$(".scroll-top");
    $(window).scroll(function()
    {
        if($(this).scrollTop()>=800)
            {
                scrollbotton.show();
            }
        else
            {
                scrollbotton.hide();
            }
        ////
        $("#scroll-top").click(function()
            {
                $("thi").animate({ scrollTop : 0 }, 600);
            });
    })
    

    
    
   //  $("a").click(function()
    // {
        
        //   $(this).css("color","#0B5D8E");
           
          
    // });
    
    
    
    //index2 صفحه ال
    //----carousel-left
    $(".carousel-left").mouseenter(function()
    {
        $(".read").show(500);
        $(".read").slideUp(500);
    });
        $(".carousel-left").mouseleave(function()
    {
        $(".read").hide(500);
    });
    //----carousel-right
        $(".carousel-right").mouseenter(function()
    {
        $(".readd").show(500);
    });
        $(".carousel-right").mouseleave(function()
    {
        $(".readd").hide(500);
    });
    
    
    
    
    
    
    
            // admin page
        
        $(".gear-checkk-2").click(function()
     {
    
    $(".links").toggle().css("color","#f00");
    
    });
        
    $(".links ul .clilcxc").click(function()
    {
        $(".clilcxc ul li").toggle();
    });
        $(".links ul .clilcxxc").click(function()
    {
        $(".clilcxxc ul li").toggle();
    });

    // end admin page
    
    
        
   });












