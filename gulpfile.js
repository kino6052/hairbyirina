var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({ advanced: true });

gulp.task('less', function() {
  console.log("Processing Less Files...");
  return gulp.src('./src/less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'node_modules', 'less', 'dist') ]
    }))
    .pipe(less({
      plugins: [cleancss]
    }))
    .pipe(gulp.dest('./src/css'));
});