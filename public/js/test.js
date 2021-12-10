$(function(){
    $.ajax({
        url: 'test.py',
        type: 'post',
        data: 'aoi'
    }).done(function(data){
        console.log(data);
    }).fail(function(){
            console.log('failed');
    });
});
$(document).ready(function(){
    alert("jQueryファイルの読み込み完了でーす。");
    });
    