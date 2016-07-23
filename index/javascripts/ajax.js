/**
 * Created by ctihv on 2016/6/10.
 */
$(document).ready(function() {
    if(!document.getElementById) return false;
    //var txt_new = document.getElementById("#p_new");

    //展示日记
    addtxt();
    function addtxt (){
        //$("#p_new").load('sql_txt/d20160610.html');
        inner = $.ajax({url:"index/sql_txt/d20160610",async:true});
        $("#p_new").html(inner.responseText);
    }
});
