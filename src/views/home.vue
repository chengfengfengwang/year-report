<template>
  <div class="container">
    <div class="page loading">
      <div class="progress_wrapper">
        <div class="p_grey">
          <div class="p_color"></div>
        </div>
        <span id="progressStatus">加载中...</span>
      </div>
    </div>
    <div
      class="p1 page"
      v-show="testPageShow"
      v-bind:class="{fadeIn:page1.fadeIn,animationStart:page1.animationStart}"
    >
      <div class="title"></div>
      <div class="year">
        <img class="front" src="../assets/img/home/p1/p1_201@2x.png" alt>
        <img class="end" src="../assets/img/home/p1/p1_8@2x.png" alt>
      </div>

      <div class="page_middle">
        <div class="circle"></div>
        <div class="logo"></div>
        <img class="guitar" src="../assets/img/home/p1/p1_guitar@2x.png" alt>
        <img class="kalimba" src="../assets/img/home/p1/p1_kalimba@2x.png" alt>
        <img class="uk" src="../assets/img/home/p1/p1_ukulele@2x.png" alt>
        <img class="djembe" src="../assets/img/home/p1/p1_djembe@2x.png" alt>
        <img src="../assets/img/home/p1/rocket.png" alt class="rocket">
      </div>
      <img class="star1" src="../assets/img/home/p1/star1.png" alt>
      <img class="star2" src="../assets/img/home/p1/star2.png" alt>
      <img class="star3" src="../assets/img/home/p1/star3.png" alt>
      <img src="../assets/img/home/p1/arrow.png" alt class="arrow arrow1">
      <img src="../assets/img/home/p1/arrow.png" alt class="arrow arrow2">
      <img src="../assets/img/home/p1/arrow.png" alt class="arrow arrow3">
      <img src="../assets/img/home/p1/find.png" alt class="find">
      <img src="../assets/img/home/p1/more.png" alt class="more">
    </div>
    <div
      class="p2 page"
      v-bind:class="{fadeIn:page2.fadeIn,animationStart:page2.animationStart}"
      v-show="testPageShow"
    >
      <div class="t1">
        <p class="c1">
          <span class="year_num">2018</span>
          <span class="common_text">年，一共有</span>
        </p>
        <!-- <p
          class="c2"
        >{{beginArr[0]}},{{beginArr[1]}}{{beginArr[2]}}{{beginArr[3]}},{{beginArr[4]}}{{beginArr[5]}}{{beginArr[6]}}人</p> -->
        <p
          class="c2"
        >1,131,123人</p>
      </div>
      <div class="middle_img">
        <img src="../assets/img/home/p2/orbit_p2@2x.png" alt="" class="orbit">
        <img src="../assets/img/home/p2/music_group.png" alt="" class="music_group">
        <img src="../assets/img/home/p2/logo_p2@2x.png" alt="" class="music_logo">
      </div>
      <div class="t2">
        <p class="c1">在AI音乐学院</p>
        <p class="c2">开启了他们的智能学琴之路</p>
      </div>
      <img src="../assets/img/home/p2/bottom_text.png" alt class="bottom_text">
    </div>
    <div
      class="p3 page"
      v-bind:class="{fadeIn:page3.fadeIn,animationStart:page3.animationStart}"
      v-show="true"
    >
      <div class="c1">
        2018年，我们在全球
        <span class="num">48</span>个国家
        <br>都发现了学员的足迹
      </div>
      <div class="c2">
        来自人口仅有37万的中美洲小国——
        <span style="color:#43F3E0">伯利兹</span>
        <br>非洲第一岛国——
        <span style="color:#43F3E0">马达加斯加</span>
        <br>甚至是充满中东风情的
        <span style="color:#43F3E0">伊拉克</span>...
      </div>
      <img src="../assets/img/home/p3/text_img.png" alt class="text_img">
      <!-- <div class="map"></div> -->
      <div class="earth_wrap">
        <div class="map" v-bind:class="{animationStart:page3.fadeIn}">
          <img src="../assets/img/home/p3/p3_navpoint@2x.png" alt class="point point1">
          <img src="../assets/img/home/p3/p3_navpoint@2x.png" alt class="point point2">
          <img src="../assets/img/home/p3/p3_navpoint@2x.png" alt class="point point3">
          <img src="../assets/img/home/p3/p3_navpoint@2x.png" alt class="point point4">
          <img src="../assets/img/home/p3/p3_cloud@2x.png" alt class="cloud cloud1">
          <img src="../assets/img/home/p3/p3_cloud@2x.png" alt class="cloud cloud2">
          <img src="../assets/img/home/p3/p3_cloud@2x.png" alt class="cloud cloud3">
        </div>
        <img class="earth" src="../assets/img/home/p3/earth.png" alt>
      </div>
    </div>
    <div
      class="p4 page"
      v-bind:class="{fadeIn:page4.fadeIn,animationStart:page4.animationStart}"
      v-show="testPageShow"
    >
      <img src="./../assets/img/home/p4/text1.png" alt class="text1">
      <img src="./../assets/img/home/p4/text2.png" alt class="text2">
      <img src="./../assets/img/home/p4/text3.png" alt class="text3">
      <img src="./../assets/img/home/p4/text4.png" alt class="text4">
      <div class="layer1"></div>
      <img src="./../assets/img/home/p2/note.png" alt class="note note1">
      <img src="./../assets/img/home/p2/note.png" alt class="note note2">
      <img src="./../assets/img/home/p2/note.png" alt class="note note3">
      <img src="./../assets/img/home/p2/note.png" alt class="note note4">
      <img src="./../assets/img/home/p2/note.png" alt class="note note5">
      <div class="layer2"></div>
      <div class="light"></div>
    </div>
    <div
      class="p5 page"
      v-bind:class="{fadeIn:page5.fadeIn,animationStart:page5.animationStart}"
      v-show="testPageShow"
    >
      <div class="layer1"></div>
      <img src="./../assets/img/home/p2/note.png" alt class="note note1">
      <img src="./../assets/img/home/p2/note.png" alt class="note note2">
      <img src="./../assets/img/home/p2/note.png" alt class="note note3">
      <img src="./../assets/img/home/p2/note.png" alt class="note note4">
      <img src="./../assets/img/home/p2/note.png" alt class="note note5">
      <div class="layer2"></div>
      <div class="c1">这些明星省份的同学
        <br>也很有音乐细胞
      </div>
      <div class="c2">
        <p class="title">TOP5:</p>
        <p class="province">江苏 山东 浙江 四川 河南</p>
      </div>
      <div class="c3">
        <p class="l1">在城市的霓虹下，</p>
        <p class="l2">还有音乐相伴，甚好</p>
      </div>
    </div>
    <div
      class="p6 page"
      v-bind:class="{fadeIn:page6.fadeIn,animationStart:page6.animationStart}"
      v-show="testPageShow"
    >
      <div class="text">
        <p class="l1">深夜0点</p>
        <p class="l2">很多人都已经进入了梦乡</p>
        <p class="l3">
          可还是有超过
          <span class="num">5.37%</span>的学员按响琴弦
        </p>
      </div>
      <img class="text_img" src="./../assets/img/home/p6/text_img.png" alt>
    </div>
    <div
      class="p7 page"
      v-bind:class="{fadeIn:page7.fadeIn,animationStart:page7.animationStart}"
      v-show="testPageShow"
    >
      <img src="./../assets/img/home/p7/text_img.png" alt class="text_img">
      <img src="./../assets/img/home/p7/text_img2.png" alt class="text_img2">
      <img src="./../assets/img/home/p7/cloud.png" alt class="cloud cloud1">
      <img src="./../assets/img/home/p7/cloud.png" alt class="cloud cloud2">
      <img src="./../assets/img/home/p7/cloud.png" alt class="cloud cloud3">
      <div class="city"></div>
      <div class="building"></div>
      <div class="tree"></div>
      <div class="light"></div>
      <div class="base"></div>
      <div class="train"></div>
      <!-- <img src="./../assets/img/home/p7/building.png" alt="" class="building"> -->
    </div>
    <div
      class="p8 page"
      v-bind:class="{fadeIn:page8.fadeIn,animationStart:page8.animationStart}"
      v-show="testPageShow"
    >
      <img src="./../assets/img/home/p8/p8_bm@2x.png" alt class="mode1">
      <img src="./../assets/img/home/p8/p8_F@2x.png" alt class="mode2">
      <img src="./../assets/img/home/p8/p8_satellite@2x.png" alt class="mode3">
      <img src="./../assets/img/home/p8/p8_box@2x.png" alt class="mode4">
      <div class="text">
        <p class="l1">这些难题你是否觉得似曾相识？</p>
        <p class="l2">
          <span class="w">43.18%</span> 的尤克里里学员认为
          <span class="w">Bm</span>和弦很难
        </p>
        <p class="l3">
          <span class="w">31.25%</span> 的吉他学员认为
          <span class="w">F</span>和弦、和弦组成最让人头疼
        </p>
      </div>
    </div>
    <div
      class="p9 page"
      v-bind:class="{fadeIn:page9.fadeIn,animationStart:page9.animationStart}"
      v-show="testPageShow"
    >
      <img class="zan" src="./../assets/img/home/p9/p9_like2@2x.png" alt>
      <img src="./../assets/img/home/p9/p9_TV@2x.png" alt class="tv">
      <div class="text1">
        <p class="l1">
          2018年9月25日
          <span class="b">ITV</span>上线
        </p>
        <p class="l2">近百名同学上传了自己的作品</p>
      </div>
      <div class="text2">
        <p class="l1">
          <span class="b">刘继峰</span>同学的
          <span class="b">《纸短情长》</span>最受大家的喜欢
        </p>
        <p class="l2">
          有
          <span class="b">1757</span>人为他点赞
        </p>
      </div>
    </div>
    <div
      class="p10 page"
      v-bind:class="{fadeIn:page10.fadeIn,animationStart:page10.animationStart}"
      v-show="testPageShow"
    >
      <div class="text1">
        <p class="l1">这一年, AI音乐学院上新了</p>
        <p class="l2">
          <span class="b">非洲鼓、拇指琴2</span>个乐器品类
        </p>
      </div>
      <div class="ring">
        <img src="./../assets/img/home/p10/p10_course11@2x.png" alt class="module1">
        <img src="./../assets/img/home/p10/p10_course22@2x.png" alt class="module2">
        <img src="./../assets/img/home/p10/p10_logo@2x.png" alt class="logo">
        <img src="./../assets/img/home/p10/p10_kalimba@2x.png" alt class="kalimba">
        <img src="./../assets/img/home/p10/p10_djembe@2x.png" alt class="dj">
      </div>
      <div class="text2">
        <p class="l1">共上线了32套课程</p>
        <p class="l2">
          <span class="b">《小涛24+X首弹唱课》</span>和
          <span class="b">《N7吉他初级乐理课》</span>
        </p>
        <p class="l3">是AI年度最受欢迎的选修课程</p>
      </div>
    </div>
    <div
      class="p11 page"
      v-bind:class="{fadeIn:page11.fadeIn,animationStart:page11.animationStart}"
      v-show="testPageShow"
    >
      <div class="year">
        <img class="front" src="../assets/img/home/p1/p1_201@2x.png" alt>
        <img class="end" src="../assets/img/home/p1/p1_8@2x.png" alt>
        <img src="../assets/img/home/p11/p11_9@2x.png" alt class="nine">
      </div>
      <div class="text1">
        <p class="l1">我们依然不忘初心，用最优质的服务</p>
        <p class="l2">带给所有人最好的学习体验，</p>
        <p class="l3">让所有人学会用音乐去表达！</p>
      </div>
      <img src="../assets/img/home/p11/text_img.png" alt class="text_img">
      <img src="../assets/img/home/p11/p11_box@2x.png" alt class="box">
      <img class="star1" src="../assets/img/home/p1/star1.png" alt>
      <img class="star2" src="../assets/img/home/p1/star2.png" alt>
      <img class="star3" src="../assets/img/home/p1/star3.png" alt>
      <div v-show="openInApp" class="open_in_app">
        <div class="ready_btn">
          <img src="../assets/img/home/p11/p11_share@2x.png" alt> 准备好了
        </div>
        <div class="bottom_menu">
          <div class="left" @click="reWatch">
            <img src="../assets/img/home/p11/p11_reboot@2x.png" alt>再看一遍
          </div>
          <router-link class="right" to="/myMusicTrip" tag="div">
            <img src="../assets/img/home/p11/p11_next@2x.png" alt>查看我的2018
          </router-link>
        </div>
      </div>
      <div v-show="!openInApp" class="open_in_h5">
        <div class="getgiftbtn" @click="getGiftInH5">
          <img src="../assets/img/home/p11/getGiftBtn.png" alt>
        </div>
        <div class="getgifttext">
          <img src="../assets/img/home/p11/getGiftText.png" alt>
        </div>
        <div @click="reWatch" class="rewatch">
          <img src="../assets/img/home/p11/p11_reboot@2x.png" alt>再看一遍
        </div>
      </div>
    </div>
    <!-- <div class="bottom"></div> -->
  </div>
