/**
 * Created by ctihv on 2016/6/9.
 */
//自动修复破损图像
$('img').on('error',function(){
    $(this).prop('src','../72f082025aafa40f665a4640ac64034f79f0198a.jpg');
})

//
//function click(){
//    document.getElementById("li_a").onclick=function(){
//        dispolay_none();
//        document.getElementById("li_left_a").className="li_display_block";
//    }
//    document.getElementById("li_b").onclick=function(){
//        dispolay_none();
//        document.getElementById("li_left_b").className="li_display_block";
//    }
//    document.getElementById("li_c").onclick=function(){
//        dispolay_none();
//        document.getElementById("li_left_c").className="li_display_block";
//    }
//    document.getElementById("li_d").onclick=function(){
//        dispolay_none();
//        document.getElementById("li_left_d").className="li_display_block";
//    }
//    document.getElementById("li_e").onclick=function(){
//        dispolay_none();
//        document.getElementById("li_left_e").className="li_display_block";
//    }
//    document.getElementById("li_f").onclick=function(){
//        dispolay_none();
//        document.getElementById("li_left_f").className="li_display_block";
//    }
//    document.getElementById("li_g").onclick=function(){
//        dispolay_none();
//        document.getElementById("li_left_g").className="li_display_block";
//    }
//    document.getElementById("li_h").onclick=function(){
//        dispolay_none();
//        document.getElementById("li_left_h").className="li_display_block";
//    }
//}
//function dispolay_none(){
//    document.getElementById("li_left_a").className="li_display_none";
//    document.getElementById("li_left_b").className="li_display_none";
//    document.getElementById("li_left_c").className="li_display_none";
//    document.getElementById("li_left_d").className="li_display_none";
//    document.getElementById("li_left_e").className="li_display_none";
//    document.getElementById("li_left_f").className="li_display_none";
//    document.getElementById("li_left_g").className="li_display_none";
//    document.getElementById("li_left_h").className="li_display_none";
//}
//
//function run(){
//    if(!document.getElementById) return false;
//    click();
//}

//var jsontxt =  JSON({"mei":"美","li":"丽","dong":"动","ren":"人","text":"美丽动人"});
//
//function run(){
//    var c=document.getElementById("myCanvas");
//    var ctx=c.getContext("2d");
//    ctx.fillStyle="#FF0000";
//    ctx.fillRect(0, 0 ,500,300);
//
//    ctx.beginPath();
//    ctx.arc(95,50,40,0,2*Math.PI);
//    ctx.stroke();
//
//    ctx.beginPath();
//    ctx.fillStyle="#fff";
//    ctx.fillText("美",100,100);
//    ctx.fillText("丽",120,120);
//    ctx.fillText("动",140,140);
//    ctx.fillText("人",160,160);
//    ctx.fillText("美丽动人",100,180);
//    ctx.fill();
//}



