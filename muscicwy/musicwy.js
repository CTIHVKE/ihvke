/**
 * Created by CTIHVKE on 2016/7/17.
 */
//�Զ��޸�����ͼ��
$('img').on('error',function(){
    $(this).prop('src','../error.jpg');
})

//��¼:  login       m-login1 .class(display:block)     ��¼
var login = $("#login");
var mlogin1=$("#m-login1");
login.hover(function() {
        //alert("login");
        mlogin1.css("display","block");
    },function(){
        //alert("nologin");
        mlogin1.css("display","none");
    }
);

//ul : n-nav            id[n-nav] li sub            �ڲ˵���
var nnavli1 = $("#n-nav li:nth-child(1)");
var nnavli2 = $("#n-nav li:nth-child(2)");
var nnavli3 = $("#n-nav li:nth-child(3)");
var nnavli4 = $("#n-nav li:nth-child(4)");

var cl = function(e){
    switch (e){
        case 1:
            nnavli2.children(1).removeClass("cor");
            nnavli3.children(1).removeClass("cor");
            nnavli4.children(1).removeClass("cor");
            $("#sub1").addClass("cor");
            break;
        case 2:
            nnavli1.children(1).removeClass("cor");
            nnavli3.children(1).removeClass("cor");
            nnavli4.children(1).removeClass("cor");
            $("#sub2").addClass("cor");
            break;
        case 3:
            nnavli1.children(1).removeClass("cor");
            nnavli2.children(1).removeClass("cor");
            nnavli4.children(1).removeClass("cor");
            $("#sub3").addClass("cor");
            break;
        case 4:
            nnavli1.children(1).removeClass("cor");
            nnavli3.children(1).removeClass("cor");
            nnavli2.children(1).removeClass("cor");
            $("#sub4").addClass("cor");
            break;
        default:
            nnavli1.children(2).removeClass("cor");
            nnavli2.children(2).removeClass("cor");
            nnavli3.children(2).removeClass("cor");
            nnavli4.children(2).removeClass("cor");
    }
}
nnavli1.click(function(){
        //alert("nnavli1");
        cl(1);
        return false;
    }
);
nnavli2.click(function(){
        //alert("nnavli2");
        cl(2);
        return false;
    }
);
nnavli3.click(function(){
        //alert("nnavli3");
        cl(3);
        return false;
    }
);
nnavli4.click(function(){
        //alert("nnavli4");
        cl(4);
        return false;
    }
);

//ul : g-nav2           id[g-nav2]  li a  .addclass(z-slt)  ��˵���

var gnav1 = $("#g-nav2 ul li:nth-child(1)");
var gnav2 = $("#g-nav2 ul li:nth-child(2)");
var gnav3 = $("#g-nav2 ul li:nth-child(3)");
var gnav4 = $("#g-nav2 ul li:nth-child(4)");
var gnav5 = $("#g-nav2 ul li:nth-child(5)");
var gnav6 = $("#g-nav2 ul li:nth-child(6)");
var clgnav = function(e){
    switch (e){
        case 1:
            gnav2.children().removeClass("z-slt");
            gnav3.children().removeClass("z-slt");
            gnav4.children().removeClass("z-slt");
            gnav5.children().removeClass("z-slt");
            gnav6.children().removeClass("z-slt");
            gnav1.children().addClass("z-slt");
            break;
        case 2:
            gnav1.children().removeClass("z-slt");
            gnav3.children().removeClass("z-slt");
            gnav4.children().removeClass("z-slt");
            gnav5.children().removeClass("z-slt");
            gnav6.children().removeClass("z-slt");
            gnav2.children().addClass("z-slt");
            break;
        case 3:
            gnav2.children().removeClass("z-slt");
            gnav1.children().removeClass("z-slt");
            gnav4.children().removeClass("z-slt");
            gnav5.children().removeClass("z-slt");
            gnav6.children().removeClass("z-slt");
            gnav3.children().addClass("z-slt");
            break;
        case 4:
            gnav2.children().removeClass("z-slt");
            gnav3.children().removeClass("z-slt");
            gnav1.children().removeClass("z-slt");
            gnav5.children().removeClass("z-slt");
            gnav6.children().removeClass("z-slt");
            gnav4.children().addClass("z-slt");
            break;
        case 5:
            gnav2.children().removeClass("z-slt");
            gnav3.children().removeClass("z-slt");
            gnav4.children().removeClass("z-slt");
            gnav1.children().removeClass("z-slt");
            gnav6.children().removeClass("z-slt");
            gnav5.children().addClass("z-slt");
            break;
        case 6:
            gnav2.children().removeClass("z-slt");
            gnav3.children().removeClass("z-slt");
            gnav4.children().removeClass("z-slt");
            gnav5.children().removeClass("z-slt");
            gnav1.children().removeClass("z-slt");
            gnav6.children().addClass("z-slt");
            break;
        default:
            gnav2.children().removeClass("z-slt");
            gnav3.children().removeClass("z-slt");
            gnav4.children().removeClass("z-slt");
            gnav5.children().removeClass("z-slt");
            gnav6.children().removeClass("z-slt");
            gnav1.children().removeClass("z-slt");
    }
}
gnav1.click(function(){
    //alert("gnav1");
    clgnav(1);
    return false;
});
gnav2.click(function(){
    //alert("gnav1");
    clgnav(2);
    return false;
});
gnav3.click(function(){
    //alert("gnav1");
    clgnav(3);
    return false;
});
gnav4.click(function(){
    //alert("gnav1");
    clgnav(4);
    return false;
});
gnav5.click(function(){
    //alert("gnav1");
    clgnav(5);
    return false;
});
gnav6.click(function(){
    //alert("gnav1");
    clgnav(6);
    return false;
});

