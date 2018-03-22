var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//Sass to CSS
gulp.task('sass', function(){
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//Live-reload with BrowserSync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '../project'
    },
  })
})

//Watch Sass files
gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('assets/scss/**/*.scss', ['sass']); 
  gulp.watch('../project/*.html', browserSync.reload); 
  gulp.watch('assets/js/**/*.js', browserSync.reload); 
})