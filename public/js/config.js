require.config({
    baseUrl : '/public',
    paths : {
        jquery : 'assets/jquery/jquery.min',
        cookie : 'assets/jquery-cookie/jquery.cookie',
        echarts : 'assets/echarts/echarts.min',
        template : 'assets/artTemplate/template',
        nprogress:'assets/nprogress/nprogress',
        overlay : 'js/overlay',
        bootstrap:'assets/bootstrap/js/bootstrap',
        datepicker : 'assets/js/bootstrap-datepicker',
        language : 'assets/locales/bootstrap-datepicker.zh-CN.min',
        validate:"assets/validate/jquery-validate",
        uploadify:"assets/uploadify/jquery.uploadify",
        ckeditor:"assets/ckeditor/ckeditor",
        region:"assets/jquery-region/jquery.region",
        form:"assets/form/jquery.form",
        uill:'js/uill'
        // datepicker:'assets/js/bootstrap-datepicker'
    },
    shim: {
        bootstrap:{
            deps:["jquery"]
        },
        language:{
            deps:["jquery","datepicker"]
        },
        validate : {
            deps : ['jquery']
        },
        uploadify : {
            deps : ['jquery']
        },
        ckeditor : {
            exports : 'CKEDITOR',
            deps : ['jquery']
        }
    }
});