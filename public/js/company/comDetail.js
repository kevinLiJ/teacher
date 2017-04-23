$(function() {
    $.ajax({
        url: '/teacher/queryTeacherInfo',
        type: 'post',
        data: { id: 13 },
        success: function(data) {
            var html = `
            <div class="personInfo">
                <h2 class="name"><span style="float:left;">${data.name}</span>&nbsp;&nbsp;<span>${data.sex}</span>
                </h2>
                <ul class="info">
                    <li class="">${data.education}</li>
                    <li class="noborder">${data.workingLife}</li>
                </ul>
                <div class="youdian">
                    自我介绍 </br>
                    ${data.selfIntroduction}
                </div>
                <ul class="hope">
                    <li>期望薪资：${data.salaryExpectation}</li>
                </ul>
                <ul class="s-phone" id="seePhone">
                    <li>查看联系方式</li>
                </ul>
            </div>
            `
            $('#teacherInfo').html(html)
        }
    })
})