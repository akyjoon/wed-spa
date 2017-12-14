var gulp = require('gulp'),
browserSync = require('browser-sync').create();
sass = require('gulp-sass');

gulp.task('watch', ['imgOptimize'], function() {

  browserSync.init({
    browser: "chrome",
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  gulp.watch('./app/index.html', function() {
    browserSync.reload();
  });

  gulp.watch('./app/assets/styles/scss/**/*.scss', function() {
    gulp.start('cssInject');
  });

  gulp.watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

  gulp.task('cssInject', function() {
    return gulp.src('./app/assets/styles/scss/style.scss')
      .pipe(sass())
      .pipe(gulp.dest('./app/assets/styles/css/'))
      .pipe(browserSync.stream());
  })

  gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
  })

})
//['imgOptimize']
