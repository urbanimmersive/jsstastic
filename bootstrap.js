// GENERATED
(function(){
    console.log('loading app');
    function getTargetId(globalAppName) {
        globalAppName = 'jsapp_'+globalAppName;
        var d=document,
        s=d.getElementsByTagName('head')[0].getElementsByTagName('script');
        for (var i = 0; i < s.length; i++) {
            if (s[i].id && s[i].id === globalAppName) return s[i].targetId;
        }
    };

    // generated...
    var appId = 'MyApp';
    var targetId = getTargetId(appId);

    var html = ' <h1>My App</h1> <div ng-app="MyApp" ng-controller="MyController"> MyApp: {{name}} </div>';
    jQuery('#'+targetId).html(html);
})();
