var gulp = require('gulp-help')(require('gulp'));
var svgmin = require('gulp-svgmin');
var filesToJson = require('gulp-files-to-json');
var cheerio = require('gulp-cheerio');

gulp.task('svg', 'Concat all svg files into one in a json format and export it to dist/svg', function () {
    return gulp.src('./resources/icons/svg/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeAttrs: {
                    attrs: ['xmlns:*', 'xmlns', 'id', 'width', 'height']
                }
            },{
                removeUselessDefs: true
            }, {
                removeComments: true    
            }]
        }))
        .pipe(cheerio(function ($, file) {
            // Each file will be run through cheerio and each corresponding `$` will be passed here.
            // `file` is the gulp file object
            // Make all h1 tags uppercase
            $('svg').each(function () {
                var svg = $(this);
                if (svg) {
                    var attrs = svg[0].attribs;
                    for (var attrName in attrs) {
                        if (attrName.match(/xmlns:.+/)) {
                            svg.removeAttr(attrName);
                        }
                    }
                }
            });
        }))
        .pipe(filesToJson('CoveoStyleGuideSvg.json'))
        .pipe(gulp.dest('dist/svg'));
});