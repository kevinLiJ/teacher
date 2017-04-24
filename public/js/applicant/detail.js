$(function() {
    var teacherId = location.hash.replace('#', '');
    console.log(teacherId)
    $.ajax({
        url: '/company/queryCompanyInfo1',
        type: 'post',
        data: { id: teacherId },
        success: function(data) {
            var html = `
            <div class="infoTitle-zp">
                <div class="title-time">
                    <h1 class="detail-title">招聘有经验的语文老师</h1>
                    <div class="title-bot">
                        <span class="tb-other">${data.releaseDate}</span>
                    </div>
                </div>
                <div class="companyInfo-zp">
                    <span class="companyName">${data.username}</span>
                </div>
            </div>
            <div class="detail-table clearfix" style="margin-top:10px;">
                <dl class="fl">
                    <dt>
                        <ul>
                            <li>薪资待遇：${data.salary}</li>
                        </ul>
                    </dt>
                    <dd>
                        <ul>
                            <li>学历要求：${data.education}</li>
                        </ul>
                    </dd>
                    <dd>
                        <ul>
                            <li>工作年限：${data.salary}</li>
                        </ul>
                    </dd>
                    <dd>
                        联系方式：${data.phone}
                    </dd>
                </dl>
            </div>
            <div class="applyJob">
                <a class="sq-submiter" href="javascript:void(0);">立即申请</a>
            </div>
            <div class="about-zp">
                <ul class='about-dh'>
                    <li class="current">职位描述</li>
                </ul>
                <div class="about-lr">
                    <div>
                        <div>岗位介绍： <br /> 
                        ${data.positionInfo}
                        </div>
                        <div class="abouts-c">
                            <p class="dt">公司介绍</p>
                            ${data.companyInfo}
                        </div>
                    </div>
                </div>
            </div>
            `
            $('#companyDetail').html(html)
        }
    })
})