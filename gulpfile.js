var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var jshint = require('gulp-jshint');

gulp.task('default', function() {

    gulp.src('src/js/*.js')
        .pipe(uglify({
            outSourceMap: true,
            compress: {
                drop_console: true
            }
        }))
        .pipe(gulp.dest('dist/js'));

    
    gulp.src(['./src/js/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));    
    

});