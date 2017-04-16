$(function() {
    $("#other-sel").click(function() {
        $(".other .com-content").toggle();
        return false;
    })
    $('#submit').click(function() {
        $.ajax({
            url: '/teacher/submitTeacherInfo',
            data: $('#resumeId').serialize(),
            type: 'post',
            success: function(data) {
                console.log(data)
            }
        })
        return false
    })
})