define(["jquery","uill","template"],function($,uill,template){
	uill.setMenu("course/course_list");
	$.ajax({
		type:"get",
		url:"/api/course",
		dataType:"json",
		success:function(data){
            console.log(data);
            var html=template("listTpl",{list:data.result});
            $("#listInfo").html(html);
		}
	})
})