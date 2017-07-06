$(document).ready(function()
   { 
    // color option--tool box
    $(".gear-check").click(function()
     {
    
    $(".color-option").toggle();
    
    });
    
    // start shange color
    
    var colorli=$(".color-option ul li");
    
    colorli
    .eq(0).css("backgroundColor","#7e0000").end()
    .eq(1).css("backgroundColor","#e426d5").end()
    .eq(2).css("backgroundColor","#009aff").end()
    .eq(3).css("backgroundColor","#175818").end()
    .eq(4).css("backgroundColor","#8a6d3b").end()
    
    
    colorli.click(function()
        {
    
            $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    
        });
     
    
});
                 
                
        