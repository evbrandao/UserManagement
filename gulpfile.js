const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');

const webroot = './wwwroot/';

const paths = {

    webroot: webroot,

    angular: './bower_components/angular/angular.js',

    bootstrapCss: './bower_components/bootstrap/dist/css/bootstrap.css',

    userManagement: './App/Scripts/UserManagement.js',

    jsDest: webroot + 'js',
    cssDest: webroot + 'css'
};

gulp.task('default', function () {
});

gulp.task('min:vendor:js', function () {
    return gulp
        .src([paths.angular])
        .pipe(concat(paths.jsDest + "/min/vendor.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('min:app:js', function () {
    return gulp
        .src([paths.userManagement])
        .pipe(concat(paths.jsDest + "/min/app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('min:css', function () {
    return gulp
        .src([paths.bootstrapCss])
        .pipe(concat(paths.cssDest + "/min/site.min.css"))
        .pipe(cssmin())
        .pipe(gulp.dest('.'));
});

gulp.task('copy:js', function () {
    return gulp
        .src([paths.angular, paths.userManagement])
        .pipe(gulp.dest(paths.jsDest));
});

gulp.task('copy:css', function () {
    return gulp
        .src([paths.bootstrapCss])
        .pipe(gulp.dest(paths.cssDest));
});

gulp.task('min:js', ['min:vendor:js', 'min:app:js']);
gulp.task('min', ['min:js', 'min:css']);
gulp.task('copy', ['copy:js', 'copy:css']);