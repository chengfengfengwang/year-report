<template>
  <div class="container">
    <div class="page p1" v-show="true">
      <div class="logo_area">
        <span class="name px1-right">年轻-aimusic</span>
        <img class="logo" src="../assets/img/mytrip/p1/logo.png" alt>
      </div>
      <div class="text_img">
        <img src="../assets/img/mytrip/p1/text-img.png" alt>
      </div>
      <div class="person">
        <img src="../assets/img/mytrip/p1/p.png" alt>
      </div>
      <div class="music_note note1">
        <img src="../assets/img/mytrip/p1/note1.png" alt>
      </div>
      <div class="music_note note2">
        <img src="../assets/img/mytrip/p1/note2.png" alt>
      </div>
      <div class="music_note note3">
        <img src="../assets/img/mytrip/p1/note3.png" alt>
      </div>
      <div class="music_note note4">
        <img src="../assets/img/mytrip/p1/note4.png" alt>
      </div>
      <div class="light">
        <img src="../assets/img/mytrip/p1/light.png" alt>
      </div>
      <Bottom v-show="page1.enterShow"></Bottom>
    </div>
    <div class="page p2" v-bind:class="{fadeIn:page2.fadeIn,animationStart:page2.animationStart}" v-show="true">
      <div class="text">
        <p class="t1">2018年 10 月 25 日，</p>
        <p class="t2">你是第 54003 个加入了AI音乐学院的同学</p>
        <p class="t3 para">和 10W+ 的同学</p>
        <p class="t4">一起开启了你的音乐之旅</p>
      </div>
      <div class="p_light">
        <img src="../assets/img/mytrip/p2/p-light.png" alt>
      </div>
      <img class="star star1" src="../assets/img/mytrip/p2/star.png" alt>
      <img class="star star2" src="../assets/img/mytrip/p2/star1.png" alt>
      <img class="star star3" src="../assets/img/mytrip/p2/star2.png" alt>
      <img class="star star4" src="../assets/img/mytrip/p2/star3.png" alt>
      <div class="person">
        <img src="../assets/img/mytrip/p2/p.png" alt>
      </div>
      <img src="../assets/img/mytrip/p2/hand.png" alt class="hand">
    </div>
    <div class="page p3" v-bind:class="{fadeIn:page3.fadeIn,animationStart:page3.animationStart}" v-show="true">
      <div class="text">
        <p class="t1">千里之行，始于足下</p>
        <p class="t2">这一年，你有一个小目标</p>
        <p class="t3">
          是学会
          <span class="instru">尤克里里</span>
        </p>
        <p class="t4 para">你一共在AI音乐学院学习了 5 套课程</p>
        <p class="t5">《尤克里里初级课》《尤克里里初级课》《尤克里里初级课》《尤克里里初级课》</p>
      </div>
      <div class="person">
        <img src="../assets/img/mytrip/p3/p.png" alt>
      </div>
      <img src="../assets/img/mytrip/p3/arm.png" alt class="arm">
      <img src="../assets/img/mytrip/p3/star.png" alt class="star">
    </div>
    <div
      class="page p4"
      v-bind:class="{fadeIn:page4.fadeIn,animationStart:page4.animationStart}"
      v-show="true"
    >
      <div class="text">
        <div class="l1">
          在线学琴时间
          <span class="num">1304</span>分
        </div>
        <div class="l2">
          弹奏音符
          <span class="num">123456789</span>
        </div>
        <div class="l3">
          超过了
          <span class="num">49%</span>的学员
        </div>
        <div class="l4">
          恭喜你是当之无愧的
          <img class="img-name" src="../assets/img/mytrip/p4/name1.png" alt>
        </div>
      </div>
      <img class="person" src="../assets/img/mytrip/p4/person.png" alt>
      <img src="../assets/img/mytrip/p4/light.png" alt class="light">
      <img src="../assets/img/mytrip/p4/star.png" alt class="star">
      <img src="../assets/img/mytrip/p4/hand.png" alt class="hand">
      <img src="../assets/img/mytrip/p4/note1.png" alt class="note note1">
      <img src="../assets/img/mytrip/p4/note2.png" alt class="note note2">
      <img src="../assets/img/mytrip/p4/note3.png" alt class="note note3">
    </div>
    <div
      class="page p5"
      v-bind:class="{fadeIn:page5.fadeIn,animationStart:page5.animationStart}"
      v-show="true"
    >
      <div class="text">
        <div class="l1">勇于追求，不断超越</div>
        <div class="l2">是你的人生态度</div>
        <div class="l3">
          一共拿到
          <span class="num">345</span>次
          <span class="num">A</span>
        </div>
        <div class="l4">
          超过了
          <span class="num">49%</span>的同学
        </div>
      </div>
      <img src="../assets/img/mytrip/p5/star.png" alt class="star">
      <img src="../assets/img/mytrip/p5/guitar-man.png" alt class="man">
      <img src="../assets/img/mytrip/p5/light.png" alt class="light">
    </div>
    <div
      class="page p6"
      v-bind:class="{fadeIn:page6.fadeIn,animationStart:page6.animationStart}"
      v-show="true"
    >
      <div class="result">
        <img
          src="http://img3.imgtn.bdimg.com/it/u=4252777213,3972425634&fm=26&gp=0.jpg"
          alt
          class="avatar"
        >
        <div class="result_main">
          <div>
            <img class="name_img" src="../assets/img/mytrip/p6/name1.png" alt>
            <div class="name_text">阁下莫非就是江湖人称的“乐器王子”？</div>
          </div>
          <div class="learn_content">
            <p>
              学会了
              <span class="b">尤克里里、吉他</span>
            </p>
            <p>
              学习了
              <span class="b">12</span>门课程
            </p>
            <p>
              学琴时间
              <span class="b">4567</span>分钟
            </p>
            <p>
              弹奏了
              <span class="b">341123</span>个音符
            </p>
            <p>
              一共获得了
              <span class="b">456</span>次
              <span class="w">A</span>
            </p>
            <p>
              超过了
              <span class="b">67%</span>的学员
            </p>
          </div>
        </div>
        <div class="qr_area">
          <div class="left">
            <p>扫一扫查看你的音乐成绩单</p>
            <p>领取新年礼包</p>
          </div>
          <div class="right">
            <img
              src="http://img3.imgtn.bdimg.com/it/u=4252777213,3972425634&fm=26&gp=0.jpg"
              alt
              class="qrcode"
            >
          </div>
        </div>
      </div>
      <div class="save_tip">长按图片保存成绩单</div>
      <div class="bottom_btn">
        <div class="left" @click="reWatch">
          <img src="../assets/img/mytrip/p6/rewatch.png" alt>再看一遍
        </div>
        <div class="right" @click="share">
          <img src="../assets/img/mytrip/p6/share.png" alt>晒一晒
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bottom from "./../components/Bottom";
export default {
  data: function() {
    return {
      page1: {
        fadeIn: false,
        animationStart: false,
        enterShow: true
      },
      page2: {
        fadeIn: false,
        animationStart: false
      },
      page3: {
        fadeIn: false,
        animationStart: false
      },
      page4: {
        fadeIn: false,
        animationStart: false
      },
      page5: {
        fadeIn: false,
        animationStart: false
      },
      page6: {
        fadeIn: false,
        animationStart: false
      },
      currentPage: "1",
      pageLock: false
    };
  },
  components: {
    Bottom
  },
  mounted() {
    this.bindTouchEvent();
    //this.getMycount();
  },
  methods: {
    getMycount() {
      this.axios
        .get("http://192.168.1.171:22222/v3/user_info/?god=77369889")
        .then(res => {
          console.log(res);
        });
    },
    bindTouchEvent() {
      var that = this;
      var startX, startY, moveEndX, moveEndY;
      document
        .querySelector(".container")
        .addEventListener("touchstart", function(e) {
          //e.preventDefault();
          startX = e.changedTouches[0].pageX;
          startY = e.changedTouches[0].pageY;
        });
      document
        .querySelector(".container")
        .addEventListener("touchmove", function(e) {
          moveEndX = e.changedTouches[0].pageX;
          moveEndY = e.changedTouches[0].pageY;
          var X = moveEndX - startX;
          var Y = moveEndY - startY;
          if (Math.abs(X) > Math.abs(Y) && X > 0) {
            //alert("left 2 right");
          } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
            //alert("right 2 left");
          } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
            that.changePage("down");
          } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
            that.changePage("up");
            //alert("bottom 2 top");
          } else {
            //alert("just touch");
          }
        });
    },
    changePage(direction) {
      console.log("事件响应");
      if (this.pageLock) {
        //防止触发多个touchmove事件
        return;
      }
      console.log(this.currentPage);
      this.pageLock = true;
      if (direction == "up") {
        if (this.currentPage < 11) {
          console.log("upupupup");
          this.currentPage++;
          this.$set(this["page" + this.currentPage], "fadeIn", true);
          this.$set(this["page" + this.currentPage], "animationStart", true);
          this.$set(
            this["page" + (this.currentPage - 1)],
            "animationStart",
            false
          );
        }
      } else if (direction == "down") {
        if (this.currentPage > 1) {
          this.$set(this["page" + this.currentPage], "fadeIn", false);
          this.$set(this["page" + this.currentPage], "animationStart", false);
          this.$set(
            this["page" + (this.currentPage - 1)],
            "animationStart",
            true
          );
          this.currentPage--;
        }
      }
      setTimeout(() => {
        this.pageLock = false;
        clearInterval(this.timer);
      }, 1000);
    },
    reWatch() {
      console.log("qweqwe");
      location.reload()
    },
    share() {}
  }
};
</script>
<style lang="less" scoped>
@import url("./../assets/css/common.less");
.container {
  position: relative;
  letter-spacing: 2px;
}
.page {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  &.fadeIn {
    opacity: 1;
  }
  transition: opacity 1s;
  font-family: "noto";
  font-size: 32px;
  color: rgba(255, 255, 255, 1);
  line-height: 34px;
}

