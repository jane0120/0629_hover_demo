/**
 * Created by jianyujingjing on 2016/7/2.
 */
$(document).ready(function () {
       
       $(".back").hover(function () {
           $("#right").stop().animate({left:1,transform: 'scale(1) all 0.3s ease-in-out ', opacity:1});
           $("#left").stop().animate({left:-40,transform: 'scale(0) all 0.3s ease-in-out', opacity:0});

           
       },function () {
           $("#right").stop().animate({left:40,transform: 'scale(0) all 0.3s ease-in-out', opacity:0});
           $("#left").stop().animate({left:1,transform: 'scale(1) all 0.3s ease-in-out', opacity:1});
       });

    
    
    
        $(".menu1").hover(function () {
            $(".menu1").css({cursor:"pointer"});
            $(".menu1 img:last-child").css("margin-left",90);
            $(".menu1 img:last-child").css("margin-top",-95);
            $(".menu1 img:last-child").stop().animate({transform: 'translateY(-20px) ', opacity:1},"800");//fadeINup
            $("#menu1").attr({src: "imgs/menu11.png"}).width("320");
            $('#menu1').css({'margin-left':-50})

        }, function () {
            $(".menu1 img:last-child").css("margin-top",-75);
            $(".menu1 img:last-child").css("margin-left",90);
            $(".menu1 img:last-child").stop().animate({transform: 'translateY(20px)',opacity:0},"800");
            $("#menu1").attr({src:"imgs/menu1.png"}).width("211");
            $('#menu1').css({'margin-left':0})

        });
    $("#menu2").hover(function () {
        $(".menu2").css({cursor:"pointer"});
        $(".menu2 img:last-child").css("margin-left",40);
        $(".menu2 img:last-child").css("margin-top",-80);
        $(".menu2 img:last-child").stop().animate({transform: 'translateY(-20px) ', opacity:1},"800");
        $("#menu2").attr({src: "imgs/menu21.png"}).width("340");
        $('#menu2').css({'margin-left':-50})
    }, function () {
        $(".menu2 img:last-child").css("margin-left",40);
        $(".menu2 img:last-child").css("margin-top",-65);
        $(".menu2 img:last-child").stop().animate({transform: 'translateY(20px)',opacity:0},"800");
        $("#menu2").attr({src:"imgs/menu2.png"}).width("211");
        $('#menu2').css({'margin-left':0})
    });
    $("#menu3").hover(function () {
        $(".menu3").css({cursor:"pointer"});
        $(".menu3 img:last-child").css("margin-left",33);
        $(".menu3 img:last-child").css("margin-top",-100);
        $(".menu3 img:last-child").stop().animate({transform: 'translateY(-20px) ', opacity:1},"800");
        $("#menu3").attr({src: "imgs/menu31.png"}).width("340");
        $('#menu3').css({'margin-left':-50})
    }, function () {
        $(".menu3 img:last-child").css("margin-left",33);
        $(".menu3 img:last-child").css("margin-top",-70);
        $(".menu3 img:last-child").stop().animate({transform: 'translateY(20px)',opacity:0},"800");
        $("#menu3").attr({src:"imgs/menu3.png"}).width("211");
        $('#menu3').css({'margin-left':0})
    });
});


