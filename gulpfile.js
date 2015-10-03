var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cssMin = require('gulp-css');

gulp.task('sass', function() {

    return gulp.src('./resources/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets'));
});

gulp.task('css', ['sass'], function() {

    gulp.src([
            './assets/app.css'
        ])
        .pipe(concat('app.min.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('./assets'));

});

gulp.task('scripts', function() {

    gulp.src([
            './bower_components/jquery/dist/jquery.min.js'
        ])
        .pipe(gulp.dest('./assets'));

    gulp.src([
            './resources/js/app.js',
            './resources/js/Slider.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./assets'));

});

gulp.task('scripts-min', ['scripts'], function() {

    gulp.src([
            './assets/app.js'
        ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets'));

});

gulp.task('default', ['css', 'scripts-min']);