const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


function css(done) {
    // Compilar sass 
    // Pasos: 1 - Identificar archivo, 2 - Compilarla, 3 - Guardar el .css

    src('src/scss/app.scss') //paso 1
        .pipe( sass() ) //paso 2
        .pipe(postcss([ autoprefixer() ]) )
        .pipe( dest('build/css') )//paso 3
    done();
}

function imagenes (){
    return src('./src/img/**/*')
        .pipe(dest('build/img'))
}

function dev (){
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series( imagenes, css, dev );