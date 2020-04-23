const { watch, src, dest, series } = require("gulp");
const sass = require("gulp-sass");
const livereload = require("gulp-livereload");
const rename = require("gulp-rename");
const template = require("gulp-template-html");

function html() {
  return src(["src/*.html"])
    .pipe(template("src/templates/template.html"))
    .pipe(dest("public/"))
    .pipe(livereload());
}

function css() {
  return src(["src/css/app.scss"])
    .pipe(sass.sync({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(dest("public/css"))
    .pipe(livereload());
}

exports.watch = function () {
  livereload.listen();
  watch(["src/*.html", "src/**/*.html"], html);
  watch("src/**/*.scss", css);
};

exports.build = series(html, css);
