const {src, series, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const rename = require('gulp-rename');

function compilarSass() {
  return src('./src/scss/index.scss')
    .pipe(sass())
    .pipe(dest('./public/build/css'));
}

function minImagenes() {
  return src('./src/img/*')
    .pipe(imagemin())
    .pipe(rename({ suffix: '-min' }))
    .pipe(dest('./src/img'))
}

function webpImagenes() {
  return src('./src/img/*-min.jpg')
    .pipe(webp())
    .pipe(dest('./src/img'))
}

function watchArchivos() {
  watch('./src/scss/**/*.scss', compilarSass)
}

exports.watch = watchArchivos;
exports.imagemin = minImagenes;
exports.webp = webpImagenes;