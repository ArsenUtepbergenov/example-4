const gulp = require('gulp'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify-es').default,
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  del = require('del'),
  browserSync = require('browser-sync').create();

const paths = {
  styles: ['src/blocks/**/*.scss'],
  scripts: ['src/blocks/**/*.js'],
  index: ['src/index.html'],
  normalize: ['src/normalize.css'],
  assets: ['src/assets/*.{png, jpeg, jpg}']
};

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('sass', function() {
  return gulp.src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('bundle.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/styles/'))
    .pipe(browserSync.stream());
});

gulp.task('watch:sass', function() {
  gulp.watch(paths.styles, ['sass']);
});

gulp.task('html', function() {
  return gulp.src(paths.index)
    .pipe(gulp.dest('dist/'));
});

gulp.task('assets', function() {
  return gulp.src(paths.assets)
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('copy-normalize', function() {
  return gulp.src(paths.normalize)
    .pipe(gulp.dest('dist/styles/'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts, {sourcemaps: true})
    .pipe(uglify())
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('server', ['sass'], function() {

    browserSync.init({
        server: 'dist/'
    });

    gulp.watch(paths.styles, ['sass']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.index, ['html']);
    gulp.watch(paths.index).on('change', browserSync.reload);
});

gulp.task('build', ['scripts', 'assets', 'sass', 'copy-normalize', 'html']);
gulp.task('default', ['server']);
