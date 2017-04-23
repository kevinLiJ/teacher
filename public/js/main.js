$(function() {
    $.ajax({
        url: '/administrator/queryCompanyInfo',
        type: 'get',
        success: function(data) {
            console.log(data)
        }

    })
})