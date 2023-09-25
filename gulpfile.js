const {src, dest, watch} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

function images() {
    return src(['assets/images/*/*.*', '!assets/images/*.svg'], {base : 'images'})
    .pipe(newer('assets/images-min'))
    .pipe(avif({quality : 50}))

    .pipe (src(['assets/images/*.*'], {base : 'images'}))
    .pipe(newer('assets/images-min'))
    .pipe(webp())

    .pipe (src(['assets/images/*.*'], {base : 'images'}))
    .pipe(newer('assets/images-min'))
    .pipe(imagemin())
    
    .pipe(dest('images/image-min'))
}

function scripts () {
    return src('assets/js/script.js')
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('assets/js'))
}

function watching () {
    watch(['assets/js/script.js'], scripts)
    watch(['assets/images/'], images)
}

exports.scripts = scripts;
exports.watching = watching;
exports.images = images;

