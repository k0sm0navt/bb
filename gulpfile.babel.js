import gulp from 'gulp';
import bower from 'gulp-bower';
import runSequence from 'run-sequence';
import babel from 'gulp-babel';
import requirejsOptimize from 'gulp-requirejs-optimize';

import dust from 'gulp-dust';

const paths = {
    scripts: ['src/main/webapp/front/**/*.js'],
    templates: ['src/main/webapp/front/**/*.dust'],
    destES5: ['src/main/webapp/dist']
};

gulp.task('bower', () => bower());

gulp.task('babel', () =>
    gulp.src(paths.scripts)
        .pipe(babel({
            plugins: [['add-module-exports'], ['transform-es2015-modules-amd', {
                node: 'module'
            }]],
            compact: false
        }))
        .pipe(gulp.dest('src/main/webapp/dist'))
);

gulp.task('copyTemplates', () =>
    gulp
        .src(paths.templates)
        .pipe(gulp.dest('src/main/webapp/dist')));

gulp.task('compileTemplates', () => {
    gulp
        .src(paths.templates)
        .pipe(dust({
            amd: true
        }))
        .pipe(gulp.dest('src/main/webapp/dist'));
});

gulp.task('optimize', function () {
    return gulp.src('src/main/webapp/dist/**').pipe( requirejsOptimize({
        // appDir: 'src/main/webapp',
        baseUrl: "src/main/webapp/dist",
        mainConfigFile: "src/main/webapp/dist/main.js",
        // dir: "src/main/webapp/distOpt",
        name: "main"
    }))
        .pipe(gulp.dest('src/main/webapp/distOpt'))
        ;
});

gulp.task('default', callback => runSequence('bower', 'babel', 'copyTemplates', callback));
