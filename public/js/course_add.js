/*
    添加课程
*/
define(['jquery','uill','validate','form'],function($,uill){
    uill.setMenu('/course/add');
    var cs_name=$("#cs_name").text();
    $('#createId').validate({
        sendForm : false,
        valid : function(){
            $(this).ajaxSubmit({
                url : '/api/course/create',
                type : 'post',
                data:{
                	cs_name:cs_name,
                },
                dataType:"json",
                success : function(data){
                    if(data.code == 200){
                        location.href = '/course/basic?cs_id=' + data.result.cs_id;
                    }
                }
            });
        }
    });

});