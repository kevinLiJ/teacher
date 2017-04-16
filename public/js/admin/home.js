$(function() {
    $('#sidebarCompany').click(function() {
        $('.sidebar ul li').removeClass("active")
        $(this).addClass('active')
        $('.content_list').toggleClass('hide show');
    })
    $('#sidebarTeacher').click(function() {
        $('.sidebar ul li').removeClass("active")
        $(this).addClass('active')
        $('.content_list').toggleClass('hide show');
    })
})