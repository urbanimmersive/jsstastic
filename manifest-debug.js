// GENERATED
(function() {
    function loadcss(f) {
        var d=document,
        h=d.getElementsByTagName('head')[0],
        s=d.createElement('link');
        s.rel='stylesheet';
        s.type='text/css';
        s.async=false;
        s.href=f;
        h.appendChild(s);
    };
    function loadjs(f) {
        var d=document,
        h=d.getElementsByTagName('head')[0],
        s=d.createElement('script');
        s.type='text/javascript';
        s.async=false;
        s.src=f;
        h.appendChild(s);
    };
    var manifest = {
        'js': [
            'bower_components/jquery/jquery.min.js',
            'bower_components/angular/angular.js',
            'foo.js'
        ],
        'css': []
    }
    manifest.js.push('bootstrap.js');
    for (var i = 0; i < manifest.js.length; i++) {
        loadjs(manifest.js[i]);
    }
    for (var i = 0; i < manifest.css.length; i++) {
        loadcss(manifest.css[i]);
    }
})();