//�ֲ� 1           id:  rbl        id: rbr       img:  rbimg .class(src,"�ı�")     id: rbbg    .css(background-image,"url('muscicwy/style/images/img/list/-iVsMiDLA8E1C90vmAY0gw==_1417270501408429.jpg')")
//�ֲ� 1           id: dots >a .addclass(z-slt)    /   removerclass(z-slt)
var i=0;        //�ֲ�  �±�
var l = 7;      //���鳤��
var idred = 0;  //��ɫ�� �±�
var bgtime = 500;       //���� �仯 �ٶ�
var imgtime = 4000;     //ͼƬ �仯 �ٶ�


var rbbgurl = new Array(l);     //=======����
rbbgurl[0] = "images/img/list/HM-AiAwwbaReP1llC7bszA==_3252355404316853.jpg";
rbbgurl[1] = "images/img/list/kYkA-d9uDkokbjXwcyjpeg==_1415071477690876.jpg";
rbbgurl[2] = "images/img/list/-iVsMiDLA8E1C90vmAY0gw==_1417270501408429.jpg";
rbbgurl[3] = "images/img/list/29RCG8hkuFggtq5yfneHkA==_3252355405429373.jpg";
rbbgurl[4] = "images/img/list/F9ofY394yqTj61SU4aIHMQ==_1404076361722166.jpg";
rbbgurl[5] = "images/img/list/XWnTOKW0PtVfESYCtdAOpA==_1383185640416892.jpg";
rbbgurl[6] = "images/img/list/FaXbZiwts0ywz4hS4TVmCA==_2946691190428891.jpg";
rbbgurl[7] = "images/img/list/sVcsyWgtpL-6BHdwCb0_GQ==_3412884108304927.jpg";

var rbimgurl = new Array(l);        //=====ͼƬ
rbimgurl[0] = "images/img/list/0ElaknCrBlCrHLem2jeOzw==_3394192409054137.jpg";
rbimgurl[1] = "images/img/list/0xq0n8YTfYStD4UNGejxMQ==_1400777826849846.jpg";
rbimgurl[2] = "images/img/list/4GxwaCJPg9FEtNfM6fZwfA==_3394192410645891.jpg";
rbimgurl[3] = "images/img/list/bFf6En2GydBMXHFpeiao5A==_3419481170226230.jpg";
rbimgurl[4] = "images/img/list/dbg7M0BhWj-GBqSWO7JaeA==_3419481170226236.jpg";
rbimgurl[5] = "images/img/list/G1P03zkzV5aNGYjUrgR7-Q==_3412884106594002.jpg";
rbimgurl[6] = "images/img/list/wzbiaJOtXFp0mnVKsYksTg==_1382086128833855.jpg";
rbimgurl[7] = "images/img/list/xysZAeHT5eSmZp5289B9bQ==_1400777826849842.jpg";

//======�ı�HTML  �Ĳ���=====
function rbchange(i){
    $("#rbbg").animate({"opacity":0.1},bgtime);
    redotred();
    setTimeout(function(){
        document.getElementById("rbbg").style.backgroundImage="url('"+rbbgurl[i]+"')";  //js
        document.getElementById("rbimg").src=rbimgurl[i];   //js
        addotred(i)
    },bgtime);

    $("#rbbg").animate({"opacity":1},bgtime);
}