.p1 {
  z-index: 10;
  background: url("../assets/img/mytrip/p1/bg.png") no-repeat center;
  background-size: 100% 100%;
  opacity: 1;
  .logo_area {
    position: absolute;
    right: 30px;
    top: 30px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    line-height: 39px;
    .name {
      margin-right: 15px;
      padding-right: 15px;
    }
    .logo {
      width: 36px;
    }
  }
  .text_img {
    position: absolute;
    top: 170px;
    right: 120px;
    img {
      width: 229px;
    }
  }
  .person {
    position: absolute;
    top: 615px;
    left: 208px;
    img {
      width: 193px;
    }
  }
  .music_note {
    position: absolute;
    img {
      width: 100%;
    }
    &.note1 {
      width: 25px;
      left: 367px;
      top: 419px;
      .fly_note1;
    }
    &.note2 {
      width: 28px;
      left: 371px;
      top: 576px;
      .fly_note2;
    }
    &.note3 {
      width: 15px;
      left: 399px;
      top: 518px;
      .fly_note3;
    }
    &.note4 {
      width: 34px;
      left: 360px;
      top: 672px;
    }
  }
  .light {
    width: 375px;
    transform-origin: 0 0;
    transform: rotate(-30deg);
    position: absolute;
    left: 0;
    top: 0;
    img {
      width: 100%;
    }
    .light_rotate;
    @keyframes light_rotate {
      0% {
        transform: rotate(-30deg);
      }

      100% {
        transform: rotate(0deg);
      }
    }
    .light_rotate {
      animation: light_rotate 1000ms linear 1 normal forwards;
    }
  }
}
.p2 {
  z-index: 20;
  background: url("../assets/img/mytrip/p2/bg.png") no-repeat center;
  background-size: 100% 100%;
  &.animationStart .text{
    .t1 {
          animation: bubble 900ms linear 1s 1 normal forwards;
    }
    .t2 {
      animation: bubble 900ms linear 2s 1 normal forwards;
    }
    .t3 {
      animation: bubble 900ms linear 3s 1 normal forwards;
    }
    .t4 {
      animation: bubble 900ms linear 4s 1 normal forwards;
    }
  }
  .text {
    margin: 157px 0 0 65px;
    line-height: 50px;
    .t1,
    .t2,
    .t3,
    .t4 {
      opacity: 0;
    }
    .para {
      margin-top: 30px;
    }
    //animation: bubble 900ms linear 1s 1 normal forwards;
   
  }
  .person {
    position: absolute;
    top: 632px;
    right: 113px;
    img {
      width: 206px;
    }
  }
  .star {
    position: absolute;
    width: 68px;
    &.star1 {
      top: 547px;
      left: 140px;
    }
    &.star2 {
      right: 88px;
      top: 337px;
    }
    &.star3 {
      left: 140px;
      top: 429px;
    }
    &.star4 {
      left: 413px;
      top: 435px;
    }
  }
  .p_light {
    position: absolute;
    top: 585px;
    right: 33px;
    .blink;
    img {
      width: 313px;
    }
  }
  .hand {
    width: 32px;
    position: absolute;
    top: 792px;
    left: 540px;
  }
}
.p3 {
  z-index: 30;
  background: url("../assets/img/mytrip/p3/bg.png") no-repeat center;
  background-size: 100% 100%;
  &.animationStart .text{
    .t1 {
      animation: bubble 900ms linear 1s 1 normal forwards;
    }
    .t2 {
      animation: bubble 900ms linear 2s 1 normal forwards;
    }
    .t3 {
      animation: bubble 900ms linear 3s 1 normal forwards;
    }
    .t4 {
      animation: bubble 900ms linear 4s 1 normal forwards;
    }
    .t5 {
      animation: bubble 900ms linear 5s 1 normal forwards;
    }
  }
  .text {
    margin: 104px 0 0 68px;
    line-height: 60px;
    .para {
      margin-top: 50px;
    }
    .t1,
    .t2,
    .t3,
    .t4,
    .t5 {
      opacity: 0;
    }
  }
  .person {
    position: absolute;
    bottom: 116px;
    right: 153px;
    img {
      width: 125px;
    }
  }
  .arm {
    position: absolute;
    top: 828px;
    left: 350px;
    width: 150px;
    transform-origin: right bottom;
    .arm-rotate;
    @keyframes arm {
      0% {
        transform: rotate(-5deg);
      }
      100% {
        transform: rotate(10deg);
      }
    }
    .arm-rotate {
      animation: arm 2900ms linear infinite alternate forwards;
    }
  }
  .star {
    position: absolute;
    top: 400px;
    left: 50%;
    transform: translateX(-50%);
    width: 606px;
    .blink;
  }
}
.p4 {
  z-index: 40;
  background: url("../assets/img/mytrip/p4/bg.png") no-repeat center;
  background-size: 100% 100%;
  font-family: noto-regular;
  font-size: 32px;
  &.animationStart .text .l1 {
    .line-bubble1;
  }
  &.animationStart .text .l2 {
    .line-bubble2;
  }
  &.animationStart .text .l3 {
    .line-bubble3;
  }
  &.animationStart .text .l4 {
    .line-bubble4;
  }
  .text {
    margin: 130px 0 0 70px;
    line-height: 50px;
    .num {
      font-family: noto;
      font-size: 38px;
      color: #95feef;
    }
    .l3 {
      margin-top: 60px;
    }

    .l4 {
      display: flex;
      align-items: center;
      .img-name {
        width: 328px;
      }
    }
  }
  .note {
    position: absolute;
  }
  .note1 {
    width: 28px;
    right: 300px;
    bottom: 474px;
  }
  .note2 {
    width: 25px;
    right: 364px;
    bottom: 455px;
  }
  .note3 {
    width: 34px;
    right: 352px;
    bottom: 359px;
  }
  .person {
    position: absolute;
    bottom: 144px;
    left: 124px;
    width: 318px;
  }
  .light {
    width: 246px;
    position: absolute;
    bottom: 355px;
    right: 120px;
    animation: lightFadeIn 800ms linear 0ms infinite alternate forwards;
    @keyframes lightFadeIn {
      0% {
        opacity: 0.3;
      }

      100% {
        opacity: 1;
      }
    }
  }
  .star {
    width: 271px;
    position: absolute;
    bottom: 555px;
    left: 0px;
    animation: starFadeIn 1000ms linear 0ms infinite alternate forwards;
    @keyframes starFadeIn {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }
  .hand {
    position: absolute;
    width: 40px;
    left: 204px;
    bottom: 290px;
    animation: handRotate 900ms linear 0ms infinite alternate forwards;
    transform-origin: 0 0;
    @keyframes handRotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(20deg);
      }
    }
  }
}
.p5 {
  z-index: 50;
  background: url("../assets/img/mytrip/p5/bg.png") no-repeat center;
  background-size: 100% 100%;
  font-family: noto-regular;
  font-size: 32px;
  &.animationStart .text .l1 {
    .line-bubble1;
  }
  &.animationStart .text .l2 {
    .line-bubble2;
  }
  &.animationStart .text .l3 {
    .line-bubble3;
  }
  &.animationStart .text .l4 {
    .line-bubble4;
  }
  &.animationStart .man {
    animation: float 1500ms linear 2600ms infinite alternate forwards;
  }
  .text {
    margin: 130px 0 0 126px;
    line-height: 50px;
    .num {
      font-family: noto;
      font-size: 38px;
      color: #95feef;
    }
    .l3 {
      margin-top: 50px;
    }
  }
  .star {
    width: 610px;
    position: absolute;
    left: 0;
    top: 300px;
  }
  .man {
    width: 610px;
    position: absolute;
    left: 55px;
    top: 640px;
  }
  .light {
    width: 354px;
    position: absolute;
    right: 63px;
    bottom: 335px;
    animation: lightFadeIn 800ms linear 0ms infinite alternate forwards;
    @keyframes lightFadeIn {
      0% {
        opacity: 0.3;
      }

      100% {
        opacity: 1;
      }
    }
  }
}
.p6 {
  z-index: 60;
  background: url("../assets/img/mytrip/p6/bg.png") no-repeat center;
  background-size: 100% 100%;
  .result {
    position: relative;
    width: 630px;
    height: 887px;
    margin: 174px auto 0 auto;
    background: url("../assets/img/mytrip/p6/result-bg.png") no-repeat center;
    background-size: cover;
    text-align: center;
    .avatar {
      width: 116px;
      height: 116px;
      position: absolute;
      left: 50%;
      top: -48px;
      margin-left: -58px;
      border: 4px solid rgba(250, 105, 255, 1);
      border-radius: 50%;
    }
    .result_main {
      position: absolute;
      padding: 10px 0 0 0;
      width: 100%;
      left: 0;
      top: 200px;
      .name_img {
        width: 500px;
      }
      .name_text {
        font-size: 25px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(250, 162, 49, 1);
        margin: 10px 0;
      }
      .learn_content {
        font-family: PingFangSC-Regular;
        color: #cb6f72;
        font-size: 28px;
        line-height: 50px;
        margin-top: 30px;
        margin-left: 180px;
        text-align: left;
        .b {
          font-family: PingFangSC-Medium;
          color: #ff9e21;
        }
        .w {
          font-family: PingFangSC-Medium;
        }
      }
    }
    .qr_area {
      position: absolute;
      right: 40px;
      bottom: 40px;
      display: flex;
      align-items: center;
      font-size: 21px;
      font-family: PingFangSC-Regular;
      color: rgba(102, 102, 102, 1);
      line-height: 34px;
      .left {
        text-align: right;
        margin-right: 20px;
      }
      .right {
        img {
          width: 115px;
        }
      }
    }
  }
  .save_tip {
    font-size: 22px;
    font-family: PingFangSC-Regular;
    text-align: center;
  }
  .bottom_btn {
    display: flex;
    justify-content: space-between;
    margin: 47px 80px 0 80px;
    font-size: 34px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(203, 111, 114, 1);
    img {
      width: 35px;
      margin-right: 10px;
    }
    .left,
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 8px;
      width: 240px;
      height: 80px;
      background: url("../assets/img/mytrip/p6/btn_bg.png") no-repeat center;
      background-size: cover;
    }
  }
}
@keyframes enterFloat {
  0% {
    transform: none;
  }

  100% {
    transform: translate3d(0, -20px, 0);
  }
}
.enter_float {
  animation: enterFloat 800ms linear infinite alternate;
}

