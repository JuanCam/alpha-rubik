const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('test', () => {
    gulp.src('spec/mechamism/**.spec.js')
        .pipe(jasmine());
});