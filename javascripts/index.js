/**
 * Created by ctihv on 2016/6/7.
 */

$(document).ready(function(){
    bt_run();
    function bt_run(){
        $("#bt_left").click(
            function () {
                $("#img_ul").animate({left:"2"});
            }
        );
        $("#bt_right").click(
            function () {
                $("#img_ul").animate({left:"-408"});
            }
        );
    }
});
