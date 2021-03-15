"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var concat = require("gulp-concat");
var imgCompress = require("imagemin-jpeg-recompress");

gulp.task("clean", function () {
  return del("build");
});

gulp.task("html", function () {
  return gulp
    .src("source/*.html")
    .pipe(posthtml([include()]))
    .pipe(gulp.dest("build"));
});

gulp.task("copy", function () {
  return gulp
    .src(["source/fonts/**/*.{woff,woff2}", "source/img/**", "source//*.ico"], {
      base: "source",
    })
    .pipe(gulp.dest("build"));
});

gulp.task("images", function () {
  return gulp
    .src("source/img/**/*.{png,jpg,svg}")
    .pipe(
      imagemin([
        imgCompress({
          loops: 4,
          min: 70,
          max: 80,
          quality: "high",
        }),
        imagemin.optipng({ optimizationLevel: 7 }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.svgo(),
      ])
    )

    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  return gulp
    .src("source/img/**/*.{png,jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("source/img"));
});

gulp.task("sprite", function () {
  return gulp
    .src("source/img/icon-*.svg")
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename("sprite_auto.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("csscopy", function () {
  return gulp
    .src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("cssmin", function () {
  return gulp
    .src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

// gulp.task("jsvendor", function () {
//   return gulp
//     .src([
//       "./node_modules/picturefill/dist/picturefill.js",
//       "source/js/vendors/*.js",
//     ])
//     .pipe(concat("vendor.js"))
//     .pipe(gulp.dest("build/js"));
// });

gulp.task("jsmain", function () {
  return gulp
    .src(["source/js/main/*.js"])
    .pipe(concat("main.js"))
    .pipe(gulp.dest("build/js"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    reloadOnRestart: true,
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("watch", function () {
  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("csscopy", "cssmin"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
  gulp.watch("source/img/**/*.{jpg,svg,png}", gulp.series("images"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/js/main/*.js", gulp.series("jsmain", "refresh"));
  // gulp.watch("source/js/vendors/*.js", gulp.series("jsvendor", "refresh"));
});

var buildTasks = [
  "clean",
  gulp.parallel([
    "html",
    "csscopy",
    "cssmin",
    // "jsvendor",
    "jsmain",
    "copy",
    "sprite",
  ]),
];

gulp.task("build", gulp.series(buildTasks));
gulp.task("start", gulp.series("build", gulp.parallel("server", "watch")));
