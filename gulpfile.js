var gulp=require("gulp");
var rename =require("gulp-rename");
var concat =require("gulp-concat");
var jsmin=require("gulp-uglify");
var htmlmin=require("gulp-htmlmin");
var cssmin=require("gulp-minify-css")

gulp.task("buildjs",function(){
	gulp.src("./oya/js/*.js")
	.pipe(concat("oya.js"))
	.pipe(jsmin({mangle:true}))
	.pipe(rename({suffix:".min"}))
	.pipe(gulp.dest(".dist/js"))
});

gulp.task("buildhtml",function(){
	gulp.src("./oya/**/*.html")
	.pipe(htmlmin({
		collapseWhitespace:true,
		removeComments:true
	}))
	.pipe(rename({suffix:".min"}))
	.pipe(gulp.dest("./dist/html"))
});

gulp.task("buildcss",function(){
	gulp.src("./oya/**/*.css")
	.pipe(cssmin)
	.pipe(rename({suffix:".min"}))
	.pipe(gulp.dest("./dist/css"))
});


gulp.task("default",
["bulidjs","buildhtml","buildcss"]);
