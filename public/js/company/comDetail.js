$(function() {
    // 获取url参数的函数
    var hashArr = window.location.hash.replace("#", '').split('|');
    // 当前登录的公司的id
    var companyId = parseInt(hashArr[0]);
    // 当前老师详细信息的id
    var teacherId = parseInt(hashArr[1]);
    $.ajax({
        url: '/teacher/queryTeacherInfo',
        type: 'post',
        data: { id: teacherId },
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
                    <li>期望薪资：${data.salaryExpecation}</li>
                </ul>
                <ul class="s-phone" id="seePhone">
                    <li>查看联系方式</li>
                </ul>
                 <ul class='tel'>
                    <li>${data.phone}</li>
                </ul>
            </div>
            `
            $('#teacherInfo').html(html)
            $('#seePhone').click(function() {
                console.log(111);
                $(".tel").css('display', 'block');
            })
        }
    })


})