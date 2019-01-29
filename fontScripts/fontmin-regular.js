var Fontmin = require('fontmin');
var regularText = `
P2-end 0123456789 年  月  日，你是第  个加入了AI音乐学院的同学 和 W+ 的同学 一起开启了你的音乐之旅
P3-end 千里之行，始于足下 这一年，你有一个小目标 是学会 你一共在AI音乐学院学习了  套课程`
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

