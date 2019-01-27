var Fontmin = require('fontmin');
var boldText = `
P2-f 2018  0123456789，人
P5. TOP5:
P6 深夜0点 5.37%
P8 43.18%  31.25% Bm  F 
P9 ITV  刘继峰 1757 《纸短情长》
P10 非洲鼓、拇指琴2             共上线了32套课程 《小涛24+X首弹唱课》和《N7吉他初级乐理课》 是AI年度最受欢迎的选修课程 
P11 再看一遍 查看我的2018`
var fontmin = new Fontmin()
    .src('./originFont/SourceHanSerifCN-Bold.ttf')
    .use(Fontmin.glyph({
        text: boldText,
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

