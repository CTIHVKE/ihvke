/**
 * Created by CTIHVKE on 2016/7/22.
 */


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