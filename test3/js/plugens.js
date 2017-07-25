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
    
    $(".social").toggle();
    
    });
    
   //  $("a").click(function()
    // {
        
        //   $(this).css("color","#0B5D8E");
           
          
    // });
        
   });