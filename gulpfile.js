const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    postCss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    pugHTML = require('gulp-pug');



gulp.task('styles', styles)
gulp.task('html', html)
gulp.task('watch', watch)
gulp.task('js', js)
gulp.task('pug', pug)
gulp.task('img', img)


function styles() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass(
            {includePaths: require('node-normalize-scss').includePaths}
        ))
        .pipe(postCss([
            autoprefixer({browsers: ['> 1%', 'IE 10']})
        ]))
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('build/styles'))
        .pipe(browserSync.reload({stream: true}))
}


function html() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
        .pipe(browserSync.reload({stream: true}))
}


const jsFiles = ["src/js/file1.js","src/js/file2.js"]

function js() {
    return gulp.src(jsFiles)
        .pipe(concat('main.js'))
        .pipe(babel({presets: ['babel-preset-env']}))
        // .pipe(uglify({toplevel: true}))
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.reload({stream: true}))
}

function pug() {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(pugHTML({
            pretty:true
        }))
        .pipe(gulp.dest('build/pug/'))
        .pipe(browserSync.reload({stream: true}))
}

function img() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin(
            [
                imagemin.gifsicle({interlaced: true}),
                imagemin.jpegtran({progressive: true}),
                imagemin.optipng({optimizationLevel: 5}),
                imagemin.svgo({
                    plugins: [
                        {removeViewBox: false},
                        {cleanupIDs: false}
                    ]
                })
            ]
        ))
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.reload({stream: true}))
}


//Test babel
gulp.task('es6', () => {
    return gulp.src("src/js/file1.js")
        .pipe(babel({presets: ['babel-preset-env']}))
        .pipe(gulp.dest('build/js/js-babel-test/'))
})


function watch() {
    browserSync.init({
        server: {
            baseDir: "build"
        }
    });

    gulp.watch('src/scss/*.scss', styles)
    gulp.watch('src/*.html', html)
    gulp.watch('src/js/*.js', js)
    gulp.watch('src/pug/**/*.pug', pug)
    gulp.watch('src/img/**/*', img)

}





