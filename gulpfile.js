const gulp = require("gulp");
const gulpif = require("gulp-if");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const del = require("del");
const ts = require("gulp-typescript");

var tsProject = ts.createProject("tsconfig.json");

function cleanDist(cb) {
  del.sync("./dist");
  console.log("dist folder deleted");
  cb();
}

function cleanTemp(cb) {
  // Tempo para escrever a dist no diretorio
  setTimeout(() => {
    del.sync("./tmp");
    console.log("temp folder deleted");
    cb();
  }, 1000);
}

function javascript(cb) {
  // Tempo para escrever a pasta tmp no diretorio
  setTimeout(() => {
    gulp
      .src("./tmp/**/*.js")
      .pipe(babel())
      .pipe(uglify())
      .pipe(gulp.src("src/**/*.js"))
      .pipe(concat("main.js"))
      .pipe(rename({ basename: "main", extname: ".min.js" }))
      .pipe(gulp.dest("./dist"));

    console.log("js processed");
    cb();
  }, 1000);
}

function typescript(cb) {
  gulp.src("src/**/*.ts").pipe(tsProject()).pipe(gulp.dest("./tmp"));
  cb();
}

exports.build = gulp.series(cleanDist, typescript, javascript, cleanTemp);

exports.clean = gulp.series(cleanDist, cleanTemp);
