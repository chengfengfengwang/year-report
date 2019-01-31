const baseUrl = 'http://192.168.1.171:22222';
const coupon_id = '5c4fd6c09a5f77026df85cbf'; //5c4fd6c09a5f77026df85cbf  本地 //5c4ec0f9ab9a700db1667639 //正式
function getPosition(e) {
    var x = e.getBoundingClientRect().left + document.documentElement.scrollLeft;
    var y = e.getBoundingClientRect().top + document.documentElement.scrollTop;
    return { x, y }
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return '';
}
function autoPlayAudio(id) {
    wx.config({
        // 配置信息, 即使不正确也能使用 wx.ready
        debug: false,
        appId: '',
        timestamp: 1,
        nonceStr: '',
        signature: '',
        jsApiList: []
    });
    wx.ready(function() {
        document.getElementById(id).play();
    });
}
export {getPosition,getQueryVariable,autoPlayAudio,baseUrl,coupon_id}