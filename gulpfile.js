const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const terser = require("gulp-terser");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");

const paths = {
    styles: {
        src: "src/css/**/*.css",
        dest: "dist/css",
    },
    scripts: {
        src: "src/js/**/*.js",
        dest: "dist/js",
    },
    html: {
        src: "src/**/*.html",
        dest: "dist",
    },
};

function styles() {
    return gulp
        .src(paths.styles.src)
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(
            rename({
                suffix: ".min",
            })
        )
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp
        .src(paths.scripts.src)
        .pipe(terser())
        .pipe(
            rename({
                suffix: ".min",
            })
        )
        .pipe(gulp.dest(paths.scripts.dest));
}

function html() {
    return gulp
        .src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.html.dest));
}

function watchFiles() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.html.src, html);
}

const build = gulp.series(gulp.parallel(styles, scripts, html), watchFiles);

exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.watch = watchFiles;
exports.default = build;
