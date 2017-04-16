define(["jquery","template","ckeditor","datepicker","language","region","uploadify","validate","form"],function($,template,CKEDITOR){
    $.ajax({
    	type:"get",
    	url:"/api/teacher/profile",
    	dataType:"json",
    	success:function(data){
    		// console.log(data);
            var html=template("profileTpl",data.result);
            $("#profileInfo").html(html);
            $("#upfile").uploadify({
            	buttonText : '',
                width : 120,
                height : 120,
                fileObjName:'tc_avatar',
                swf : '/public/assets/uploadify/uploadify.swf',
                uploader : '/api/uploader/avatar',
                onUploadSuccess : function(file,data){
                    data = JSON.parse(data);
                    $('.preview img').attr('src',data.result.path);
                }
            })


            $(".hometown").region({
            	 url : '/public/assets/jquery-region/region.json'
            });
            CKEDITOR.replace("ckeditor");

            $("#profileForm").validate({
            	sendForm:false,
            	valid:function(){
            		for(var instance in CKEDITOR.instances){
                        CKEDITOR.instances[instance].updateElement();
                    }
            		$(this).ajaxSubmit({
            			type:"post",
            			url:"/api/teacher/modify",
            			dataType:"json",
            			success:function(data){
            				if(data.code==200){
            					location.href="settings";
            				}
            			}
            		})
            	}
            })
    	}
    })
})
