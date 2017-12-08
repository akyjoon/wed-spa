var gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync').create();

gulp.task('cssInject', function() {
  return gulp.src('./app/assets/styles/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styles/css/'))
    .pipe(browserSync.stream());
})
