

(function () {
    'use strict'

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        if (!localStorage.referer) {
            localStorage.referer = "<?php echo isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'no-referrer'  ?>";
            localStorage.first_visit = window.location.href;
            window.document.cookie = "referrer="+ localStorage.referer +";domain=shoppreglobal.com;path=/"
            window.document.cookie = "first_visit="+ window.location.href +";domain=shoppreglobal.com;path=/"
        }

        if (window.location.href.indexOf('?') !== -1 ) {
            let queryParam = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            console.log('query param', queryParam);
            var result = Object.fromEntries(queryParam.map(s => s.split('=')));
            queryParam.map(s => {
                const source = s.split('=');
                localStorage.setItem('' + source[0], source[1]);
                window.document.cookie = source[0]  + "=" + source[1] +";domain=shoppreglobal.com;path=/"
            })

            if (result.utm_source && !localStorage.original_source) {
                localStorage.original_source = result.utm_source;
                window.document.cookie = "original_source="+result.utm_source +";domain=shoppreglobal.com;path=/"
            }
            let parameter_url = window.location.href.slice(window.location.href.indexOf('?') + 1);
            parameter_url = parameter_url.split('=').join(':')
            parameter_url = parameter_url.split('&').join('/')
            localStorage.setItem('parameter_url', parameter_url);
            window.document.cookie = "parameter_url="+ parameter_url +";domain=shoppreglobal.com;path=/"
        }
    }, false)
}())

