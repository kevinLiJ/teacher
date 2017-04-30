/**
 * Created by 董丽茹 on 2017/3/20.
 */



function Click(id1, id2, ele1, ele2) {
    id1.click(function() {
        id2.css("display", "block");
        ele1.click(function() {
            ele2.html($(this).html());
            id2.css("display", "none");
        })
    })
}
Click($("#sal"), $("#salary"), $("#salary ul li"), $(".s1"));
Click($("#rec"), $("#record"), $("#record ul li"), $(".r3"));
Click($("#job"), $("#jobTime"), $("#jobTime ul li"), $(".j1"));

function mouseLev(id) {
    id.mouseleave(function() {
        $(this).css("display", "none");
    })
}
mouseLev($("#salary"));
mouseLev($("#record"));
mouseLev($("#jobTime"));

$("#other-sel").click(function() {
    $(".other .com-content").toggle();
    return false;

})
$("#man").click(function() {
    $(this).addClass("selected");
    $("#woman").removeClass("selected");
    $('#txtSex').val('male');
})
$("#woman").click(function() {
    $(this).addClass("selected");
    $("#man").removeClass("selected");
    $('#txtSex').val('female');
})

$("#submit").click(function() {
    $("#man").css("display", "none");
    $("#woman").css("display", "none");
})
$("#resumeId").validate({
    sendForm: false,
    valid: function() {
        $(this).ajaxSubmit({

        })
    },
    eachInvalidField: function() {
        $(this).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    eachValidField: function() {
        $(this).closest('.form-group').removeClass('has-error').addClass('has-success');
    },
    description: {
        tcName: {
            required: '姓名不能为空'
        },
        dateBir: {
            required: '出生年份不能为空'
        },
        tel: {
            required: '手机号不能为空'
        }
    }
});

$("#submit").click(function() {
    var userId = window.location.hash.replace('#', '');
    $.ajax({
        url: '/teacher/submitTeacherInfo',
        type: 'post',
        data: $('#resumeId').serialize() + '&id=' + userId,
        success: function(data) {
            if (data.success) {
                alert('保存成功')
            }
        }
    })
    return false;
})