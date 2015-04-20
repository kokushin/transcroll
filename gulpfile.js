'use strict';

var gulp    = require('gulp');
var sass    = require('gulp-ruby-sass');
var connect = require('gulp-connect');

var path    = 'demo/';

gulp.task('sass', function() {
    return sass(path + 'sass/style.scss', { style: 'compressed' })
        .pipe(gulp.dest(path + 'css/'));
});

gulp.task('connectDev', function(){
    connect.server({
        root: [path],
        port: 9999,
        livereload: true
    });
});

gulp.task('html', function(){
    gulp.src(path + '*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch([path + '*.html'], ['html']);
    gulp.watch([path + 'sass/*.scss'], ['sass']);
    gulp.watch([path + 'css/*.css'], ['html']);
});

gulp.task('default', ['watch', 'connectDev']);