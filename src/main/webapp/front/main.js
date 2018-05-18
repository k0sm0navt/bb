requirejs.config({
    paths: {
        backbone: "../vendor/backbone/backbone",
        jquery: "../vendor/jquery/dist/jquery",
        lodash: "../vendor/lodash/lodash",
        underscore: "../vendor/underscore/underscore",
        "dust.core": "../vendor/dustjs-linkedin/dist/dust-core",

        // 'templates/car': 'templates/car',
        // 'templates/car.collection': 'templates/car.collection'

    },
    shim: {
        'dustjs-linkedin': {
            exports: 'dust'
        }
    }

});
define.amd.dust = true;

require(['app'], function (App) {
    new App;
});


