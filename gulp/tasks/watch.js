var gulp = require('gulp'),
browserSync = require('browser-sync').create();

gulp.task('watch', ['cssInject'], function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  gulp.watch('./app/index.html', function() {
    browserSync.reload();
  });
  gulp.watch('./app/assets/styles/scss/style.scss', ['cssInject']);

  gulp.watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

  gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
  })

})