//        ��ɫ��  �ı�
function redotred(){      //�Ƴ�
    if( $("#dots a").hasClass("z-slt")){
        $("#dots a").removeClass("z-slt");
    }
}
function addotred(idt){   //���
    $("#dots a").each(function(){
        //s+=""+$(this).index();
        if($(this).index()==idt){
            $(this).addClass("z-slt");
        }
    });
}



//======��һ��====
function left(i){
    if(i>0){
        i-=1;
        //alert(i);
    }else{
        i=rbbgurl.length-1;
        //alert(i);
    }
    this.i=i;
    rbchange(i);
}
//=========��һ��=====
function right(i){
    if(i<rbbgurl.length-1){
        i+=1;
        //alert(i);
    }else{
        i=0;
        //alert(i);
    }
    this.i=i;
    rbchange(i);
}
//==========�Զ��ֲ�����
var t = setInterval(function(){
    right(i);
},imgtime);

$("#rbbg").hover(function(){
    clearInterval(t);
},function(){
    t = setInterval(function(){
        right(i);
    },imgtime);
});
//============����ֲ�=================
var rbl = $("#rbl");
var rbr = $("#rbr");

var rblr = 1;   //���� ���ֻ�ܵ�������ٵ����Ч
rbl.click(function(){
    if(rblr==1){
        rblr = 0;
        left(i);
        setTimeout(function(){rblr = 1},bgtime+100);
    }
});
rbr.click(function(){
    if(rblr==1) {
        rblr = 0;
        right(i);
        setTimeout(function(){rblr = 1},bgtime+100);
    }
});
//=========��  ��� ����¼�==========
$("#dots a").click(function(){
    //alert($(this).index());
    if(rblr==1) {
        rblr = 0;
        i = $(this).index();
        rbchange($(this).index());
        setTimeout(function(){rblr = 1},bgtime+100);
    }
});

//var dotsa = document.getElementById("dots");
//$("#dots a").each(function(){
//
//    $(this).click(function(){
//        idred = parseInt($(this).index());
//        //alert(idd);
//        rbchange(idred);
//        $(this).addClass("z-slt");
//        return;
//    });
//});




//===================================

//�ֲ�    2           id: lnewl       id: lnewr
//�ֲ�    2            id auto-id-ul1/2/3/4     .class(left,0px)    .class(left,645px)    .class(left,-645px)    .class(left,-645px)
var rtime = 1300;        //�ֲ��ٶ�
function listnewl(ln){
    switch (ln){
        case 1:
            $("#auto-id-ul4").css({"display":"none","left":"-645px"});
            //$("#auto-id-ul4").animate({"left":-645},2000);
            $("#auto-id-ul2").animate({"left":645},rtime);
            $("#auto-id-ul1").animate({"left":0},rtime);
            $("#auto-id-ul4").css({"display":"block"});
            break;
        case 2:
            $("#auto-id-ul1").css({"display":"none","left":"-645px"});
            $("#auto-id-ul3").animate({"left":645},rtime);
            //$("#auto-id-ul1").animate({"left":-645},2000);
            $("#auto-id-ul2").animate({"left":0},rtime);
            $("#auto-id-ul1").css({"display":"block"});
            break;
        case 3:
            $("#auto-id-ul2").css({"display":"none","left":"-645px"});
            $("#auto-id-ul4").animate({"left":645},rtime);
            //$("#auto-id-ul2").animate({"left":-645},2000);
            $("#auto-id-ul3").animate({"left":0},rtime);
            $("#auto-id-ul2").css({"display":"block"});
            break;
        case 4:
            $("#auto-id-ul3").css({"display":"none","left":"-645px"});
            $("#auto-id-ul1").animate({"left":645},rtime);
            //$("#auto-id-ul3").animate({"left":-645},2000);
            $("#auto-id-ul4").animate({"left":0},rtime);
            $("#auto-id-ul3").css({"display":"block"});
            break;
    }
}
function listnewr(rn){
    switch (rn){
        case 1:
            $("#auto-id-ul2").css({"display":"none","left":"645px"});
            //$("#auto-id-ul2").animate({"left":-645},2000);
            $("#auto-id-ul4").animate({"left":-645},rtime);
            $("#auto-id-ul1").animate({"left":0},rtime);
            $("#auto-id-ul2").css({"display":"block"});
            break;
        case 2:
            $("#auto-id-ul3").css({"display":"none","left":"645px"});
            $("#auto-id-ul1").animate({"left":-645},rtime);
            //$("#auto-id-ul3").animate({"left":645},2000);
            $("#auto-id-ul2").animate({"left":0},rtime);
            $("#auto-id-ul3").css({"display":"block"});
            break;
        case 3:
            $("#auto-id-ul4").css({"display":"none","left":"645px"});
            $("#auto-id-ul2").animate({"left":-645},rtime);
            //$("#auto-id-ul4").animate({"left":645},2000);
            $("#auto-id-ul3").animate({"left":0},rtime);
            $("#auto-id-ul4").css({"display":"block"});
            break;
        case 4:
            $("#auto-id-ul1").css({"display":"none","left":"645px"});
            //$("#auto-id-ul2").animate({"left":-645},2000);
            $("#auto-id-ul3").animate({"left":-645},rtime);
            $("#auto-id-ul4").animate({"left":0},rtime);
            $("#auto-id-ul1").css({"display":"block"});
            break;
    }
}
var linew = 1;      //��ʼ �ֲ��±�

