/**
 * Created by CTIHVKE on 2016/7/22.
 */

//window.addEventListener("load",eventwindowLoaded,false);
//
//var entries = [];
//var curIndex = -1;
//
////���¼�
//function eventwindowLoaded(){
//    loadEntries(1);
//    showNext();
//
//    var dayselection = $("dayselection");
//    dayselection.addEventListener("change",daysSelectionChanged,false);
//}
//
////�ع�ʱ��ı�
//function daysSelectionChanged(e){
//    var target = e.target;
//    loadEntries(target.value);
//
//    clearTextarea();
//    curIndex = -1;
//    showNext();
//    log('�ܹ�'+ entries.length+"������ǰ��"+(curIndex+1)+"��");
//}
//
////��ȡʱ���ڵ�����
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
//// ����
//function saveEntry(){
//    var data_en = $('en').value;
//    var data_zh = $('zh').value;
//    var data = {en:data_en, zh: data_zh};
//    var time = new Date().getTime();
//    if(data_en == '' && data_zh == ''){  /// TODO:����
//        alert('����������Ӣ�ı��');
//    }else{
//        localStorage.setItem(time,JSON.stringify(data));
//    //    update UI
//        log('����ɹ���');
//    //    ReLoad entries
//        loadEntries($('dayselection').value);
//    //    Recovery current entry
//        curIndex --;
//        showNext();
//    }
//}
//
////ɾ������
//function deleleEntry(){
//    var currentEntry = entries[curIndex];
//    if(currentEntry){
//        localStorage.removeItem(currentEntry.time);
//    //    Update UI
//        log('ɾ���ɹ���');
//    //    Reload entries
//        loadEntries($('dayselection').value);
//    //    Go to next entry
//        curIndex --;
//        showNext();
//    }
//    else{
//        log('ɾ��ʧ�ܣ�');
//    }
//}
//
////���ݳ�ʼ��
//function clearStorage(){
//    localStorage.clear();
//    log('���ݳ�ʼ����ɣ�');
//}
//
//
////��һ��
//function showNext(){
//    if(curIndex + 1 <=entries.length-1){
//        curIndex ++;
//        var entry = entries[curIndex];
//        showTextarea(entry.data);
//
//        log('�ܹ�'+ entries.length+"������ǰ��"+(curIndex+1)+"��");
//    }
//}
//
////��һ��
//function showPrevious(){
//    if(curIndex-1 >= 0){
//        curIndex --;
//        var entry = entries[curIndex];
//        showTextarea(entry.data);
//
//        log('�ܹ�'+ entries.length+"������ǰ��"+(curIndex+1)+"��");
//    }
//}
//
////��ʾ��Ϣ
//function showTextarea(data){
//    var target_en = $('en');
//    var trget_zh = $('zh');
//    target_en.value = data.en;
//    target_zh.value = data.zh;
//}
//
////���������ı�
//function clearTextarea(){
//    $('en').value = '';
//    $('zh').value = '';
//}
//
////��ȡid
//function $(id){
//    return document.getElementById(id);
//}
////������Ϣ��ʾ
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
    log('�ܹ�'+entries.length+'��, ��ǰ��'+(curIndex+1)+'��');
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
    if (data_en =='' && data_zh == '') // TODO: ����
    {
        alert('����������Ӣ�ı��!');
    }
    else
    {
        localStorage.setItem(time, JSON.stringify(data));
        // Update UI
        log('����ɹ�!');
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
        log('ɾ���ɹ�!');
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
    log('���ݳ�ʼ�����!');
}

function showNext()
{
    if (curIndex +1 <= entries.length-1)
    {
        curIndex ++;
        var entry = entries[curIndex];
        showTextarea(entry.data);

        log('�ܹ�'+entries.length+'��, ��ǰ��'+(curIndex+1)+'��');
    }
}

function showPrevious()
{
    if (curIndex-1 >= 0)
    {
        curIndex --;
        var entry = entries[curIndex];
        showTextarea(entry.data);

        log('�ܹ�'+entries.length+'��, ��ǰ��'+(curIndex+1)+'��');
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
