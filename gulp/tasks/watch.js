var gulp = require('gulp'),
browserSync = require('browser-sync').create();

gulp.task('watch', ['imgOptimize'], function() {

  browserSync.init({
    browser: "chrome",
    server: {
      baseDir: "app"
    }
  });

  gulp.watch('./app/index.html', function() {
    browserSync.reload();
  });

  gulp.watch('./app/assets/styles/scss/**/*.scss', function() {
    gulp.start('cssInject');
    browserSync.reload();
  });

  gulp.watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

  gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
  })

})
