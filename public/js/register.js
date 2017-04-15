/**
 * Created by 董丽茹 on 2017/3/16.
 */
function test(id,id2,text){
    id.blur(function(){
        var val=$(this).val();
        if(val==""){
            console.log(111);
            id2.html(""+text+"不能为空哦!");
            id2.css("color","red");
        }else {
            id2.html("");
        }
    })
}
test($("#recipient-name"),$("#dv1"),"用户名");
test($("#recipient-password"),$("#dv3"),"密码");
test($("#recipient-pwd"),$("#dv4"),"确认密码");
 test($("#recipient-tel"),$("#dv2"),"手机号");
$("#recipient-tel").blur(function(){
    // console.log($(this).val()=="");
    if(!$(this).val()==""){
            var reg = /^1[3|4|5|7|8][0-9]{9}$/;
            if(!reg.test($(this).val()))
            {
               $("#dv2").html("请输入正确格式的手机号哦！");
               $("#dv2").css("color","red");
            }
    }
});
$("#recipient-pwd").blur(function(){
    if($("#recipient-pwd").val()==$("#recipient-password").val()){
        $("#dv4").html("");
    }else {
        $("#dv4").html("两次输入密码不一致，请再次确认密码");
        $("#dv4").css("color","red");
        $(this).val("",'');
    }
})

$("#close").on("click",function(){
    $("#recipient-name").val("","");
    $("#recipient-tel").val("","");
    $("#recipient-password").val("","");
    $("#recipient-pwd").val("","");
    $("#dv1").html("");
    $("#dv2").html("");
    $("#dv3").html("");
    $("#dv4").html("");
})
$("#save").on("click",function(){
    $("#recipient-name").trigger("blur");
    $("#recipient-tel").trigger("blur");
    $("#recipient-password").trigger("blur");
    $("#recipient-pwd").trigger("blur");
if(!$('#dv1').html()&&!$('#dv2').html()&&!$('#dv3').html()&&!$('#dv4').html()){
    $("#close").trigger("click");
}
})
