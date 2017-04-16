define(["jquery","template","uill","datepicker","language","validate","form"],function($,template,uill){
	uill.setMenu("teacher/list");
	var tc_id=uill.qs("tc_id");
    // 编辑讲师
    if(tc_id){
        $.ajax({
        	type:"get",
        	url:"/api/teacher/edit",
        	data:{tc_id:tc_id},
        	dataType:"json",
        	success:function(data){
                data.result.tInfo="编辑讲师";
                var html=template("teacherEdit",data.result);
                $("#teacher").html(html);
                checkForm('/api/teacher/update')
        	}
        })
    }else {
    	var html=template("teacherEdit",{
    		tInfo:"添加讲师",
    		tc_gender:0
    	})
    	$("#teacher").html(html);
    	checkForm('/api/teacher/add');
    }
})


 function checkForm(url){
        $('#teacherForm').validate({
            sendForm : false,
            valid : function(){
                // 提交表单
                $(this).ajaxSubmit({
                    type : 'post',
                    url : url,
                    dataType : 'json',
                    success : function(data){
                        if(data.code == 200){
                            location.href = '/teacher/list';
                        }
                    }
                });
            },
                eachInvalidField : function(){
                    $(this).closest('.form-group').removeClass('has-success').addClass('has-error');
                },
                eachValidField : function(){
                    $(this).closest('.form-group').removeClass('has-error').addClass('has-success');
                },
            description : {
                tcName : {
                    required : '用户名不能为空'
                },
                tcPass : {
                    required : '密码不能为空',
                    pattern : '只能是六位数字'
                },
                joinDate : {
                    required : '入职日期不能为空'
                }
            }
        });
    }
