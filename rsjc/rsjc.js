/**
 * Created by CTIHVKE on 2016/7/26.
 */


var canid = document.getElementById("canid");

var canvar;     //canvasjg 对象
var cc;         //canvar。getContext("2d");

var name = "";
var sex = "";
var y = "";
var m = "";
var d = "";
var str = new Array()["111","222","333","444","555","666","777","888","999","000","121212","131313"];


var canvarstar = function(){
    canvar = document.getElementById("canvasjg");
    cc = canvar.getContext("2d");
}


var err = function(){
    canvar.log("sth strong");
}
var rd = function(i){
    return Math.random()*i
}

var gettext = function(){       //取值
    name = document.getElementById("inname").value;
    sex = document.getElementById("insex").value;
    iny =parseInt( document.getElementById("iny").value);
    inm =parseInt( document.getElementById("inm").value);
    ind =parseInt( document.getElementById("ind").value);
}

//   =========给画======
var dw1 = function(stri){       //画线
    cc.font="20px Arial";
    cc.strokeStyle= "#339933";
    cc.strokeText(str[stri],10,50);
}

var dw2 = function(stri){       //填充
    cc.font="20px Arial";
    cc.fillStyle = "#993399";
    cc.fillText(str[stri],20,70);
}

//======控制=====
document.getElementById("stat").addEventListener("click",function(){
    gettext();

    if(name == "" || sex == "" || iny == "" || inm == "" || ind == ""){
        alert("请完整输入信息");
        return;
    }


})

//======控制=====