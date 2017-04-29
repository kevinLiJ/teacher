$(function() {
    // 设置跳转招聘要求的地址
    $('#require').attr('href', '/company/require' + window.location.hash);
    // 页面渲染的地址
    $.ajax({
        url: '/teacher/queryTeacherList',
        type: 'get',
        success: function(data) {
            var html = ``;
            for (var i = 0; i < data.length; i++) {
                var element = data[i];
                html += `
                    <dl>
                        <dt class='col-lg-2'><a href="">高级数学教师</a></dt>
                        <dd class='col-lg-2'>${element.name}</dd>
                        <dd class='col-lg-1'>${element.sex}</dd>
                        <dd class='col-lg-2'>${element.workingLife}</dd>
                        <dd class='col-lg-2'>${element.education}</dd>
                        <dd class='col-lg-2'>${element.salaryExpectation}</dd>
                        <dd class='col-lg-1'><a href="/company/comDetail${window.location.hash}|${element.id}">详情</a></dd>
                    </dl> 
                    `
            }
            $('#teacherList').append(html)
        }

    })
})