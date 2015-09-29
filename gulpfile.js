var gulp        = require('gulp');
var less        = require('gulp-less');
var runSequence = require('run-sequence');
var del         = require('del');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var jade        = require('gulp-jade');

gulp.task('css', function() {
    return gulp.src('assets/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('clean', function (cb) {
    return del(['public/stylesheets/*'], cb);
});

gulp.task('js', function() {
    return gulp.src('assets/javascripts/*.js')
        .pipe(uglify() )
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('public/javascripts/'))
});

gulp.task('libs', function() {
    return gulp.src(['bower_components/bootstrap-less/js/*', 'bower_components/jquery/dist/jquery.min.js', 'bower_components/angular/*'])
        .pipe(gulp.dest('public/javascripts/'))
});

gulp.task('templates', function() {
    return gulp.src('views/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('public/'));
});

gulp.task('watch', function () {
        gulp.watch('assets/css/**/*.less',['css']);
        gulp.watch('assets/javascripts/*.js',['js']);
        gulp.watch('views/*.jade',['templates']);
});

gulp.task('default', function(callback) {
    runSequence('clean',
        ['css', 'js', 'libs', 'templates'],
        callback);
});


