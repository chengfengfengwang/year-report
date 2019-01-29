var axios = require('axios');
// var token = '18_vzXbYaydu1a7xgEmusRGkMNYBLd5MyRBwGkU5aZ-K_PtDl2JneJIPZK8tszn6z5QvKmDugKGDUxDQGDuwtvZzL8Z5FhawPdz-8oZFcoYF9oI6xiXbSi4XMY9u-bPd6-7IsOPycVPljQ-iPscWPSbAGADWZ';
// axios.post('https://api.weixin.qq.com/wxa/getwxacode?access_token='+token,{
//     path:'pages/home/home?from=pengyouquan'
// }).then(res=>{
//     console.log(res)
// })

axios.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx26681ad58ff9c0bb&secret=67fbfe6112661fc24b05d11f2f070e59').then(res=>{
    console.log(res.data)
})