$(function() {
    $("#other-sel").click(function() {
        $(".other .com-content").toggle();
        return false;
    })
    $("#requireId").validate({
        sendForm: false,
        valid: function() {
            $(this).ajaxSubmit(
                function() {
                    var userId = window.location.hash.replace('#', '');
                    $.ajax({
                        url: '/teacher/submitCompanyInfo',
                        type: 'post',
                        data: $('#requireId').serialize() + '&id=' + userId,
                        success: function(data) {
                            if (data.success) {
                                alert("上传成功")
                            }
                        }
                    })
                    return false;
                }
            )
        },
        eachInvalidField: function() {
            $(this).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        eachValidField: function() {
            $(this).closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        description: {
            positionName: {
                required: '招聘职位不能为空'
            },
            dateBir: {
                required: '发布日期不能为空',
            },
            username: {
                required: '公司名称不能为空'
            },
            CompanyNature: {
                required: '公司性质不能为空'
            },
            companySize: {
                required: '公司规模不能为空'
            },
            phone: {
                required: '联系方式不能为空'
            },
            contactAddress: {
                required: '联系地址不能为空'
            }
        }
    });

})