define(["jquery","template","uill","bootstrap","overlay"],function($,template,uill){
    uill.setMenu(location.pathname);
    $.ajax({
        type:"get",
        url:"/api/teacher",
        dataType:"json",
        success:function(data){
            console.log(data);
            var html=template("templateTpl",{list:data.result});
            $('#teacherList').html(html);
            // 讲师查看功能实现
            $(".teacherBtns").find("a:eq(0)").click(function(){
                var tc_id = $(this).parents('td').attr('data-tcid');
                $.ajax({
                    type:"get",
                    // 接口地址
                    url:"/api/teacher/view",
                    data:{tc_id : tc_id},
                    dataType:"json",
                    success:function(data){
                        if(data.code==200){
                            data.result.tc_hometown=data.result.tc_hometown.replace(/\|/g,"");
                            var html = template('teacherInfoModal',data.result);
                            $('#teacherInfo').html(html);
                            $('#teacherModal').modal();
                        }
                    }

                })
            })
            // 讲师注销和启用功能的实现
            $(".teacherBtns").find("a:eq(2)").click(function(){
                var tc_id=$(this).parent("td").attr("data-tcid");
                var tc_status=$(this).parent("td").attr("data-status");
                var that = this;
                $.ajax({
                    type:"post",
                    url:"/api/teacher/handle",
                    data:{
                        tc_id:tc_id,
                        tc_status:tc_status,
                    },
                    dataType:"json",
                    success:function(data){
                        if(data.result.tc_status==0){
                            $(that).html("启用");
                        }else if(data.result.tc_status==1){
                            $(that).html("注销");
                        }
                        $(that).parent("td").attr('data-status',data.result.tc_status);
                    }

                })
            });
            // //讲师编辑功能的实现
            // $(".teacherBtns").find("a:eq(1)").click(function(){
            //     var tc_id = $(this).parents('td').attr('data-tcid');
            //     $.ajax({
            //         type:"get",
            //         url:"/api/teacher/edit",
            //         data:{tc_id:tc_id},
            //         dataType:"json",
            //         success:function(data){
            //             var html=template("teacherTpl",data.result);
            //             $("#teacher").html(html);
            //         }

            //     })
            // })
        }
    })
    // console.log(111);
})