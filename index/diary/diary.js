/**
 * Created by CTIHVKE on 2016/7/22.
 */

//window.addEventListener("load",eventwindowLoaded,false);
//
//var entries = [];
//var curIndex = -1;
//
////绑定事件
//function eventwindowLoaded(){
//    loadEntries(1);
//    showNext();
//
//    var dayselection = $("dayselection");
//    dayselection.addEventListener("change",daysSelectionChanged,false);
//}
//
////回顾时间改变
//function daysSelectionChanged(e){
//    var target = e.target;
//    loadEntries(target.value);
//
//    clearTextarea();
//    curIndex = -1;
//    showNext();
//    log('总共'+ entries.length+"个，当前第"+(curIndex+1)+"个");
//}
//
////读取时间内的数据
//function loadEntries(days){
//    var now = new Date().getTime();
//    var arr = [];
//    for(var i=0;i<localStorage.length;i++){
//        var time = localStorage.key(i);
//        var daysBetween = (now - time)/24/60/60/1000;
//    //    console.log(daysBetween);
//        if(daysBetween <= days){
//            var value = JSON.parse(localStorage.getItem(time));
//            var entry = {time:time,data:value};
//            arr.push(entry);
//        }
//    }
//    entries = arr;
//}
//
//// 保存
//function saveEntry(){
//    var data_en = $('en').value;
//    var data_zh = $('zh').value;
//    var data = {en:data_en, zh: data_zh};
//    var time = new Date().getTime();
//    if(data_en == '' && data_zh == ''){  /// TODO:正则
//        alert('必须输入中英文表达');
//    }else{
//        localStorage.setItem(time,JSON.stringify(data));
//    //    update UI
//        log('保存成功！');
//    //    ReLoad entries
//        loadEntries($('dayselection').value);
//    //    Recovery current entry
//        curIndex --;
//        showNext();
//    }
//}
//
////删除数据
//function deleleEntry(){
//    var currentEntry = entries[curIndex];
//    if(currentEntry){
//        localStorage.removeItem(currentEntry.time);
//    //    Update UI
//        log('删除成功！');
//    //    Reload entries
//        loadEntries($('dayselection').value);
//    //    Go to next entry
//        curIndex --;
//        showNext();
//    }
//    else{
//        log('删除失败！');
//    }
//}
//
////数据初始化
//function clearStorage(){
//    localStorage.clear();
//    log('数据初始化完成！');
//}
//
//
////下一个
//function showNext(){
//    if(curIndex + 1 <=entries.length-1){
//        curIndex ++;
//        var entry = entries[curIndex];
//        showTextarea(entry.data);
//
//        log('总共'+ entries.length+"个，当前第"+(curIndex+1)+"个");
//    }
//}
//
////上一个
//function showPrevious(){
//    if(curIndex-1 >= 0){
//        curIndex --;
//        var entry = entries[curIndex];
//        showTextarea(entry.data);
//
//        log('总共'+ entries.length+"个，当前第"+(curIndex+1)+"个");
//    }
//}
//
////显示信息
//function showTextarea(data){
//    var target_en = $('en');
//    var trget_zh = $('zh');
//    target_en.value = data.en;
//    target_zh.value = data.zh;
//}
//
////清除输入框文本
//function clearTextarea(){
//    $('en').value = '';
//    $('zh').value = '';
//}
//
////获取id
//function $(id){
//    return document.getElementById(id);
//}
////错误信息提示
//function log(msg){
//    var target = document.getElementById("msg");
//    target.innerHTML = msg;
//}


//=====================================================

window.addEventListener("load", eventWindowLoaded, false);

var entries = [];
var curIndex = -1;

function eventWindowLoaded()
{
    loadEntries(1);
    showNext();

    var dayselection = $("dayselection");
    dayselection.addEventListener("change", daysSelectionChanged, false);
}

function daysSelectionChanged(e)
{
    var target = e.target;
    loadEntries(target.value);

    clearTextarea();
    curIndex = -1;
    showNext();
    log('总共'+entries.length+'个, 当前第'+(curIndex+1)+'个');
}

function loadEntries(days)
{
    var now = new Date().getTime();
    var arr = [];
    for(var i=0; i<localStorage.length; i++)
    {
        var time = localStorage.key(i);
        var daysBetween = (now - time)/24/60/60/1000;
        // console.log(daysBetween);
        if (daysBetween <= days)
        {
            var value = JSON.parse(localStorage.getItem(time));
            var entry = {time: time, data: value};
            arr.push(entry);
        }
    }
    entries = arr;
}

function saveEntry()
{
    var data_en = $('en').value;
    var data_zh = $('zh').value;
    var data = {en: data_en, zh: data_zh};
    var time = new Date().getTime();
    if (data_en =='' && data_zh == '') // TODO: 正则
    {
        alert('必须输入中英文表达!');
    }
    else
    {
        localStorage.setItem(time, JSON.stringify(data));
        // Update UI
        log('保存成功!');
        // ReLoad entries
        loadEntries($('dayselection').value);
        // Recovery current entry
        curIndex --;
        showNext();
    }
}

function deleteEntry()
{
    var currentEntry = entries[curIndex];
    if (currentEntry)
    {
        localStorage.removeItem(currentEntry.time);
        // Update UI
        log('删除成功!');
        // Reload entries
        loadEntries($('dayselection').value);
        // Go to next entry
        curIndex --;
        showNext();
    }
}

function clearStorage()
{
    localStorage.clear();
    log('数据初始化完成!');
}

function showNext()
{
    if (curIndex +1 <= entries.length-1)
    {
        curIndex ++;
        var entry = entries[curIndex];
        showTextarea(entry.data);

        log('总共'+entries.length+'个, 当前第'+(curIndex+1)+'个');
    }
}

function showPrevious()
{
    if (curIndex-1 >= 0)
    {
        curIndex --;
        var entry = entries[curIndex];
        showTextarea(entry.data);

        log('总共'+entries.length+'个, 当前第'+(curIndex+1)+'个');
    }
}

function showTextarea(data)
{
    var target_en = $('en');
    var target_zh = $('zh');
    target_en.value = data.en;
    target_zh.value = data.zh;
}

function clearTextarea()
{
    $('en').value = '';
    $('zh').value = '';
}

function $(id)
{
    return document.getElementById(id);
}

function log(msg)
{
    var target = document.getElementById('msg');
    target.innerHTML = msg;
}
