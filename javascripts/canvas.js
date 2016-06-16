/**
 * Created by ctihv on 2016/6/9.
 */


function click(){
    document.getElementById("li_a").onclick=function(){
        dispolay_none();
        document.getElementById("li_left_a").className="li_display_block";
    }
    document.getElementById("li_b").onclick=function(){
        dispolay_none();
        document.getElementById("li_left_b").className="li_display_block";
    }
    document.getElementById("li_c").onclick=function(){
        dispolay_none();
        document.getElementById("li_left_c").className="li_display_block";
    }
    document.getElementById("li_d").onclick=function(){
        dispolay_none();
        document.getElementById("li_left_d").className="li_display_block";
    }
    document.getElementById("li_e").onclick=function(){
        dispolay_none();
        document.getElementById("li_left_e").className="li_display_block";
    }
    document.getElementById("li_f").onclick=function(){
        dispolay_none();
        document.getElementById("li_left_f").className="li_display_block";
    }
    document.getElementById("li_g").onclick=function(){
        dispolay_none();
        document.getElementById("li_left_g").className="li_display_block";
    }
    document.getElementById("li_h").onclick=function(){
        dispolay_none();
        document.getElementById("li_left_h").className="li_display_block";
    }
}
function dispolay_none(){
    document.getElementById("li_left_a").className="li_display_none";
    document.getElementById("li_left_b").className="li_display_none";
    document.getElementById("li_left_c").className="li_display_none";
    document.getElementById("li_left_d").className="li_display_none";
    document.getElementById("li_left_e").className="li_display_none";
    document.getElementById("li_left_f").className="li_display_none";
    document.getElementById("li_left_g").className="li_display_none";
    document.getElementById("li_left_h").className="li_display_none";
}

function run(){
    if(!document.getElementById) return false;
    click();
}