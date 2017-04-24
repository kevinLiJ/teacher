$(function() {
    $(function() {
        $('#resume').attr('href', '/applicant/resume' + window.location.hash)
    })
    $.ajax({
        url: '/company/queryCompanyList',
        type: 'get',
        success: function(data) {
            var html = ``
            for (var i = 0; i < data.length - 1; i++) {
                var element = data[i];
                html += `
                        <dl class="box row" style="width:100%;">
                            <dd class="col-lg-3 col-md-4 col-sm-4 col-xs-4">招聘有经验的语文老师</dd>
                            <dd class="col-lg-3 col-md-5 col-sm-5 col-xs-5">${element.username}</dd>
                            <dd class="col-lg-3 col-md-1 col-sm-1 col-xs-1">江阴</dd>
                            <dd class="col-lg-3 col-md-2 col-sm-2 col-xs-2">薪酬：${element.salary}</dd>
                            <dd class="list-content col-lg-9">
                                <p>岗位介绍：${element.positionInfo}
                                </p>
                            </dd>
                            <dd class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <a href="/applicant/detail?#${element.id}" class="jianli">详情</a>
                            </dd>
                        </dl>
                    `
            }
            $('#companyList').append(html)
        }

    })
})