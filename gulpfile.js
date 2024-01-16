const {src, series, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function compilarSass() {
  return src('./src/scss/index.scss')
    .pipe(sass())
    .pipe(dest('./public/build/css'));
}

function minImagenes() {
  return src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('./src/img-min'))
}

function webpImagenes() {
  return src('./src/img-min/*')
    .pipe(webp())
    .pipe(dest('./src/img-min'))
}

function watchArchivos() {
  watch('./src/scss/**/*.scss', compilarSass)
}

exports.watch = watchArchivos;
exports.imagemin = minImagenes;
exports.webp = webpImagenes;