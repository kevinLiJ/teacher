$(function() {
    var remoteUrl = "http://192.168.1.8:3000"
        // $('.carousel').carousel({
        //     interval: 1000
        // })

    $('body').on("click", "#register_save", function() {
        $.ajax({
            type: "post",
            url: "remoteUrl" + "/teacher/register",
            data: $("#formId").serialize(),
            success: function(data) {
                console.log(data);
            }
        })
    })
})