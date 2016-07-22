/**
 * Created by CTIHVKE on 2016/7/22.
 */
var video = document.getElementById("video");
var context = canvas.getContext("2d");
var errocb = function(){
    console.log("sth srong");
}
if(navigator.getUserMedia){
    navigator.getUserMedia({"video":true},function(stream){
        video.src=stream;
        video.play();
    },errocb);
}else if(navigator.webkitGetUserMedia){
    navigator.webkitGetUserMedia({"video":true},function(stream){
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    },errocb);
}
document.getElementById("paizhao").addEventListener("click",function(){
    context.drawImage(video,0,0,640,480);
})

//×Ô¶¯ÐÞ¸´ÆÆËðÍ¼Ïñ
$('img').on('error',function(){
    $(this).prop('src','../72f082025aafa40f665a4640ac64034f79f0198a.jpg');
})