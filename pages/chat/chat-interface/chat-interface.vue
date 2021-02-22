<template>
  <view class="container">
    <!-- 自定义导航栏 -->
    <u-navbar :is-back="false">
      <view class="slot-wrap">
        <view class="slot-wrap-txt">{{ name }}</view>
        <image
          src="../../../static/images/fanhui.png"
          class="back"
          @tap="goBack"
        />
      </view>
    </u-navbar>

    <!-- 聊天列表 -->

    <scroll-view
      :scroll-top="scrollTop"
      id="scrollview"
      scroll-y
      :scroll-with-animation="true"
      :style="{ height: style.contentH + 'px' }"
    >
      <block v-for="(item, id) in list" :key="id">
        <chat-list class="user-chat-item" :item="item"></chat-list>
      </block>
    </scroll-view>

    <!-- 底部输入框 -->
    <chat-input-btn @submit="submit"></chat-input-btn>
  </view>
</template>

<script scope>
import gettime from "../../../util/time.js";
import chatList from "../../../components/chat/chat-inteface/chat-list.vue";
import chatInputBtn from "../../../components/chat/chat-inteface/chat-input-btn.vue";
export default {
  components: {
    chatList,
    chatInputBtn,
  },
  data() {
    return {
      scrollTop: 0,
      iptTxt: "",
      name: "谢轰轰", //你的名字
      style: {
        contentH: 0,
        itemH: 0,
      },
      list: [], //聊天数据
      demoList: [
        "疯疯头吃的跟芋头一样",
        "歌手迷了路，模特迷了路",
        "疯疯有模有样的穿上超短裤",
        "这不够高难度 他还不满足",
        "他还要在你的眼睛里面跳舞",
        "似乎 这没什么不可能",
        "似乎 疯疯风骚入骨的灵魂",
      ],
      Audio: uni.createInnerAudioContext(), // 创建
      liaotian: false,
    };
  },
  onLoad(options) {
    this.name = options.name;
    this.initdata();
    this.changeTime();
    this.palyAudio();
    this.demo();
    // setInterval((res) => {
    //   this.submit();
    // }, 1000);
  },
  onUnload() {
    this.Audio.stop();
  },
  onRead() {
    this.pageToBottom();
  },
  methods: {
    palyAudio() {
      this.Audio.src = "http://images-mrzhang.test.upcdn.net/demo.mp3";

      this.Audio.play();
    },
    /**
     * 初始化参数
     *
     */
    initdata() {
      try {
        const res = uni.getSystemInfoSync();
        // console.log(res.windowHeight);

        this.style.contentH = res.windowHeight - uni.upx2px(246);

        //#ifdef APP-PLUS
        //#endif
      } catch (e) {
        console.log(e);
      }
    },
    pageToBottom() {
      let q = uni.createSelectorQuery();
      q.select("#scrollview").boundingClientRect();
      q.selectAll(".user-chat-item").boundingClientRect();

      q.exec((res) => {
        // console.log(res);
        res[1].forEach((ret) => {
          // console.log(ret);
          this.style.itemH += ret.height;
        });

        if (this.style.itemH > this.style.contentH) {
          this.scrollTop = this.style.itemH;
        }
      });
    },
    /**
     * 回到上一页
     *
     */
    goBack() {
      uni.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      });
    },
    /**
     *
     *
     */
    changeTime() {
      let arr = [
        {
          isme: false, //谁发送的 false 别人 true 自己
          user_pic:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-b7f794da2c69cc4d39087167635f4b4f_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614393577&t=3710dc6425148b072c21ebc13c5cdedf", //头像
          type: "text", //图片类型
          data: "你好  我是谢疯疯 ",
          time: "1610825074", //时间戳
        },
        {
          isme: true, //谁发送的 false 别人 true 自己
          user_pic:
            "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEEu5QbnCuqcJ6h.7cY5i3ZJOXl.AH7ZCqgLy3oWKr5C38l1rjZxRdUtsX4uc7h9x8FUNEuzdtxxEdrMO3yPdY1c!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4", //头像
          type: "img", //图片类型
          data:
            "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEEu5QbnCuqcJ6h.7cY5i3ZJOXl.AH7ZCqgLy3oWKr5C38l1rjZxRdUtsX4uc7h9x8FUNEuzdtxxEdrMO3yPdY1c!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4",
          time: "1611821843", //时间戳
        },
      ];
      for (let i = 0; i < arr.length; i++) {
        arr[i].gstime = gettime.gettime.getChatTime(
          arr[i].time,
          i > 0 ? arr[i - 1].time : 0
        );
      }
      this.list = arr;
    },

    /**
     * 发送信息
     *
     */
    submit(data) {
      // console.log(data);
      let now = new Date().getTime();
      let obj = {
        isme: true, //谁发送的 false 别人 true 自己
        user_pic:
          "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEEu5QbnCuqcJ6h.7cY5i3ZJOXl.AH7ZCqgLy3oWKr5C38l1rjZxRdUtsX4uc7h9x8FUNEuzdtxxEdrMO3yPdY1c!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4", //头像
        type: "text", //图片类型
        data: data,
        time: now, //时间戳
        gstime: gettime.gettime.getChatTime(
          now,
          this.list[this.list.length - 1].time
        ),
      };
      this.list.push(obj);
      this.iptTxt = "";

      this.pageToBottom();
    },
    /**
     *
     * demo
     */
    demo() {
      // new Promise(() => {
      //   setTimeout(() => {
      //     this.submit(this.demoList[0]);
      //   }, 2000);
      // }).then(
      //   new Promise(() => {
      //     setTimeout(() => {
      //       this.submit(this.demoList[1]);
      //     }, 2000);
      //   })
      // );
      let that = this;
      for (let i = 0; i < that.demoList.length; i++) {
        (function (i) {
          setTimeout(() => {
            that.submit(that.demoList[i]);
            if (i == that.demoList.length - 1) {
              that.demo2();
            }
          }, i * 3330);
        })(i);
      }
    },
    demo2() {
      let now = new Date().getTime();
      let obj = {
        isme: true, //谁发送的 false 别人 true 自己
        user_pic:
          "http://m.qpic.cn/psc?/V13cDPCi1NRVRa/TmEUgtj9EK6.7V8ajmQrEEu5QbnCuqcJ6h.7cY5i3ZJOXl.AH7ZCqgLy3oWKr5C38l1rjZxRdUtsX4uc7h9x8FUNEuzdtxxEdrMO3yPdY1c!/b&bo=OASgBQAAAAABF6k!&rf=viewer_4", //头像
        type: "img", //图片类型
        data:
          "https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w=580/sign=38345c9f293fb80e0cd161df06d02ffb/ee0f728b4710b912f121a650cbfdfc039345225d.jpg",
        time: now, //时间戳
        gstime: gettime.gettime.getChatTime(
          now,
          this.list[this.list.length - 1].time
        ),
      };
      this.list.push(obj);
    },
  },
};
</script>

<style lang="scss">
//顶部导航栏
.slot-wrap {
  width: 750rpx;
  display: flex;
  align-items: center;
  /* 如果您想让slot内容占满整个导航栏的宽度 */
  flex: 1;
  /* 如果您想让slot内容与导航栏左右有空隙 */
  position: fixed;
  .back {
    width: 30rpx;
    height: 30rpx;
    position: absolute;
    left: 20rpx;
    top: 50%;
    transform: translateY(-50%);
  }
  .slot-wrap-txt {
    text-align: center;
    width: 100%;
  }
}
/* // 底部输入框 */
.input-box {
  position: fixed;
  background-color: #f3f3f3;
  bottom: 0;
  display: flex;
  left: 0;
  right: 0;
  height: 102rpx;

  .more {
    width: 200rpx;
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
  }
  .ipt {
    height: 72rpx;
    margin: 18rpx 23rpx 0 40rpx;
    padding-left: 20rpx;
    flex: 1;
    background-color: #fff;
    border: 1rpx solid #e2e2e2;
    box-shadow: 0rpx 4rpx 14rpx 0rpx rgba(229, 229, 229, 0.5);
    border-radius: 8rpx;
  }
}
</style>
