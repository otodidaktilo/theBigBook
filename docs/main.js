$(document).ready(function(){
    
    // window.scrollTop(0);
    let desc= false;
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
            //Another Try
            $("#desButton").click(function(){
                $("p").toggle();
            });
            // $(".desButton").click(function(){

            //     $(".description").toggle();
            //     desc=!desc;
            // })
            
            // $('.desButton').click(function(){
            //     print("I am working")
            //     if(desc == false){
            //         $(".description").show();
            //         desc=!desc;
            //     }else{
            //         $(".description").hide();
            //         desc=!desc;
            //     }
            //     // $(".description").hide();
            //     // description=!description;
            // })
        
        
    })
    // function activateDescription() {
    //     print("i work");
    //     var x = document.getElementById("description");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
    //   }

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
            // if(!desc) { 
            //     $(".description").hide();
            // }

        } else {
            $(".hamburger-menu").hide();
            $(".main-nav").show().css("margin-top", "0px");;
            $(".side-bar").css("position", "static");
            $(".main-content").css("margin-top", "0px").css("padding-top", "0px").css("max-width", "950px");
        }
    }
});