</template>
<script>
import { getPosition } from "./../utils/util.js";
export default {
  name: "home",
  data() {
    return {
      testPageShow: true,
      beginArr: [0, 3, 9, 4, 7, 6, 3],
      endArr: [1, 1, 3, 1, 1, 2, 3],
      currentPage: "1",
      pageLock: false,
      timer: "", //所有定时器公用一个timer
      page1: {
        fadeIn: false,
        animationStart: false
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
      page7: {
        fadeIn: false,
        animationStart: false
      },
      page8: {
        fadeIn: false,
        animationStart: false
      },
      page9: {
        fadeIn: false,
        animationStart: false
      },
      page10: {
        fadeIn: false,
        animationStart: false
      },
      page11: {
        fadeIn: true,
        animationStart: true
      },
      openInApp: false
    };
  },
  mounted() {
    this.bindTouchEvent();
    this.initLoading();
    //this.page2NumChange();
    this.cloudMove(document.querySelector(".p7 .cloud1"));
    this.cloudMove(document.querySelector(".p7 .cloud2"));
    this.cloudMove(document.querySelector(".p7 .cloud3"));
  },
  methods: {
    initLoading() {
      var that = this;
      var p = document.querySelector(".p_color");
      var bgList = document.querySelectorAll(".page");
      console.log(bgList);
      var bgArr = [],
        sum = 0;
      var fakeTemp = 0;
      var minPersent = (1 / bgList.length) * 100;
      bgList.forEach(function(e, index) {
        var style = e.currentStyle || window.getComputedStyle(e, false);
        //console.log(style.backgroundImage.slice(4, -1).replace(/"/g, ""))
        console.log(style.backgroundImage.match(/url\(\"?(.*)\"\)/)[1]);
        bgArr.push(style.backgroundImage.match(/url\(\"?(.*)\"\)/)[1]);
      });
      var timer = setInterval(() => {
        fakeTemp += 2;
        if (fakeTemp < minPersent) {
          p.style.width = fakeTemp + "%";
        } else {
          clearInterval(timer);
        }
      }, 1000);
      // setTimeout(()=>{
      //     clearInterval(timer)
      // },3000)
      bgArr.forEach((e, index) => {
        var img = new Image();
        img.src = e;
        if (img.complete) {
          responseImgLoad();
        }
        img.onload = function() {
          responseImgLoad();
        };
      });
      function responseImgLoad() {
        clearInterval(timer);
        sum++;
        p.style.width = (sum / bgArr.length) * 100 + "%";
        if (sum / bgArr.length == 1) {
          setTimeout(() => {
            console.log(that);
            that.$set(that.page1, "fadeIn", true);
            that.$set(that.page1, "animationStart", true);
            document.querySelector("#progressStatus").innerHTML = "加载完成";
          }, 1000);
        }
      }
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
          e.preventDefault();
          moveEndX = e.changedTouches[0].pageX;
          moveEndY = e.changedTouches[0].pageY;
          var X = moveEndX - startX;
          var Y = moveEndY - startY;
          if (Math.abs(X) > Math.abs(Y) && X > 0) {
            //alert("left 2 right");
          } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
            //alert("right 2 left");
          } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
            //alert("top 2 bottom");
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
      if (this.pageLock) {
        //防止触发多个touchmove事件
        return;
      }
      this.pageLock = true;
      if (direction == "up") {
        if (this.currentPage < 11) {
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
    page2NumChange() {
      var that = this;
      for (let index = 0; index < this.beginArr.length; index++) {
        let timer = setInterval(() => {
          that.beginArr.splice(index, 1, ++that.beginArr[index]);
          if (that.beginArr[index] > 9) {
            that.beginArr.splice(index, 1, 0);
          }
        }, 80);
        setTimeout(
          () => {
            clearInterval(timer);
            that.beginArr.splice(index, 1, that.endArr[index]);
          },
          1000 * (index + 1),
          timer,
          index
        );
      }
    },
    cloudMove(e) {
      //var cloud1 = document.querySelector(".cloud1");
      var move = getPosition(e).x;
      //return
      this.timer = setInterval(() => {
        move -= 2;
        e.style.left = move + "px";
        if (move < -142) {
          move = window.innerWidth;
        }
        //console.log(move)
      }, 80);
    },
    reWatch() {
      location.reload();
    },
    getGiftInH5(){
      location.href = "http://api.iguitar.immusician.com/d?c=annals";
    }
  }
};
</script>
<style lang="less" scoped>
@import url("./../assets/css/common.less");
.page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity 1s;
  &.fadeIn {
    opacity: 1;
  }
}
.loading {
  opacity: 1;
  background: url("../assets/img/home/p3/bg.png") no-repeat center;
  background-size: cover;
  .progress_wrapper {
    margin: 500px auto 0 auto;
    width: 50%;
    padding: 0 10px;
    overflow: hidden;
    box-sizing: border-box;
    text-align: center;
  }

  .p_grey {
    /* background-color: gray; */
    width: 100%;
    height: 30px;
    border-radius: 30px;
    overflow: hidden;
    border: 1px solid #999;
    margin-bottom: 20px;
  }

  .p_color {
    background-color: blueviolet;
    width: 0%;
    height: 30px;
    border-radius: 30px;
    transition: width 1000ms;
  }
  #progressStatus {
    font-size: 30px;
  }
}
.p1 {
  background: url("../assets/img/home/p1/p1_bg.png") no-repeat center;
  background-size: cover;
  //opacity: 1;
  z-index: 10;
  .title {
    margin: 122px auto 0 auto;
    width: 545px;
    height: 113px;
    background: url("../assets/img/home/p1/title.png") no-repeat center;
    background-size: contain;
  }
  .year {
    margin: 0 auto;
    text-align: center;
    .front {
      width: 285px;
    }
    .end {
      width: 117px;
    }
  }
  .page_middle {
    position: absolute;
    left: 0;
    top: 460px;
    width: 100%;
    height: 812px;
    .circle {
      position: absolute;
      left: 63px;
      top: 134px;
      width: 647px;
      height: 463px;
      background: url("../assets/img/home/p1/p1_orbit@2x.png") no-repeat center;
      background-size: 100% 100%;
    }
    .logo {
      // margin: 0 auto;
      width: 100%;
      height: 790px;
      background: url("../assets/img/home/p1/p1_logo@2x.png") no-repeat center;
      background-size: cover;
      background-position: 88% 0%;
    }
    .guitar {
      position: absolute;
      left: 300px;
      top: -100px;
      width: 255px;
      animation: float 1500ms linear infinite alternate;
    }
    .kalimba {
      position: absolute;
      left: 164px;
      top: 204px;
      width: 207px;
      animation: float 1500ms linear infinite alternate;
    }
    .uk {
      position: absolute;
      left: 168px;
      top: -72px;
      width: 261px;
      animation: float 1500ms linear infinite alternate;
    }
    .djembe {
      position: absolute;
      right: 90px;
      top: 200px;
      width: 225px;
      animation: float 1500ms linear infinite alternate;
    }
    .rocket {
      position: absolute;
      left: 110px;
      top: 349px;
      width: 56px;
    }
  }
  .star1 {
    position: absolute;
    left: 15px;
    top: 792px;
    width: 128px;
  }
  .star2 {
    position: absolute;
    right: 0;
    top: 311px;
    width: 137px;
  }
  .star3 {
    position: absolute;
    left: 0;
    top: 259px;
    width: 143px;
  }
  .arrow {
    position: absolute;
    left: 362px;
    width: 27px;
    opacity: 1;
    transform: rotate(180deg);
    animation: arrowFloat 1500ms linear 1s infinite alternate;
  }
  .arrow1 {
    bottom: 146px;
  }
  .arrow2 {
    bottom: 130px;
  }
  .arrow3 {
    bottom: 115px;
  }
  @keyframes arrowFloat {
    0% {
      transform: translate3d(0, -10px, 0) rotate(180deg);
    }

    100% {
      transform: translate3d(0, 10px, 0) rotate(180deg);
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .find {
    position: absolute;
    left: 272px;
    bottom: 130px;
    width: 52px;
  }
  .more {
    position: absolute;
    right: 262px;
    bottom: 130px;
    width: 64px;
  }
}
.p2 {
  z-index: 20;
  background: url("../assets/img/home/p2/p2_bg.png") no-repeat center;
  background-size: cover;
  text-align: center;
  &.animationStart .t1 {
    .bubble1;
  }
  &.animationStart .t2 {
    .bubble2;
  }
  &.animationStart .bottom_text {
    .bubble3;
  }
  .t1 {
    margin-top: 7%;
    .c1 {
      .year_num {
        font-family: "noto-bold";
        font-size: 52px;
        font-weight: bold;
      }
      .common_text {
        font-family: "noto-smbold";
        font-size: 36px;
        font-weight: 600;
      }
    }
    .c2 {
      font-family: "noto-bold";
      font-size: 52px;
      font-weight: bold;
      font-size: 48px;
      font-weight: 900;
      color: rgba(96, 255, 242, 1);
    }
  }
  .middle_img{
    position: absolute;
    left: 50%;
      top:45%;
      transform: translateX(-50%);
    .orbit{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translateX(-50%) translateY(-50%);
      width: 618px;
    }
    .music_group{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translateX(-50%) translateY(-50%);
      width: 537px;
    }
    .music_logo{
      position: absolute;
      left: 50%;
      top:50%;
      transform: translateX(-50%) translateY(-50%);
      width: 363px;
    }
  }
  .t2 {
    position: absolute;
    left: 0px;
    top: 73%;
    width: 100%;
    font-size: 32px;
    font-family: noto-smbold;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 68px;
  }
  .bottom_text {
    position: absolute;
    left: 116px;
    top: 85%;
    width: 518px;
  }
}
.p3 {
  z-index: 30;
  background: url("../assets/img/home/p3/bg.png") no-repeat center;
  background-size: cover;
  &.animationStart .c1 {
    .bubble1;
  }
  &.animationStart .c2 {
    .bubble2;
  }
  &.animationStart .text_img {
    .bubble3;
  }
  &.animationStart .map {
    animation: mapMove 6s linear 0s 1 normal forwards;
  }
  .c1 {
    margin: 70px 0 0 60px;
    font-family: noto-smbold;
    font-size: 32px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 68px;
    .num {
      font-size: 40px;
    }
  }
  .c2 {
    margin: 60px 0 0 60px;
    font-family: noto-smbold;
    font-size: 26px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
  }
  .text_img {
    position: absolute;
    left: 36px;
    top: 430px;
    width: 417px;
  }
  .earth_wrap {
    position: relative;
    width: 849px;
    height: 849px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: -200px;
    top: 600px;
    // left: 0px;
    // bottom: 0px;
    background: url("./../assets/img/home/p3/earth_shadow.png") no-repeat center;
    background-size: cover;
    z-index: 39;
    .map {
      z-index: 31;
      //width: 100%;
      width: 1426px;
      height: 828px;
      background: url("./../assets/img/home/p3/map.png") no-repeat center;
      background-size: cover;
      position: absolute;
      left: -400px;
      top: 0;
      .point {
        position: absolute;
        width: 66px;
        z-index: 33;
      }
      .point1 {
        right: 528px;
        top: 316px;
      }
      .point2 {
        right: 256px;
        top: 282px;
      }
      .point3 {
        right: 668px;
        top: 128px;
      }
      .point4 {
        right: 348px;
        top: 216px;
      }
      .cloud {
        position: absolute;
        width: 460px;
      }
      .cloud1 {
        right: 100px;
        top: 60px;
        transform: rotate(-30deg);
      }
      .cloud2 {
        right: 0px;
        top: 300px;
        transform: rotate(-30deg);
      }
      .cloud3 {
        right: 424px;
        top: 397px;
        transform: rotate(-30deg);
      }
      @keyframes mapMove {
        0% {
          transform: translateX(-400px) translateY(0px);
        }

        100% {
          transform: translateX(0px) translateY(-50px);
        }
      }
    }
    .earth {
      position: absolute;
      left: -180px;
      top: -130px;
      width: 150%;
      opacity: 0.5;
    }
  }
}
.p4 {
  z-index: 40;
  background: url("../assets/img/home/p4/p4_bg@2x.png") no-repeat center;
  background-size: 100% 100%;
  &.animationStart .text1 {
    .bubble1;
  }
  &.animationStart .text2 {
    .bubble2;
  }
  &.animationStart .text3 {
    .bubble3;
  }
  .text1 {
    position: absolute;
    left: 54px;
    top: 71px;
    width: 400px;
  }
  .text2 {
    position: absolute;
    left: 52px;
    top: 220px;
    width: 520px;
  }
  .text3 {
    position: absolute;
    left: 52px;
    top: 370px;
    width: 460px;
  }
  .text4 {
    position: absolute;
    right: 59px;
    top: 74px;
    width: 83px;
    z-index: 41;
  }
  .layer1 {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: url("./../assets/img/home/p4/p4_layer11.png") no-repeat center;
    background-size: cover;
  }
  .layer2 {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: url("./../assets/img/home/p4/p4_layer22.png") no-repeat center;
    background-size: cover;
  }
  .light {
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
    margin-left: 30px;
    background: url("../assets/img/home/p4/light.png") no-repeat center;
    background-size: cover;
    width: 178px;
    height: 1147px;
  }
  .note {
    position: absolute;

    width: 55px;
  }
  .note1 {
    left: 300px;
    top: 730px;
    animation: noteBubble 5s linear 0s infinite normal forwards;
  }
  .note2 {
    left: 370px;
    top: 800px;
    animation: noteBubble 7s linear 0s infinite normal forwards;
  }
  .note3 {
    left: 600px;
    top: 700px;
    animation: noteBubble 9s linear 0s infinite normal forwards;
  }
  .note4 {
    left: 70px;
    top: 770px;
    animation: noteBubble 7s linear 0s infinite normal forwards;
  }
  .note5 {
    left: 500px;
    top: 910px;
    animation: noteBubble 9s linear 0s infinite normal forwards;
  }
  @keyframes noteBubble {
    0% {
      opacity: 1;
      transform: translate3d(0, 0px, 0) rotate(0deg);
    }
    100% {
      opacity: 0;
      transform: translate3d(50px, -700px, 0) rotate(120deg);
    }
  }
}
.p5 {
  z-index: 50;
  background: url("../assets/img/home/p5/bg.png") no-repeat center;
  background-size: 100% 100%;
  &.animationStart .c1 {
    .bubble1;
  }
  &.animationStart .c2 {
    .bubble2;
  }
  .layer1 {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/img/home/p5/p5_layer2.png") no-repeat center;
    background-size: 100% 100%;
  }
  .layer2 {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/img/home/p5/p5_layer1.png") no-repeat center;
    background-size: 100% 100%;
  }
  .c1 {
    font-family: noto-smbold;
    font-size: 28px;
    margin: 70px 0 0 60px;
    letter-spacing: 2px;
  }
  .c2 {
    margin: 70px 0 0 60px;
    letter-spacing: 2px;
    .title {
      font-family: noto-bold;
      color: #9affe6;
      font-size: 30px;
    }
    .province {
      font-family: noto-smbold;
      font-size: 30px;
    }
  }
  .c3 {
    position: absolute;
    top: 74px;
    right: 63px;
    writing-mode: vertical-rl;
    font-family: noto-smbold;
    font-size: 36px;
    font-weight: 600;
    color: #3a316d;
    .l2 {
      margin-top: 3em;
    }
  }
  .note {
    position: absolute;

    width: 55px;
  }
  .note1 {
    left: 300px;
    top: 730px;
    animation: noteBubble 5s linear 0s infinite normal forwards;
  }
  .note2 {
    left: 370px;
    top: 800px;
    animation: noteBubble 7s linear 0s infinite normal forwards;
  }
  .note3 {
    left: 600px;
    top: 700px;
    animation: noteBubble 9s linear 0s infinite normal forwards;
  }
  .note4 {
    left: 70px;
    top: 770px;
    animation: noteBubble 7s linear 0s infinite normal forwards;
  }
  .note5 {
    left: 500px;
    top: 910px;
    animation: noteBubble 9s linear 0s infinite normal forwards;
  }
  @keyframes noteBubble {
    0% {
      opacity: 1;
      transform: translate3d(0, 0px, 0) rotate(0deg);
    }

    100% {
      opacity: 0;
      transform: translate3d(50px, -700px, 0) rotate(120deg);
    }
  }
}
.p6 {
  z-index: 60;
  background: url("../assets/img/home/p6/bg.png") no-repeat center;
  background-size: 100% 100%;
  &.animationStart .l1 {
    .bubble1;
  }
  &.animationStart .l2 {
    .bubble2;
  }
  &.animationStart .l3 {
    .bubble3;
  }
  &.animationStart .text_img {
    animation: fadeIn 900ms linear 4500ms 1 normal forwards;
  }
  .text_img {
    position: absolute;
    left: 100px;
    top: 425px;
    width: 574px;
    opacity: 0;
  }
  .text {
    text-align: center;
    margin: 135px 0 0 0px;
    line-height: 50px;
  }
  .l1 {
    font-family: noto-bold;
    color: #87f1de;
    font-size: 30px;
  }
  .l2,
  .l3 {
    font-family: noto-smbold;
    color: #fff;
    font-size: 26px;
  }
  .num {
    color: #87f1de;
    font-family: noto-bold;
    font-size: 30px;
  }
}
.p7 {
  z-index: 70;
  background: url("../assets/img/home/p7/p7_bg.png") no-repeat center;
  background-size: 100% 100%;
  text-align: center;
  &.animationStart .text_img {
    .bubble1;
  }
  &.animationStart .text_img2 {
    animation: fadeIn 900ms linear 3000ms 1 normal forwards;
  }
  .text_img {
    width: 529px;
    margin-top: 110px;
    z-index: 72;
  }
  .text_img2 {
    width: 426px;
    margin-top: 40px;
    z-index: 73;
    position: relative;
    opacity: 0;
  }
  .cloud {
    position: absolute;
    width: 285px;
  }
  .cloud1 {
    left: 200px;
    top: 260px;
    //animation: cloud 1s linear 0s infinite normal forwards;
  }
  .cloud2 {
    left: 500px;
    top: 360px;
  }
  .cloud3 {
    left: 20px;
    top: 480px;
  }
  .city {
    position: absolute;
    left: 0;
    top: 400px;
    width: 100%;
    height: 592px;
    background: url("../assets/img/home/p7/city.png") no-repeat center;
    background-size: cover;
    background-position: 0 0;
    animation: move 18s linear 0s infinite normal forwards;
  }
  @keyframes move {
    0% {
      background-position: 0% 0;
    }

    100% {
      background-position: 100% 0;
    }
  }
  .building {
    position: absolute;
    left: 0;
    bottom: 0px;
    background: url("../assets/img/home/p7/building.png") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 663px;
    background-position: 0 0;
    animation: move 1s linear 0s infinite normal forwards;
  }
  .tree {
    position: absolute;
    left: 0;
    bottom: -180px;
    background: url("../assets/img/home/p7/tree.png") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 753px;
    animation: move 0.7s linear 0s infinite normal forwards;
  }
  .light {
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
    background: url("../assets/img/home/p4/light.png") no-repeat center;
    background-size: cover;
    width: 178px;
    height: 1147px;
  }
  .base {
    position: absolute;
    left: 50%;
    bottom: -215px;
    margin-left: -78px;
    background: url("../assets/img/home/p7/base.png") no-repeat center;
    background-size: cover;
    width: 157px;
    height: 458px;
  }
  .train {
    position: absolute;
    left: 0;
    bottom: 70px;
    background: url("../assets/img/home/p7/train.png") no-repeat center;
    background-size: cover;
    width: 100%;
    height: 392px;
  }
}
.p8 {
  z-index: 80;
  background: url("../assets/img/home/p8/p8_bg.png") no-repeat center;
  background-size: 100% 100%;
  &.animationStart .l1 {
    .bubble1;
  }
  &.animationStart .l2 {
    .bubble2;
  }
  &.animationStart .l3 {
    .bubble3;
  }

  .mode1 {
    width: 522px;
    position: absolute;
    top: 8%;
    left: 128px;
    z-index: 82;
    animation: float 2500ms linear infinite alternate;
  }
  .mode2 {
    width: 390px;
    position: absolute;
    top: 29%;
    left: 297px;
    z-index: 83;
    animation: float 2500ms linear infinite alternate;
  }
  .mode3 {
    width: 323px;
    position: absolute;
    top: 31%;
    left: 134px;
    z-index: 84;
    animation: float 2500ms linear infinite alternate;
  }
  .mode4 {
    width: 323px;
    position: absolute;
    top: 42%;
    left: 130px;
    z-index: 81;
    animation: float 2500ms linear infinite alternate;
  }
  .text {
    position: absolute;
    text-align: center;
    width: 100%;
    left: 0;
    top: 80%;
    font-family: noto-smbold;
    font-size: 24px;
    color: #fff;
    line-height: 40px;
    .w {
      color: #46fff8;
      font-size: 30px;
      font-family: noto-bold;
    }
  }
}
.p9 {
  z-index: 90;
  background: url("../assets/img/home/p8/p8_bg.png") no-repeat center;
  background-size: 100% 100%;
  &.animationStart .zan {
    animation: float 2000ms linear infinite alternate;
  }
  &.animationStart .tv {
    animation: float 2000ms linear infinite alternate;
  }
  &.animationStart .text1 {
    .bubble1;
  }
  &.animationStart .text2 {
    .bubble2;
  }
  .zan {
    position: absolute;
    left: 0;
    top: 400px;
    width: 718px;
  }
  .tv {
    position: absolute;
    left: 163px;
    top: 370px;
    width: 450px;
  }
  .text1 {
    position: absolute;
    text-align: center;
    width: 100%;
    left: 0;
    top: 150px;
    font-family: noto-smbold;
    font-size: 30px;
    color: #fff;
    line-height: 60px;
    .b {
      color: #57f9ff;
      font-size: 30px;
      font-family: noto-bold;
    }
  }
  .text2 {
    position: absolute;
    text-align: center;
    width: 100%;
    left: 0;
    bottom: 173px;
    font-family: noto-smbold;
    font-size: 24px;
    color: #fff;
    line-height: 40px;
    .b {
      color: #57f9ff;
      font-size: 30px;
      font-family: noto-bold;
    }
  }
}
.p10 {
  z-index: 100;
  background: url("../assets/img/home/p8/p8_bg.png") no-repeat center;
  background-size: 100% 100%;
  &.animationStart .text1 .l1 {
    animation: p10bubble 700ms linear 300ms 1 normal forwards;
  }
  &.animationStart .text1 .l2 {
    animation: p10bubble 700ms linear 900ms 1 normal forwards;
  }
  &.animationStart .text2 .l1 {
    animation: p10bubble 700ms linear 1500ms 1 normal forwards;
  }
  &.animationStart .text2 .l2 {
    animation: p10bubble 700ms linear 2100ms 1 normal forwards;
  }
  &.animationStart .text2 .l3 {
    animation: p10bubble 700ms linear 2700ms 1 normal forwards;
  }
  @keyframes p10bubble {
    0% {
      opacity: 0;
      transform: translate3d(0, 50px, 0);
    }

    100% {
      opacity: 1;
      transform: none;
    }
  }
  .text1 {
    position: absolute;
    text-align: center;
    width: 100%;
    left: 0;
    top: 150px;
    font-family: noto-smbold;
    font-size: 30px;
    color: #fff;
    line-height: 60px;
    .b {
      color: #57f9ff;
      font-size: 30px;
      font-family: noto-bold;
    }

    .l1 {
      opacity: 0;
    }
    .l2 {
      opacity: 0;
    }
  }
  .ring {
    width: 675px;
    height: 492px;
    background: url("../assets/img/home/p10/p10_ring@2x.png") no-repeat center;
    background-size: cover;
    position: absolute;
    left: 50%;
    top: 370px;
    transform: translateX(-50%);
    .module1 {
      position: absolute;
      top: 55px;
      right: 330px;
      width: 145px;
      animation: float 2000ms linear infinite alternate;
    }
    .module2 {
      position: absolute;
      right: 109px;
      top: 16px;
      width: 165px;
      animation: float 2000ms linear infinite alternate;
    }
    .logo {
      position: absolute;
      left: 257px;
      top: 80px;
      width: 170px;
    }
    .kalimba {
      position: absolute;
      left: 120px;
      top: 200px;
      width: 178px;
      animation: float 2000ms linear infinite alternate;
    }
    .dj {
      position: absolute;
      right: 160px;
      top: 140px;
      width: 180px;
      animation: float 2000ms linear infinite alternate;
    }
  }
  .text2 {
    .l1 {
      opacity: 0;
    }
    .l2 {
      opacity: 0;
    }
    .l3 {
      opacity: 0;
    }
    position: absolute;
    text-align: center;
    width: 100%;
    left: 0;
    bottom: 230px;
    font-family: noto-bold;
    font-size: 24px;
    color: #fff;
    line-height: 60px;
    .b {
      color: #57f5fb;
      font-size: 30px;
      font-family: noto-bold;
    }
  }
}
.p11 {
  z-index: 110;
  background: url("../assets/img/home/p8/p8_bg.png") no-repeat center;
  background-size: 100% 100%;
  &.animationStart .year .end {
    animation: numFadeOut 3000ms ease-out 500ms 1 normal forwards;
  }
  &.animationStart .year .nine {
    animation: numFadeIn 2000ms ease-out 3000ms 1 normal forwards;
  }
  &.animationStart .text_img {
    animation: fadeIn 2000ms linear 5300ms 1 normal forwards;
  }
  &.animationStart .ready_btn {
    animation: fadeUp 2000ms linear 7300ms 1 normal forwards;
  }
  &.animationStart .bottom_menu {
    animation: fadeUp 1000ms linear 8500ms 1 normal forwards;
  }
  &.animationStart .open_in_h5 {
    animation: fadeIn 1000ms linear 6500ms 1 normal forwards;
  }
  .year {
    position: relative;
    margin: 90px auto 0 auto;
    text-align: center;
    .front {
      width: 285px;
    }
    .end {
      width: 117px;
    }
    .nine {
      position: absolute;
      width: 120px;
      right: 180px;
      top: -0px;
      opacity: 0;
    }
    @keyframes numFadeOut {
      0% {
        transform: translateY(0px);
        opacity: 1;
      }

      100% {
        transform: translateY(100px);
        opacity: 0;
      }
    }
    @keyframes numFadeIn {
      0% {
        transform: translateY(-100px);
        opacity: 0;
      }

      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
  .star1 {
    position: absolute;
    left: 15px;
    top: 792px;
    width: 128px;
  }
  .star2 {
    position: absolute;
    right: 0;
    top: 311px;
    width: 137px;
  }
  .star3 {
    position: absolute;
    left: 0;
    top: 259px;
    width: 143px;
  }
  .text1 {
    position: absolute;
    text-align: center;
    width: 100%;
    left: 0;
    top: 290px;
    font-family: noto-smbold;
    font-size: 24px;
    color: #fff;
    line-height: 45px;
  }
  .text_img {
    width: 500px;
    position: absolute;
    left: 128px;
    top: 446px;
    opacity: 0;
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .box {
    width: 460px;
    position: absolute;
    left: 145px;
    top: 40%;
    animation: float 2000ms linear infinite alternate;
    @keyframes float {
      0% {
        //transform: translate3d(0,0px,0);
        transform: none;
      }

      100% {
        transform: translate3d(0, 30px, 0);
      }
    }
  }
  .open_in_app {
    .ready_btn {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding-bottom: 30px;
      //text-align: center;
      //vertical-align: middle;
      position: absolute;
      top: 84%;
      left: 50%;
      margin-left: -133px;
      background: url("./../assets/img/home/p11/p11_button@2x.png") no-repeat
        center;
      background-size: cover;
      width: 266px;
      height: 100px;
      img {
        width: 33px;
        margin-right: 15px;
      }
      font-size: 32px;
      font-family: noto;
      color: #fff;
      opacity: 0;

      @keyframes fadeUp {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }
    .bottom_menu {
      position: absolute;
      width: 100%;
      left: 0;
      top: 91%;
      display: flex;
      justify-content: space-around;
      .left,
      .right {
        padding: 20px 0;
        display: flex;
        align-items: center;
        img {
          width: 24px;
          margin-right: 18px;
        }
      }
      font-size: 24px;
      font-family: noto;
      color: rgba(255, 255, 255, 1);
      opacity: 0;

      @keyframes fadeUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }
  }
  .open_in_h5{
    position: absolute;
    top:80%;
    left: 0;
    width: 100%;
    text-align: center;
    opacity: 0;
    .getgiftbtn{
      img{
        width: 324px;
      }
    }
    .getgifttext{
      img{
        width: 218px;
      }
      margin-bottom: 10px;
    }
    .rewatch{
      font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 18px;
          margin-right: 18px;
        }
    }
  }
}
.bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 100%;
  z-index: 999;
}
.fadeOut {
  animation: fadeOut 1000ms linear 1 forwards;
}
</style>

