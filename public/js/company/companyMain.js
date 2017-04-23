$(function() {
    $.ajax({
        url: '/teacher/queryTeacherList',
        type: 'get',
        success: function(data) {
            var html = ``
            for (var i = 0; i < data.length - 1; i++) {
                var element = data[i];
                html += `
                    <dl>
                        <dt class='col-lg-2'><a href="">高级数学教师</a></dt>
                        <dd class='col-lg-1'>${element.name}</dd>
                        <dd class='col-lg-1'>${element.sex}</dd>
                        <dd class='col-lg-2'>${element.dateOfBirth}</dd>
                        <dd class='col-lg-2'>${element.workingLife}</dd>
                        <dd class='col-lg-1'>${element.education}</dd>
                        <dd class='col-lg-2'>${element.salaryExpectation}</dd>
                        <dd class='col-lg-1'><a href="/company/comDetail${element.id}">详情</a></dd>
                    </dl> 
                    `
            }
            $('#teacherList').append(html)
        }

    })
})