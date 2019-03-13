const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const util = require('gulp-util');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const connect = require('gulp-connect');
const rimraf = require('rimraf');

const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminZopfli = require('imagemin-zopfli');
const imageminMozjpeg = require('imagemin-mozjpeg'); //need to run 'brew install libpng'
const imageminGiflossy = require('imagemin-giflossy');

const gulpImageMinSettings = [
    //png
    imageminPngquant({
        speed: 1,
        quality: 98 //lossy settings
    }),
    imageminZopfli({
        more: true
    }),
    //gif
    // imagemin.gifsicle({
    //     interlaced: true,
    //     optimizationLevel: 3
    // }),
    //gif very light lossy, use only one of gifsicle or Giflossy
    imageminGiflossy({
        optimizationLevel: 3,
        optimize: 3, //keep-empty: Preserve empty transparent frames
        lossy: 2
    }),
    //svg
    imagemin.svgo({
        plugins: [{
            removeViewBox: false
        }]
    }),
    //jpg lossless
    imagemin.jpegtran({
        progressive: true
    }),
    //jpg very light lossy, use vs jpegtran
    imageminMozjpeg({
        quality: 90
    })
];


gulp.task('webserver', function () {
    connect.server({
        livereload: true,
        port: 3030,
        root: './dist',
        host: '0.0.0.0'
    });
});

gulp.task('scss', function () {
    gulp.src('src/scss/**/[^_]*.scss')
        .pipe(sass()).on('error', util.log)
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

gulp.task('img', function () {
    rimraf('dist/img/*', function () {
        console.log('removed all images in dist/img dir');
        gulp.src('src/img/**/*')
            .pipe(imagemin(gulpImageMinSettings))
            .pipe(gulp.dest('dist/img'))
            .pipe(connect.reload());
    });
});

gulp.task('fonts', function () {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('serve', ['scss', 'js', 'html', 'fonts', 'webserver'], function () {
    gulp.watch('src/scss/**/*.scss', ['scss']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/**/*.html', ['html']);
});

gulp.task('default', ['scss', 'js', 'html', 'fonts']);
