const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('delete');
const terser = require('gulp-terser');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const clean_css = require("gulp-clean-css");
const rename = require("gulp-rename");
const fileinclude = require("gulp-file-include");
const imagemin = require("gulp-imagemin");

function buildHTML() {
    return gulp.src('src/index.html')
        .pipe(fileinclude())
        .pipe(gulp.dest('dist/html'))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
}

function copyCSS() {
    return gulp.src("src/css/*.css")
        .pipe(clean_css()) 
        .pipe(
            rename({
                extname: ".min.css"
                })
            )
        .pipe(gulp.dest("dist/css"))
}

function buildCSS() { 
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('css/style.css'))
        .pipe(gulp.dest('dist'))
        .pipe(clean_css())
        .pipe(autoprefixer(['last 5 versions', '> 1%'], { cascade: true }))      
        .pipe(
            rename({
              extname: ".min.css"
            })
        )
        .pipe(gulp.dest('dist'))
}

function buildJS() {
    return gulp.src('src/js/script.js')
        .pipe(fileinclude())
        .pipe(gulp.dest('dist/js'))
        .pipe(
            terser()
          )
          .pipe(
            rename({
              extname: ".min.js"
            })
          )
        .pipe(gulp.dest('dist/js'))
}

function buildImages() {
    return gulp.src('src/img/**')
        .pipe(
            imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7
            })
        )
        .pipe(gulp.dest('dist/img'))
}

function clean() {
    return del('dist/**', { force: true });
}

function build() {
    return gulp.series([
        clean,
        gulp.parallel([
            buildHTML,   
            copyCSS,      
            buildCSS,     
            buildJS,
            buildImages
        ])
    ])
}

function start() {
    gulp.watch('src/**/*', build())
}

exports.buildHTML = buildHTML;
exports.copyCSS = copyCSS;
exports.buildCSS = buildCSS;
exports.buildJS = buildJS;
exports.clean = clean;
exports.start = start;
exports.default = build();