var Fontmin = require('fontmin');

var fontmin = new Fontmin()
    .src('notoserifcjk_regular.ttf')
    .dest('fontresult/fonts');

fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }

    console.log(files[0]);
    // => { contents: <Buffer 00 01 00 ...> }
});

var Fontmin = require('fontmin');

var fontmin = new Fontmin()
    .use(Fontmin.glyph({
        text: '天地玄黄 宇宙洪荒',
        hinting: false         // keep ttf hint info (fpgm, prep, cvt). default = true
    }));