var Fontmin = require('fontmin');
var regularText = ``
var fontmin = new Fontmin()
    .src('./originFont/SourceHanSerifCN-Regular.ttf')
    .use(Fontmin.glyph({
        text: regularText,
        hinting: false         // keep ttf hint info (fpgm, prep, cvt). default = true
    }))
    .dest('src/assets/font');
fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }

    //console.log(files[0]);
    // => { contents: <Buffer 00 01 00 ...> }
});

