var Fontmin = require('fontmin');
var mediumText = `
P2-f 年，
一共有
P11 准备好了`
var fontmin = new Fontmin()
    .src('./originFont/SourceHanSerifCN-Medium.ttf')
    .use(Fontmin.glyph({
        text: mediumText,
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

