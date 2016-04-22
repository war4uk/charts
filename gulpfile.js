const browserify = require('browserify');
const watchify = require('watchify');
const gulp = require('gulp');
const templateCache = require('gulp-angular-templatecache');
const source = require('vinyl-source-stream');


gulp.task('build-js', () => buildScript('bundle.js', false));
gulp.task('watch-js', () => buildScript('bundle.js', true));

gulp.task('build-templates',
  () => gulp.src('./app/**/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('static'))
);


gulp.task('watch', ['watch-js'], () => {
  gulp.watch('./app/**/*.html', ['build-templates']);
});

function buildScript(file, isWatchify) {
  const options = {
    entries: ['./app/app.js'],
    cache: {},
    packageCache: {},
  };

  if (isWatchify) {
    options.plugin = [watchify];
  }

  const bundler = browserify(options);
  bundler.transform('babelify', { presets: ['stage-0', 'es2015'] });

  function rebundle() {
    const stream = bundler.bundle();
    return stream
      .pipe(source(file))
      .pipe(gulp.dest('static/'));
  }

  bundler.on('update', () => {
    rebundle();
    console.log('Rebundle...');
  });
  return rebundle();
}