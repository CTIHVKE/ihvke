/**
 * Created by CTIHVKE on 2016/7/15.
 */
//自动修复破损图像
$('img').on('error',function(){
    $(this).prop('src','../error.jpg');
})
//========初化轮播
$(document).ready(function(){
    $("#myCarousel").carousel('cycle');

    $(document).on("swiperight",function() {    //向右滑动
        $("#myCarousel").carousel('prev');
    });

    $(document).on("swipeleft", function () {   //向左滑动
        $("#myCarousel").carousel('next');
    });

});

//
//$(document).on("pagecreate","#pageone",function(){
//    $("#clickone").on("click",function(){   //点击
//       $(this).hide();
//    });
//    $("#tapone").on("tap",function(){   //点击
//        $(this).hide();
//    });
//    $("#tapholdone").on("taphold",function(){   //长按
//        $(this).hide();
//    });
//    $(document).on("swipe",function(){  //滑动
//        $("#spanone").text("swipe");
//    });
//    $(document).on("swipeleft", function () {   //向左滑动
//        $("#spanone").text("swipeleft");
//    });
//    $(document).on("swiperight",function() {    //向右滑动
//        $("#spanone").text("swiperight");
//    });
//    $(document).on("scrollstart", function () {
//        $("#spanone").text("scrollstart");  //滚屏开始
//    });
//    $(document).on("scrollstop", function () {
//        $("#spanone").text("scrollstop");   //滚屏结束
//    });
//    $(window).on("orientationchange",function(){    //方向改变事件
//
//        if(window.orientation){    //Portrait
//         $("#spanone").text("Portrait");
//            $("*").css({"background-color":"#000","color":"#fff"});
//        }else{  //Landscape
//            $("#spanone").text("Landscape");
//            $("*").css({"background-color":"#fff","color":"#000"});
//        }
//    });
//});