var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function() {
  console.log("Processing Less Files...");
  return gulp.src('./src/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'node_modules', 'less', 'dist') ]
    }))
    .pipe(gulp.dest('./src/css'));
});