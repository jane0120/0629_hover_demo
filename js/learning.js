/**
 * Created by jianyujingjing on 2016/7/2.
 */
$(document).ready(function () {
       $(".back").hover(function () {
           $("#left").css({opacity:0,cursor:"pointer"});
           $("#left").css("margin-left",12);
           $("#left").animate({transform: 'translateX(-12px) ', opacity:1},"fast");

           
       },function () {
           $("#left").css("margin-left",-12);
           $("#left").animate({transform: 'translateX(12px) ', opacity:1},"fast");
       });
    
    
    
        $(".menu1").hover(function () {
            // $(".menu1 img:last-child").animate({transform: 'translate(-10px) ', opacity:'.7'},"800");
            $(".menu1").css({cursor:"pointer"});
            $(".menu1 img:last-child").css("margin-left",130);
            $(".menu1 img:last-child").css("margin-top",-95);
            $(".menu1 img:last-child").animate({transform: 'translateY(-20px) ', opacity:1},"800");//fadeINup
            $("#menu1").attr({src: "imgs/menu11.png"}).width("312");

        }, function () {
            $(".menu1 img:last-child").css("margin-top",-75);
            $(".menu1 img:last-child").css("margin-left",90);
            $(".menu1 img:last-child").animate({transform: 'translateY(20px)',opacity:0},"800");
            $("#menu1").attr({src:"imgs/menu1.png"}).width("211");

        });
    $("#menu2").hover(function () {
        $(".menu2").css({cursor:"pointer"});
        $(".menu2 img:last-child").css("margin-left",40);
        $(".menu2 img:last-child").css("margin-top",-80);
        $(".menu2 img:last-child").animate({transform: 'translateY(-20px) ', opacity:1},"800");
        $("#menu2").attr({src: "imgs/menu21.png"}).width("311");
    }, function () {
        $(".menu2 img:last-child").css("margin-left",10);
        $(".menu2 img:last-child").css("margin-top",-65);
        $(".menu2 img:last-child").animate({transform: 'translateY(20px)',opacity:0},"800");
        $("#menu2").attr({src:"imgs/menu2.png"}).width("211");
    });
    $("#menu3").hover(function () {
        $(".menu3").css({cursor:"pointer"});
        $(".menu3 img:last-child").css("margin-left",33);
        $(".menu3 img:last-child").css("margin-top",-100);
        $(".menu3 img:last-child").animate({transform: 'translateY(-20px) ', opacity:1},"800");
        $("#menu3").attr({src: "imgs/menu31.png"}).width("311");
    }, function () {
        $(".menu3 img:last-child").css("margin-left",3);
        $(".menu3 img:last-child").css("margin-top",-70);
        $(".menu3 img:last-child").animate({transform: 'translateY(20px)',opacity:0},"800");
        $("#menu3").attr({src:"imgs/menu3.png"}).width("211");
    });
});


