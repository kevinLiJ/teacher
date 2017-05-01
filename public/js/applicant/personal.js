$(function() {
    var teacherId = window.location.hash.replace('#', '');
    $.ajax({
        url: '/teacher/responseCompanyList',
        type: 'post',
        data: { teacherId: teacherId },
        success: function(resp) {
            if (resp.success) {
                var html = `
                            <ul>
                `
                for (var i = 0; i < resp.data.length; i++) {
                    html += '<li>' + resp.data[i].username + '查看了你的联系方式</li>';
                }
                html += '</ul>';
                $('#personal').html(html);
            } else if (resp.errMsg) {
                alert(resp.errMsg)
            }
        }
    })
})