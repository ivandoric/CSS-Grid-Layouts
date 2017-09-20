var elixir = require('laravel-elixir');
var BrowserSync = require('laravel-elixir-browsersync');

elixir.config.assetsPath = './assets/';
elixir.config.publicPath = './assets/compiled/';

elixir(function(mix){

    mix.sass('style.scss');

    mix.browserSync({
        serveStatic: ['.'],
        serveStaticOptions: {
            extensions: ['html']
        },
        notify: false,
        files: ["./assets/compiled/css/*.css", "*.html"]
    });
});

