$(document).ready(function(){
    
    // window.scrollTop(0);

    let isActive = false;

    resizeElements();

    $(window).resize(function(){
        resizeElements();
    })

    $(window).on("orientationchange", function(){
        resizeElements();
    })
    
    $(".hamburger-menu").click(function(){

        $(".main-nav").toggle();
        isActive=!isActive;
    })


    $(".scroll-to-top").click(function(){

        window.scrollTo(0, 0);
        //$("html").css("animation-name", "scroll-top");

    
            // $("html").animate({scrollTop: 0}, 250);
    })
    // $(".img-container").click(function(){
    //     if($(this).children().css("width") == "300px"){
    //         $(this).children().animate({
    //             width: "800px"
    //             // top: "50%",
    //             // left: "50%"
    //         }, 'slow')
    //     }
    //     else {
    //         $(this).children().animate({
    //             width: "300px",
    //             top: originTop,
    //             left: originLeft
    //         }, 'slow', function(){$(this).children().css("position", "static")} ).css("transform", "translate(0, 0)");

    // }
    // function toggle(it) {
    //     if (it.width == 200)
    //         {it.width = 600;}
    //     else
    //         {it.width = 200;}
    //     }

    var resize = 0 ;
    $(".gallery-item").click(function(){
        
            if(resize == 0){
                $(this).animate(
                    {
                        
                        width: "80%"
                    }, 500);
                    resize = 1; 
                $(this).children('.caption').toggle('slow', function() {
                    
                });
               
            }else{

                $(this).animate(
                    {
                        width: "40%"
                    }, 500);
                    resize=0;
                    $(this).children('.caption').toggle('slow', function() {
                        
                    });
                    
            }
        
       
        
    })


    function calculateWidths() {
        let sideBarWidth = $(".side-bar")[0].offsetWidth;
        let mainWidth = $(".main-content")[0].offsetWidth
    
        let w = sideBarWidth + mainWidth;
        return w;
    }

    function resizeElements(){

        let maxWidth = calculateWidths();

        if(innerWidth < maxWidth){
            $(".hamburger-menu").show();
            $(".side-bar").css("position", "absolute");
            $(".main-content").css("max-width", "1000px");

            if(!isActive) { 
                $(".main-nav").hide();
            }

        } else {
            $(".hamburger-menu").hide();
            $(".main-nav").show().css("margin-top", "0px");;
            $(".side-bar").css("position", "static");
            $(".main-content").css("margin-top", "0px").css("padding-top", "0px").css("max-width", "950px");
        }
    }
});