var lri = 1;      //���� ����
$("#lnewl").click(function(){
    if(lri==1){
        lri = 0;
        if(linew>1) {
            linew -= 1;
        }else{
            linew = 4;
        }
        listnewl(linew);
        setTimeout(function(){lri=1;},rtime);
    }
});
$("#lnewr").click(function(){
    if(lri==1){
        lri = 0;
        if(linew<4) {
            linew += 1;
        }else{
            linew = 1
        }
        listnewr(linew);
        setTimeout(function(){lri=1;},rtime);
    }
});
$("#album-roller .u-cover").each(function(){
    $(this).hover(function () {
        $(this).children(".f-alpha").css("display", "block");
    }, function () {
        $(this).children(".f-alpha").css("display", "none");
    });
})


//========XXX//�� XXX   id:
$("#top-flag li.z-hvr").each(function(){
    $(this).hover(function(){
        $(this).children(".oper").css("display","block");
    },function(){
        $(this).children(".oper").css("display","none");
    });
});


//============����

//var GUserAcc={seriesStatus:2};
//(function(){
//    var topbar = document.getElementById('g_btmbar'),
//        scrollBarWidth = document.body.clientWidth - topbar.clientWidth;
//    topbar.style.width = topbar.clientWidth+'px';
//    topbar.className = 'g-topbar';
//    if(window.addEventListener){
//        window.addEventListener('resize', onResize)
//    }else{
//        window.attachEvent('onresize', onResize)
//    }
//    function onResize(){
//        topbar.style.width = (document.body.clientWidth-scrollBarWidth)+'px';
//    };
//})();



//==========audio======
//����url
var musurl = new Array();
musurl[0] = "music/���鹫Ԣ������.mp3";
musurl[1] = "music/�ܽ���������Ļ�.mp3";
musurl[2] = "music/�ܽ��׵���.mp3";
musurl[3] = "music/ר����ʹ.mp3";
musurl[4] = "music/�ܽ��������.mp3";
musurl[5] = "music/���������.mp3";
musurl[6] = "music/���.mp3";
var musrlen =parseInt(musurl.length)-1;   //��������±�

//��ȡ����ʱ��

function gettimelen(obj){
    //alert(audio.currentTime + "��ȡ����ʱ��");
    $("#nowtime").html(audio.currentTime) ;
}
function gettimezo(obj){
    //alert(audio.duration + "��ȡ����ʱ��");
    $("#mydura").html(audio.duration) ;
}

//��ȡ����
var musicloa = 0;
function getmusicloa(){
    this.musicloa = audio.volume;
}
function muted(){   //���� ����
    if(audio.muted){
        audio.muted = false;
    }else{
        audio.muted = true;
    }
}
$(".icn-vol").click(function(){
    muted();
});

function nxtzd(obj){
    if(audio.ended){
        playnxt(this);
    }
    //gettimelen(this);
    //gettimezo(this);
}

//����
function playoper(id,obj){
    nxtzd(this);
    if(audio.paused){
        audio.play();
        //this.css({"background-positionx":"0px","background-positiony":"0px"});
        return;
    }
    audio.pause();
}
function chagemusic(cm){
    if(audio.played){
        audio.pause();
    }
    audio.src=musurl[cm];
    nxtzd(this);
    audio.play();
}
//��һ��
var chagm = 0;
function playhvr(id){
    //alert(chagm);
    if(chagm>0){
        chagm-=1;
    }else{
        chagm = musrlen;
    }
    chagemusic(chagm);
    return;
}
//��һ��
function playnxt(id){
    //alert(chagm);
    if(chagm<musrlen){
        chagm+=1;
    }else{
        chagm = 0;
    }
    chagemusic(chagm);
    return;
}
//ѭ��
var suhual = 0;
function loop(obj){
       if(audio.loop) {
           audio.loop = false;
       }
    audio.loop = true;
}





