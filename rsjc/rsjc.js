/**
 * Created by CTIHVKE on 2016/7/26.
 */

var btn_stat = document.getElementById("stat");

var canvar = document.getElementById("canvasjg");
var cc = canvar.getContext("2d");
var name = "";
var sex = "";
var y = "";
var m = "";
var d = "";
var str = new Array["111","222","333","444","555","666","777","888","999","000","121212","131313"];

var err = function(){
    canvar.log("sth strong");
}
var rd = function(i){
    return Math.random()*i
}

var gettext = function(){
    name = document.getElementById("inname");
    sex = document.getElementById("insex");
    iny = document.getElementById("iny");
    inm = document.getElementById("inm");
    ind = document.getElementById("ind");
}