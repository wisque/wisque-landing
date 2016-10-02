var gulp = require('gulp');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var sourcemaps = require("gulp-sourcemaps");
var Cache = require('gulp-file-cache');
var minify = require('gulp-clean-css');

var cache = new Cache();
var path = {src: 'src/**/*.js', styles: 'src/**/*.css'};

gulp.task('build', function() {
    return gulp.src([path.src])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(cache.cache())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./dist/src'));
});

gulp.task('minify', function() {
    return gulp.src(path.styles)
        .pipe(minify({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/src'));
});

gulp.task('copy', function() {
    gulp.src('src/**/*').pipe(gulp.dest('./dist/src'));
});

gulp.task('run', ['copy', 'minify', 'build'], function() {
    return nodemon({
        script: './dist/src/server.js',
        ext: 'js',
        tasks: ['copy', 'minify', 'build'],
        watch: path.src,
        env: {
            NODE_PATH: './dist'
        }
    });
});

gulp.task('default', ['run']);