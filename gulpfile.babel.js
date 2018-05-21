import gulp from 'gulp';
import bower from 'gulp-bower';
import runSequence from 'run-sequence';
import babel from 'gulp-babel';

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
  gulp.src(paths.templates)
    .pipe(gulp.dest('src/main/webapp/dist')));

gulp.task('default', callback => runSequence('bower', 'babel', 'copyTemplates', callback));
