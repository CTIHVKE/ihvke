/**
 * Created by CTIHVKE on 2016/7/15.
 */
//�Զ��޸�����ͼ��
$('img').on('error',function(){
    $(this).prop('src','../error.jpg');
})
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

//
//$(document).on("pagecreate","#pageone",function(){
//    $("#clickone").on("click",function(){   //���
//       $(this).hide();
//    });
//    $("#tapone").on("tap",function(){   //���
//        $(this).hide();
//    });
//    $("#tapholdone").on("taphold",function(){   //����
//        $(this).hide();
//    });
//    $(document).on("swipe",function(){  //����
//        $("#spanone").text("swipe");
//    });
//    $(document).on("swipeleft", function () {   //���󻬶�
//        $("#spanone").text("swipeleft");
//    });
//    $(document).on("swiperight",function() {    //���һ���
//        $("#spanone").text("swiperight");
//    });
//    $(document).on("scrollstart", function () {
//        $("#spanone").text("scrollstart");  //������ʼ
//    });
//    $(document).on("scrollstop", function () {
//        $("#spanone").text("scrollstop");   //��������
//    });
//    $(window).on("orientationchange",function(){    //����ı��¼�
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