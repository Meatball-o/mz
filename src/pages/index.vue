<template>
  <div class="index_con">
    <!--fixed-->
    <div class="fixed">
      <ul class="clearfloat">
        <li class="margin_laft"><a href="">手机</a></li>
        <li><a href="">智能设备</a></li>
        <li><a href="">智能穿戴</a></li>
        <li><a href="">游戏设备</a></li>
        <li><a href="">数码影音</a></li>
        <li><a href="">手机配件/移动电源</a></li>
        <li><a href="">移动存储/办公设备</a></li>
        <li><a href="">生活周边</a></li>
      </ul>
    </div>
    <div class="index_banner">
      <!--首页banner-->
      <slide-show :slides="slides" :inv="slideSpeed"></slide-show>
      <!--首页con——list1  con1-->
      <div class="index_con1">
        <ul class="clearfloat">
          <li v-for="item in con1List">
            <a :href="item.url" target="_blank"><img :src="item.img"></a>
            <h4><a href="">{{item.h4}}</a></h4>
            <span><a href="">{{item.span}}</a></span>
          </li>
        </ul>
      </div>
      <!--首页con——list2   con2-->
      <div class="index_con2">
        <div class="con2 clearfloat">
          <div v-for="item in con2listlf" class="con2_lf lf">
            <img :src="item.img">
          </div>
          <ul class="con2_rt rt clearfloat">
            <li v-for="item in con2listrt">
              <a href="">
                <a href=""><img :src="item.img"></a><br>
                <span>{{item.span}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--首页新增效果-->
      <div class="index_con5">
        <ul class="con5 ">
          <li v-for="item in con5">
            <a href="">
              <img class="con5_img1" :src="item.img">
              <img class="con5_img2" :src="item.img1">
              <span class="con5_span">
                <span class="con5_span1">{{item.title1}}</span>
                <span class="con5_span2">{{item.title2}}</span>
                <em>{{item.title3}}</em>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <!--首页banner2-->
      <carousel></carousel>
      <!--新增效果con6-->
      <div class="con6">
        <ul>
          <li v-for="item in con6" class="clearfloat">
            <a href="">
              <div class="con6_img">
                <img class="con6_img1" :src="item.img" alt="">
                <img class="con6_img2" :src="item.img1" alt="">
              </div>
              <span class="con6_text">
                <span>{{item.title1}}</span><br>
                <span>{{item.title2}}</span>
                <em>{{item.title3}}</em>
             </span>
            </a>
          </li>
        </ul>
      </div>
      <!--新增效果con7-->
      <div class="con7">
        <div class="con7_con clearfloat">
          <a href="">
            <img src="../assets/images/con7/con7_1.jpg" alt="">
          </a>
          <a href="">
            <img src="../assets/images/con7/con7_2.jpg" alt="">
          </a>
          <a href="">
            <img src="../assets/images/con7/con7_3.jpg" alt="">
          </a>
        </div>
      </div>
      <!--首页banner2下的list   con3-->
      <div class="index_con3">
        <ul class="con3 clearfloat">
          <li v-for="item in con3list">
            <a href="">
              <img :src="item.img"><br>
              <span><a href="">{{item.span}}</a></span>
            </a>
          </li>
        </ul>
      </div>
      <!--首页banner2下的list   con4-->
      <div class="index_con4">
        <div class="con4_top">
          <h3>魅族授权服务体验中心</h3>
          <p>为您提供优质的售后服务</p>
        </div>
        <div class="con4_bottom">
          <div>
            <a href="">查看附近的服务中心</a>
          </div>
        </div>
      </div>
      <!--新增效果con8-->
      <div class="con8">
        <div class="div8_top">
          <h3>追求源于热爱</h3>
          <p>与千万志同道合的魅友畅快交流
            <a href="http://localhost:8080/community" target="_blank">进入社区 > </a>
          </p>
        </div>
        <div class="div8_bottom">
          <ul>
            <li v-for="item in con8"><a href="">
              <img :src="item.img" alt="">
              <div class="con8_bt">
                <img src="../assets/images/me.jpg" alt="">
                <div class="right">
                  <em>卓岳</em><br>
                  <span><i style="font-size: 14px" class="iconfont icon-liulan2 "></i>&nbsp;42183</span>
                  <span><i  style="font-size: 13px" class="iconfont icon-liuyan "></i>&nbsp;2057</span>
                </div>
                <br><br>
                <p>魅族这一级防护 让手机安全“固若金汤”</p>
              </div>
            </a></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import slideShow from '../components/slideShow'
  import slideShowD from '../components/slideShowd'
  import carousel from '../components/carousel'
  export default{
    components: {
      slideShow,
      slideShowD,
      carousel
    },
    data(){
      return {
        slideSpeed: 3000,
        slides: [
          {
            src: require('../assets/banner/banner1.jpg'),
            title: '魅族1',
            href: ''
          },
          {
            src: require('../assets/banner/banner2.jpg'),
            title: '魅族2',
            href: ''
          },
          {
            src: require('../assets/banner/banner3.jpg'),
            title: '魅族3',
            href: ''
          },
          {
            src: require('../assets/banner/banner4.jpg'),
            title: '魅族4',
            href: ''
          },
          {
            src: require('../assets/banner/banner5.jpg'),
            title: '魅族5',
            href: ''
          }
        ],
        con1List: [
          {
            img: '../static/con1_1.png',
            h4: '魅友福利',
            span: '各种惊喜等你开启',
            url: 'http://localhost:8080/boon'

          },
          {
            img: '../static/con1_2.jpg',
            h4: 'Super mCharge',
            span: '20分钟充满不发热'

          },
          {
            img: '../static/con1_3.png',
            h4: 'PRO 6Plus',
            span: '64G版防爆膜及软胶壳',
            url: 'http://localhost:8080/detail'

          },
          {
            img: '../static/con1_4.png',
            h4: '魅蓝Note5',
            span: '购机享12期免息',
          }
        ],
        con2listlf: [
          {
            img: '../static/con2lf.jpg'
          }
        ],
        con2listrt: [
          {
            img: '../static/con2rt1.png',
            span: '手机'
          },
          {
            img: '../static/con2rt2.png',
            span: '手机'
          },
          {
            img: '../static/con2rt3.png',
            span: '背壳'
          },
          {
            img: '../static/con2rt4.png',
            span: '智能硬件'
          },
          {
            img: '../static/con2rt5.png',
            span: '移动电源'
          },
          {
            img: '../static/con2rt6.png',
            span: '音箱'
          },
          {
            img: '../static/con2rt7.png',
            span: '电源适配器'
          },
          {
            img: '../static/con2rt8.png',
            span: '周边'
          }
        ],
        con3list: [
          {
            img: '../static/con3_1.png',
            span: '查询真伪'
          },
          {
            img: '../static/con3_2.png',
            span: '系统下载'
          },
          {
            img: '../static/con3_3.png',
            span: '注册产品'
          },
          {
            img: '../static/con3_4.png',
            span: '查找手机'
          },
          {
            img: '../static/con3_5.png',
            span: '换机助手'
          }
        ],
        con5: [
          {
            img: require('../assets/images/con5/con5_1.png'),
            img1: require('../assets/images/con5/con5_2.png'),

            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con5/con5_1.png'),
            img1: require('../assets/images/con5/con5_2.png'),
            title1: '魅蓝 5s',
            title2: '购 32G 版领券立减 10 元',
            title3: '￥799 起'
          },
          {
            img: require('../assets/images/con5/con5_1.png'),
            img1: require('../assets/images/con5/con5_2.png'),
            title1: '魅蓝 X',
            title2: '赠 EP-31 耳机 3 期免息',
            title3: '￥1699 起'
          },
          {
            img: require('../assets/images/con5/con5_1.png'),
            img1: require('../assets/images/con5/con5_2.png'),
            title1: 'PRO 6',
            title2: '最高立减 600 元 64G 版标配耳机v',
            title3: '￥2299 起'
          },
        ],
        con6: [
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/images/con6/con6_2.png'),
            img1: require('../assets/images/con6/con6_1.png'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
        ],
        con8:[
          {
            img: require('../assets/images/con8/con8_1.jpg'),
//            title1: 'MX 6',
//            title2: '赠标准版移动电源 6 期免息',
//            title3: '￥1599 起'
          }
        ]
      }
    },
    mounted(){
      const vm = this;
      window.$(vm.$el).find('.con5_img2').mouseover(function () {
        window.$(this).css({"left": "50px"})
        window.$(this).siblings('.con5_img1')
          .css({"left": "-50px"})
      })
      window.$(vm.$el).find('.con5_img2').mouseout(function () {
        window.$(this).css({"left": "0px"})
        window.$(this).siblings('.con5_img1').css({"left": "0"})
      })

      window.$(vm.$el).find('.con6_img2').mouseover(function () {
        window.$(this).hide()
        window.$(this).siblings('.con6_img1').show()
      })
      window.$(vm.$el).find('.con6_img1').mouseout(function () {
        window.$(this).hide()
        window.$(this).siblings('.con6_img2').show()
      })

      $(function () {
        var fixed = $(".fixed"); //得到导航对象
        var win = $(window); //得到窗口对象
        var sc = $(document);//得到document文档对象。
        win.scroll(function () {
          if (sc.scrollTop() >= 300) {
            console.log("111");
            $(".fixed").slideDown();
            fixed.addClass("fixednav");
          } else {
            fixed.removeClass("fixednav");
            $(".fixed").slideUp();
          }
        })
      })
    }
  }
</script>
<style scoped rel="stylesheet/scss" lang="scss">
  .fixednav {
    position: fixed !important;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 100;
    background-color: #fff;

  }

  .fixed {
    display: none;
    width: 100%;
    margin: 0 auto;
    position: relative;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    > ul {
      > li {
        float: left;
        height: 70px;
        line-height: 70px;
        margin-right: 46px;
        position: relative;
        > a {
          font-size: 14px;
          color: #333;
          transition: color .2s;
          cursor: pointer;
          &:hover {
            color: #00c3f5;
          }
        }
      }
      .margin_laft {
        margin-left: 11%;
      }
    }
  }

  .index_con1 {
    overflow: hidden;
    width: 1240px;
    padding-top: 76px;
    margin: 0 auto;
    ul > li {
      float: left;
      width: 160px;
      height: 300px;
      margin-right: 200px;
      text-align: center;
    }
    :last-child {
      margin-right: 0px;
      h4 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;
        padding-bottom: 10px;
        color: #515151;
      }
      span {
        color: #999;
        text-align: center;
      }

    }
  }

  .index_con2 {
    width: 100%;
    background: #F4F4F4;
    margin-bottom: 80px;

    .con2 {
      width: 1240px;
      margin: 0 auto;
      .con2_rt {
        width: 50%;
        margin-top: 80px;
        li {
          float: left;
          text-align: center;
          width: 25%;
          height: 135px;
          a {
            width: 80px;
            display: block;
            margin: 0 auto;
            img {
              width: 50px;
              height: 50px;
              display: block;
              margin: 0 auto 10px;
            }
          }
        }
      }
    }
  }

  .index_con3 {
    text-align: center;
    padding: 66px 0;
    background: #fff;
    .con3 {
      width: 980px;
      margin: 0 auto;
      li {
        width: 196px;
        float: left;
        img {
          display: block;
          margin: 0 auto 6px;
        }
        span {
          color: #515151;
        }
      }
    }

  }

  .index_con4 {
    width: 100%;
    height: 380px;
    color: #fff;
    text-align: center;
    background: url("../assets/pic/con3.jpg") no-repeat;
    .con4_top {
      /*text-align: center;*/
      h3 {
        font-size: 35px;
        padding-top: 110px;
        padding-bottom: 10px;
        font-weight: 400;
      }
      p {
        font-size: 14px;
        margin-top: 10px;
      }
    }
    .con4_bottom {
      margin: 0 auto;
      width: 188px;
      padding-top: 64px;
      div {
        width: 185px;
        height: 42px;
        border: 1px solid #fff;
        line-height: 42px;
        text-indent: 20px;
        float: left;
        margin-right: 10px;
        text-align: left;
        cursor: pointer;
        background: url(../assets/images/jiantou.png) no-repeat center;
        background-position: 155px center;
        background-size: 7px;
      }
    }
  }

  .index_con5 {
    background: #fff;
    /*padding-top: 104px;*/
    .con5 {
      width: 1240px;
      height: 520px;
      margin: 0 auto;
      text-align: center;
      margin-bottom: 40px;
      li {
        text-align: center;
        display: inline-block;
        margin-right: 100px;
        > a {
          display: inline-block;
          position: relative;
          width: 234px;
          height: 521px;
          > img {
            width: 208px;
            border-radius: 20px;
            position: absolute;
            left: 12px;
            top: 0;
            transition: all 0.3s ease-in-out;
            /*transition: transform .8s .1s;*/
          }
        }
      }
      :last-child {
        margin-right: 0px;
      }
    }
  }

  .con5_span {
    line-height: 20px;
    color: #666;
    font-size: 14px;
    padding-top: 28px;
    display: block;
    margin-top: 416px;
    > span {
      display: block;
      margin-bottom: 4px;
    }
    > em {
      display: block;
      padding-top: 2px;
      color: #f0415f;
      text-indent: -5px;
    }
  }

  .con5_img2 {
    left: 0px;
  }

  .con6 {
    width: 100%;
    border-top: 1px solid #ddd;
    ul {
      width: 1240px;
      padding-top: 60px;
      /*height: 1280px;*/
      margin: 0 auto;

      > li {
        width: 334px;
        height: 312px;
        text-align: center;
        float: left;
        margin-bottom: 80px;
        > a {
          position: relative;
          float: left;
          margin-right: 100px;
          width: 234px;
        }
      }
      :nth-child(4) {
        width: 224px;
      }
      :nth-child(8) {
        width: 224px;
      }
      :nth-child(12) {
        width: 224px;
      }
    }
  }

  .con6_img {
    .con6_img1 {
      display: none;
    }
    img {
      width: 208px;
      border-radius: 5px;
      transition: opacity .3s .1s;
      position: absolute;
      left: 12px;
      top: 0;
    }
  }

  .con6_text {
    line-height: 20px;
    color: #666;
    font-size: 14px;
    padding-top: 28px;
    display: block;
    margin-top: 212px;
    > span {
      margin-bottom: 4px;
    }
    > em {
      display: block;
      padding-top: 2px;
      color: #f0415f;
      text-indent: -5px;
    }
  }

  .con7 {
    .con7_con {
      height: 280px;
      max-width: 1920px;
      margin: 0 auto;
      > a {
        float: left;
        width: 33.3%;
        box-sizing: border-box;
        height: 280px;
        overflow: hidden;
        margin-bottom: 60px;
      }
    }
  }

  .con8 {
    background: #f4f4f4;
    border-top: 1px solid #eee;
    padding-bottom: 67px;
    .div8_top {
      width: 1240px;
      margin: 0 auto;
      padding-top: 70px;
      text-align: center;
      > h3 {
        font-size: 35px;
        color: #333;
        margin-bottom: 20px;
      }
      > p {
        color: #999;
        font-size: 16px;
        > a {
          color: #00b9f2;
        }
      }
    }
    .div8_bottom {
      width: 1240px;
      margin: 0 auto;
      > ul {
        > li {
          margin-left: 10px;
          width: 310px;
          height: 310px;
          a {
            position: relative;
            > img {
              margin-top: 50px;
              width: 290px;
              height: 310px;
            }
            .con8_bt {
              position: absolute;
              top: -102px;
              left: 0;
              width: 250px;
              height: 100px;
              color: #fff;
              padding: 20px;
              > img {
                width: 38px;
                height: 38px;
                border-radius: 50%;
              }
              >p{
                font-size: 16px;
                width: 255px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
    }
  }
  .right{
    width: 200px;
    position: absolute;
    top:26px;
    left: 80px;
    >em{
      display: inline-block;
      margin-bottom: 4px;
    }
  }
</style>
