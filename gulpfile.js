var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require("vinyl-source-stream");

// GULP-CONNECT
gulp.task('connect', function () {
	connect.server({
		root: 'app',
		port: 4000
	})
});

// GULP-SASS
gulp.task('styles', function() {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'));
});

//Copy static files from html folder to build folder
// gulp.task("copyStaticFiles", function(){
//     return gulp.src("./src/html/*.*")
//     .pipe(gulp.dest("./build"));
// });

//Convert ES6 code in all js files in src/js folder and copy to 
//build folder as bundle.js
gulp.task("build", function(){
    return browserify({
        entries: ["./app/js/main.js"]
    })
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./build"))
    ;
});

//Watch task
gulp.task('default', ['connect', 'styles', 'build'], function() {
    gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch('js/main.js', ['build']);
});
