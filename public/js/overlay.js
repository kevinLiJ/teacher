/**
 * Created by 董丽茹 on 2017/3/20.
 */
define(["jquery","nprogress"],function($,nprogress){
    $(document).ajaxStart(function(){
        $(".overlayer").show();
    })
    $(document).ajaxStop(function(){
        $(".overlayer").hide();
    })
    nprogress.start();
    nprogress.done();

})