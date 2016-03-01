
var gulp=require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');
var concat=require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

gulp.task('default',function(){
    console.log('echo material design font...');
});

gulp.task('sassdoc', function () {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sassdoc());

});


gulp.task('dist', function () {
    compileSass('md.fonts.scss');
});



function compileSass(src){
    gulp.src('./src/' + src)
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}

