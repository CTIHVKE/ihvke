/**
 * Created by CTIHVKE on 2016/7/22.
 */


//========�����ֲ�
$(document).ready(function(){
    $("#myCarousel").carousel('cycle');

    $(document).on("swiperight",function() {    //���һ���
        $("#myCarousel").carousel('prev');
    });

    $(document).on("swipeleft", function () {   //���󻬶�
        $("#myCarousel").carousel('next');
    });
});