var gulp        	= require('gulp'),
    browserSync 	= require('browser-sync'),
    reload 			= browserSync.reload,
    stylus        	= require('gulp-stylus'),
    include 		= require("gulp-include"),
    autoprefixer 	= require('gulp-autoprefixer');


gulp.task('styl', function() {
    return gulp.src("src/css/styles.styl")
        .pipe(stylus({
            includePaths: ['node_modules/susy/sass', 'node_modules/normalize-scss/sass']
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('html', function() {
	return gulp.src("src/*.html")
		.pipe(gulp.dest("dist"))
		.pipe(browserSync.stream());
})

gulp.task('js', function() {
	return gulp.src("src/js/*.js")
		.pipe(gulp.dest("dist/js"))
		.pipe(browserSync.stream());
})


gulp.task('serve', gulp.series(gulp.parallel('styl', 'html', 'js'), function() {
    browserSync.init({
        server: "./dist",
        notify: false
    });
    gulp.watch("src/css/*.styl", gulp.series(gulp.parallel('styl')));
    gulp.watch("src/*.html", gulp.series(gulp.parallel('html')));
    gulp.watch("src/js/*.js", gulp.series(gulp.parallel('js')));
}));

gulp.task('default', gulp.series(gulp.parallel('serve')));
