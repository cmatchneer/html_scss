const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
function defaultTask(cb) {
  // place code for your default task here
  cb();
}
function style() {
  return gulp
    .src("./assets /scss/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./assets /css"))
    .pipe(browserSync.stream());
}
function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./assets /scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./assets /js/**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;

// assets /scss/styles.scss
