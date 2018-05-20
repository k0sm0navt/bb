requirejs.config({
    paths: {
        backbone: "../vendor/backbone/backbone",
        'backbone-validation': "../vendor/backbone-validation/dist/backbone-validation-amd",
        jquery: "../vendor/jquery/dist/jquery",
        lodash: "../vendor/lodash/lodash",
        underscore: "../vendor/underscore/underscore",
        "dust.core": "../vendor/dustjs-linkedin/dist/dust-core",
        "dust-helpers": "../vendor/dustjs-linkedin-helpers/dist/dust-helpers",
    },
    shim: {
        'dustjs-linkedin': {
            exports: 'dust'
        }
    }

});
define.amd.dust = true;
require(['app'], function (Application) {
});