@keyframes fly_note1 {
  0% {
    left: 367px;
    top: 419px;
    opacity: 1;
  }

  100% {
    left: 300px;
    top: 100px;
    opacity: 0;
  }
}
.fly_note1 {
  animation: fly_note1 12700ms linear infinite normal forwards;
}
@keyframes fly_note2 {
  0% {
    left: 371px;
    top: 576px;
    opacity: 1;
  }

  100% {
    left: 430px;
    top: 100px;
    opacity: 0;
  }
}
.fly_note2 {
  animation: fly_note2 12700ms linear infinite normal forwards;
}
@keyframes fly_note3 {
  0% {
    left: 399px;
    top: 518px;
    opacity: 1;
  }

  100% {
    left: 200px;
    top: 100px;
    opacity: 0;
  }
}
.fly_note3 {
  animation: fly_note3 12700ms linear infinite normal forwards;
}
@keyframes blink {
  0% {
    opacity: 0.2;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
.blink {
  animation: blink 900ms linear infinite alternate forwards;
}
@keyframes star1 {
  0% {
    top: 547px;
    left: 140px;
  }
  100% {
    top: 947px;
    left: -240px;
  }
}
.star1 {
  animation: star1 1900ms linear infinite normal forwards;
}
@keyframes star2 {
  0% {
    right: 88px;
    top: 337px;
    opacity: 0.3;
  }
  100% {
    right: 688px;
    top: 937px;
    opacity: 1;
  }
}
.star2 {
  animation: star2 1900ms linear infinite normal forwards;
}
@keyframes star3 {
  0% {
    left: 140px;
    top: 429px;
  }
  100% {
    left: -340px;
    top: 829px;
  }
}
.star3 {
  animation: star3 1900ms linear infinite normal forwards;
}
@keyframes star4 {
  0% {
    left: 413px;
    top: 435px;
    opacity: 0.3;
  }
  100% {
    left: 13px;
    top: 835px;
    opacity: 1;
  }
}
.star4 {
  animation: star4 2300ms 1s linear infinite normal forwards;
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 300px;
  width: 100%;
  text-align: center;
  img {
    position: absolute;
    bottom: 56px;
    left: 50%;
    margin-left: -26px;
    width: 52px;
  }
}
</style>
