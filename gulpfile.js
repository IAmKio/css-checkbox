var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var jshint = require('gulp-jshint');
var concatCss = require('gulp-concat-css');

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
        
          
    gulp.src('src/css/*.css')
        .pipe(concatCss("src/css/circular.css"))
        .pipe(gulp.dest('dist/css'));    

});