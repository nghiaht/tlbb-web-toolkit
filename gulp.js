gulp.task('ghpages', ['default'], () => {
    return gulp.src('build/**/*')
        .pipe(gulp.dest('docs/'));
});
