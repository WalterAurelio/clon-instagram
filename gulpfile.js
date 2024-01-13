const {src, series, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarSass() {
  return src('./src/scss/index.scss')
    .pipe(sass())
    .pipe(dest('./build/css'));
}

function watchArchivos() {
  watch('./src/scss/**/*.scss', compilarSass)
}

exports.watch = watchArchivos;