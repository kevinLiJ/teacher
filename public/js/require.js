$(function() {
    $("#other-sel").click(function() {
        $(".other .com-content").toggle();
        return false;
    })
    $('#submit').click(function() {
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
    })

})