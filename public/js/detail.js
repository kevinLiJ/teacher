try {
    cpro_id = null,
        function() {
            var e;
            e = window._SF_ && window._SF_._global_ && window._SF_._global_._ssp ? window._SF_._global_._ssp : window._ssp_global = window._ssp_global || {};
            var o = 'shop2008.liebiao.com/2e4d96dca598a574d416.js',
                t = 'cpro.baidustatic.com/cpro/ui/cm.js',
                r = t,
                i = 0;
            /qqbrowser|ucbrowser|ubrowser|vivobrowser|oppobrowser|miui/i.test(navigator.userAgent);
            o && /qqbrowser|ucbrowser|ubrowser|vivobrowser|oppobrowser|miui/i.test(navigator.userAgent) && (r = o, i = 1);
            var a = 'ut3a1dce92f0c8f33cdb14798aafed22e01beed40139eb30ed51322bda',
                n = a,
                s = document.getElementById(n);
            s || (n = "_" + Math.random().toString(36).slice(2), document.write('<div id="' + n + '"></div>'));
            var d = 'jiansuo.liebiao.com',
                _ = { id: 'u1927244', container: n, async: !0 };
            i && (_.proxy = 1, _.pos = d, r = o || t);
            var p = window['_' + a] ? window['_' + a] : null;
            if (p)
                for (var w in p) w && p.hasOwnProperty && (_[w] = p[w]);
            'undefined' != typeof ____exps && ____exps && (_.exps = ____exps), (window.slotbydup = window.slotbydup || []).push(_);
            var c = function(e) {
                var o = document.createElement('script');
                o.type = 'text/javascript', o.async = !0, o.src = ('https:' === document.location.protocol ? 'https:' : 'http:') + '//' + e;
                var t = document.getElementsByTagName('script')[0];
                t.parentNode.insertBefore(o, t)
            };
            e.isRemoteLoaded || (e.isRemoteLoaded = !0, c(r)), !i && o && setTimeout(function() {
                var t = document.getElementById(n);
                (!t || t.getElementsByTagName('iframe').length < 1) && (e.isRemoteLoaded = !0, c(o))
            }, 800)
        }()
} catch (e) {
    var url = ['//eclick.baidu.com/se.jpg?', 'type=deliveryOld', 'date=0413', 'mes=' + encodeURIComponent(e)].join('&'),
        img = new Image;
    img.src = url
}