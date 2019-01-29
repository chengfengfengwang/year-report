<template>
  <div>
    <img
      src="http://bpic.588ku.com/original_pic/18/09/21/5683beead4a5a812649ea030d1509c00.jpg!/fw/248/unsharp/true/compress/true"
      alt
    >
    <div @click="getQ">领取优惠券</div>
    <!-- <button
      style="width: 100px;height: 100px;color: #000;background:blue"
      id="button1"
      @click="callAndroid"
    >分享1</button> -->
    <button
      style="width: 100px;height: 100px;color: #000;background:blue"
      id="button1"
      @click="share2"
    >分享2</button>
  </div>
</template>
<script>
export default {
  methods: {
    getQ() {
      console.log("getQ");
    },
    share2(){
        console.log('----------')
        console.log(WebShare);
        console.log('----------')
        WebShare.share('https://www.baidu.com',0,23)
    }
  }
};
</script>

