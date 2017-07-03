<template>
  <div>
    <div v-if="$route.meta.headerA" class="app-header">
      <div class="header">
        <div class="nav clearfloat">
          <img class="lf" src="../assets/images/logolan.png" alt="">
          <ul class="nav_rt rt clearfloat">
            <li><a :href="mall"> 魅族商城 </a></li>
            <li class="mz_phone"><a href="">魅族手机</a></li>
            <li class="mz_phone"><a href="">魅蓝手机</a></li>
            <li class="mz_phone"><a href="">魅族声学</a></li>
            <li class="mz_phone"><a href="">智能 · 配件</a></li>
            <li><a :href="serve"> 服务 </a></li>
            <li><a :href="store">专卖店</a></li>
            <li><a :href='flyme'>Flyme</a></li>
            <li><a :href="community">社区</a></li>
            <li style="margin-left: 40px;" class="position">
              <i class="iconfont icon-denglu2 "></i>
              <div class="login">
                <i class="iconfont icon-jiantou-copy2"></i>
                <ul class="clearfloat">
                  <li class="mz_login">
                    <a :href="login1">立即登录</a>
                  </li>
                  <li class="mz_register">
                    <a href="">立即注册</a>
                  </li>
                  <li class="my_order">
                    <a href="">我的订单</a>
                  </li>
                  <li class="m_form">
                    <a href="">M码通道</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!--<div class="mz_phone_tab">-->
          <!--<ul class="clearfloat">-->
            <!--<li v-for="item in phone1">-->
              <!--<a href="">-->
                <!--<img :src="item.img">-->
                <!--<p>{{ item.title }}</p>-->
                <!--<p></p>-->
              <!--</a>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="mz_phone_tab">-->
          <!--<ul>-->
            <!--<li v-for="item in phone2">-->
              <!--<a href="">-->
                <!--<img :src="item.img">-->
                <!--<p>{{ item.title }}</p>-->
                <!--<p></p>-->
              <!--</a>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="mz_phone_tab">-->
          <!--<ul>-->
            <!--<li v-for="item in phone3">-->
              <!--<a href="">-->
                <!--<img :src="item.img">-->
                <!--<p>{{ item.title }}</p>-->
                <!--<p></p>-->
              <!--</a>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="mz_phone_tab">-->
          <!--<ul>-->
            <!--<li v-for="item in phone4">-->
              <!--<a href="">-->
                <!--<img :src="item.img">-->
                <!--<p>{{ item.title }}</p>-->
                <!--<p></p>-->
              <!--</a>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      </div>
    </div>
    <div v-if="$route.meta.headerB" class="header_11">
      <div class="header1">
        <div class="header1_con clearfloat">
          <ul class="header1_lf clearfloat">
            <li><a :href="first">魅族官网</a></li>
            <li><a href="">魅族商城</a></li>
            <li><a :href="flyme">Flyme</a></li>
            <li><a :href="store">专卖店</a></li>
            <li><a :href="serve">服务</a></li>
            <li><a :href="community">社区</a></li>
          </ul>
          <ul class="header1_rt clearfloat">
            <li>
              <a href="">我的收藏
                <i class="news">
                  news
                </i>
              </a>
              <a href="">我的订单</a>
              <a href="">{{ username }}</a>
              <a v-if="username===''" @has-log="onSuccessLog" :href="login1">登录</a>
              <a v-if="username===''" href="">注册</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="header1_bottom clearfloat">
        <div><a href="">
          <img src="../assets/images/logolan.png" alt="">
        </a></div>
        <ul class="clearfloat">
          <li><a href="">全部分类</a></li>
          <li><a href="">PRO手机</a></li>
          <li><a href="">魅蓝手机</a></li>
          <li><a href="">MX手机</a></li>
          <li><a href="">数码配件</a></li>
          <li><a href="">智能设备</a></li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="top0">
      <a class="top_login0" :href="login1" target="_blank">
        <i style="font-size: 30px;" class="iconfont icon-xinfengpsd"></i>
      </a>
      <a class="top_login0 app">
        <b>APP</b>
        <div class="app_show">
          <img src="../assets/images/app.png" alt="">
          <p>扫码下载魅族商城APP</p>
        </div>
      </a>
      <a class="top_top0" href="">
        <i style="font-size: 23px;" class="iconfont icon-shangjiantou1"></i>
      </a>
    </div>
    <div v-if="$route.meta.footerA" class="app-footer">
      <div class="meizu_footer">
        <div class="meizu_footer_con">
          <div class="meizu_footer_con_top">
            <ul class="meizu_footer_con_ul lf clearfloat">
              <li>
                <a href="" class="clearfloat">
                  <img src="../assets/layout/footer_1.png" alt="">
                  <span>顺丰包邮</span>
                </a>
              </li>
              <li>
                <a href="" class="clearfloat">
                  <img src="../assets/layout/footer_2.png" alt="">
                  <span>100+城市 次日送达</span>
                </a>
              </li>
              <li>
                <a href="" class="clearfloat">
                  <img src="../assets/layout/footer_3.png" alt="">
                  <span>7天无理由退货</span>
                </a>
              </li>
              <li>
                <a href="" class="clearfloat">
                  <img src="../assets/layout/footer_4.png" alt="">
                  <span>15天换货保障</span>
                </a>
              </li>
              <li>
                <a href="" class="clearfloat">
                  <img src="../assets/layout/footer_5.png" alt="">
                  <span>1年免费保修</span>
                </a>
              </li>
              <li>
                <a href="" class="clearfloat">
                  <img src="../assets/layout/footer_6.png" alt="">
                  <span>2300+线下体验店</span>
                </a>
              </li>
              <li>
                <a href="" class="clearfloat">
                  <img src="../assets/layout/footer_7.png" alt="">
                  <span>远程支持服务</span>
                </a>
              </li>
              <li>
                <a href="" class="clearfloat">
                  <img src="../assets/layout/footer_8.png" alt="">
                  <span>上门快修</span>
                </a>
              </li>

            </ul>
            <div class="rt meizu_footer_con_right">
              <span>24小时全国服务热线</span>
              <p>400-788-3333</p>
              <a class="footer_down" href="">
                <img src="../assets/layout/down.png" alt="">
                在线客服
              </a>
            </div>
          </div>
        </div>
        <div class="meizu_footer_bottom clearfloat">
          <div class="meizu_footer_bottom_lf lf">
            <ul class="meizu_footer_bottom_ul1 clearfloat">
              <li><a style="padding-left: 0px;" href="">了解魅族</a>丨</li>
              <li><a href="">加入我们</a>丨</li>
              <li><a href="">联系我们</a>丨</li>
              <li><a href="">Flyme</a>丨</li>
              <li><a href="">魅族社区</a>丨</li>
              <li><a href="">天猫旗舰店</a>丨</li>
              <li><a href="">问题反馈</a>丨</li>
              <li><a href="">线上销售授权名单公示</a>丨</li>
              <li class="chinese clearfloat">
                <a class="clearfloat" href="">
                  <i class="lf icon_chinese"></i>
                  <b class="lf">中文</b>
                </a>
              </li>
            </ul>
            <ul class="meizu_footer_bottom_ul2 clearfloat">
              <li>©2017 Meizu Telecom Equipment Co., Ltd. All rights reserved. </li>
              <li><a href="">粤ICP备13003602号-2</a></li>
              <li><a href="">粤B2-20130198 </a></li>
              <li><a href="">营业执照</a></li>
              <li><a href="">法律声明</a></li>
              <li> 粤公网安备 44049102496009 号 </li>
            </ul>
          </div>
          <ul class="meizu_footer_bottom_rt rt clearfloat">
            <li><a href="">
              <i class="iconfont one icon-unie61d "></i>
            </a>&nbsp;丨
            </li>
            <li><a href="">
              <i class="iconfont two icon-weixin1 ">
                <b class="ewm">
                  <img src="../assets/images/ewm.jpg" alt="">
                </b>
              </i>
            </a>&nbsp;丨
            </li>
            <li><a href="">
              <i class="iconfont three icon-kongjian "></i>
            </a></li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="$route.meta.footerB" class="footer1">
      <div class="footer1_main">
        <ul class="footer1_top clearfloat">
          <li>
            <i class="iconfont icon-7tianwuliyoutuihuanhuo "></i>
            <p><span>7天</span>无理由退款</p>
          </li>
          <li>
            <i class="iconfont icon-beiyusan "></i>
            <p><span>15天</span>换货保障</p>
          </li>
          <li>
            <i class="iconfont icon-gongju "></i>
            <p><span>1年</span>免费保修</p>
          </li>
          <li>
            <i class="iconfont icon-shandianfahuo "></i>
            <p><span>百城</span>速达</p>
          </li>
          <li>
            <i class="iconfont icon-baoyou "></i>
            <p><span>全场</span>包邮</p>
          </li>
          <li>
            <i class="iconfont icon-dizhi1 "></i>
            <p><span>2000多家</span>专卖店</p>
          </li>
        </ul>
        <ul class="footer1_con clearfloat">
          <li style="margin-left: 0px;">
            <p><a href="">帮助说明</a></p>
            <ul>
              <li><a href="">支付方式</a></li>
              <li><a href="">配送说明</a></li>
              <li><a href="">售后服务</a></li>
              <li><a href="">付款帮助</a></li>
            </ul>
          </li>
          <li>
            <p><a href="">Flyme</a></p>
            <ul>
              <li><a href="">开放平台</a></li>
              <li><a href="">固件下载</a></li>
              <li><a href="">软件商店</a></li>
              <li><a href="">查找手机</a></li>
            </ul>
          </li>
          <li>
            <p><a href="">关于我们</a></p>
            <ul>
              <li><a href="">关于魅族</a></li>
              <li><a href="">加入我们</a></li>
              <li><a href="">联系我们</a></li>
              <li><a href="">法律声明</a></li>
            </ul>
          </li>
          <li>
            <p><a href="">关注我们</a></p>
            <ul>
              <li><a href="">新浪微博</a></li>
              <li><a href="">腾讯微博</a></li>
              <li><a href="">QQ空间</a></li>
              <li><a href="">官方微信</a></li>
            </ul>
          </li>
          <li class="right">
            <p class="p1"><a href="">24小时全国服务热线</a></p>
            <p class="p2"><a href="">400-788-3333</a></p>
            <p class="p3"><a href=""><i class="iconfont icon-ren "></i>
              &nbsp;24小时在线客服</a></p>
          </li>
        </ul>
        <ul class="footer1_bottom clearfloat">
          <li>珠海市魅族通讯设备有限公司 ©2017 Meizu Telecom Equipment Co., Ltd. All rights reserved. </li>
          <li><a href="">备案号：粤ICP备13003602号-2</a></li>
          <li><a href="">经营许可证编号：粤B2-20130198 </a></li>
          <li><a href="">营业执照&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
          <li><a href="">
            <i class="iconfont one icon-unie61d "></i>
          </a>&nbsp;丨
          </li>
          <li><a href="">
            <i class="iconfont two icon-weixin1 ">
              <b class="ewm">
                <img src="../assets/images/ewm.jpg" alt="">
              </b>
            </i>
          </a>&nbsp;丨
          </li>
          <li><a href="">
            <i class="iconfont three icon-kongjian "></i>
          </a></li>
        </ul>
      </div>
    </div>
    <div v-if="$route.meta.footerC" class="footer2">
      <div>
        <ul class="clearfloat lf">
          <li><a href="">博客</a></li>
          <li><a href="">查找手机</a></li>
          <li><a href="">应用商店</a></li>
          <li><a style="margin-right: 50px;" href="">开放平台</a>丨</li>
          <li class="chinese">简体中文
            <ul class="china">
              <li><a href="">
                <i style="background-position: 0px -32px;"></i>
                <span style="    color: #027af6;">简体中文</span>
              </a></li>
              <li><a href="">
                <i style=" background-position: -21px -32px;"></i>
                <span>繁體中文</span>
              </a></li>
              <li><a href="">
                <i style="background-position: -105px -32px;"></i>
                <span>Русский</span>
              </a></li>
              <li><a href="">
                <i style=" background-position: -63px -32px;"></i>
                <span>English</span>
              </a></li>
              <li><a href="">
                <i style=" background-position: -84px -32px;"></i>
                <span>हिन्दी</span>
              </a></li>
            </ul>
          </li>
          <li style="margin-right: 40px;"> 客服热线   &nbsp;&nbsp;400-788-3333</li>
          <li class="csh"><span>在线客服</span></li>
        </ul>
        <div class="rt right clearfloat">
          <a class="a1 lf" href="">
            <span class="icon"></span>
            <span>微信公众号</span>
            <img class="wx" src="../assets/images/wx.png" alt="">
          </a>
          <a class="a2 lf" href="">
            <span class="icon1"> </span>
            <span>新浪微博</span>
          </a>
        </div>
        <br>
        <div class="bottom">
          <span>©2017Meizu Telecom Equipment Co., Ltd. All rights reserved.&nbsp; &nbsp; </span>
          <a href=""> 备案号：粤ICP备13003602号-4&nbsp; &nbsp; </a>
          <a href=""> 经营许可证编号：粤B2-20130198 &nbsp; &nbsp; </a>
          <a href=""> 营业执照  &nbsp; &nbsp;  </a>
          <a class="a5" href=""> 粤公网安备 44049102496076号   </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../iconfont.css'
  export default {
    name: 'layout',
    data () {
      return {
        mall: 'http://localhost:8080/mall',
        serve: 'http://localhost:8080/serve',
        store: 'http://localhost:8080/store',
        flyme: 'http://localhost:8080/flyme',
        first: 'http://localhost:8080',
        login1: 'http://localhost:8080/login',
        community: 'http://localhost:8080/community',
//        header切换1
        show1: [
          {
            img: require('../../static/header/header_1.png'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../../static/header/header_1.png'),
            title: '魅族PRO 6s'
          }
        ],
        //        header切换1
        show2: [
          {
            img: require('../../static/header/header_1.png'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../../static/header/header_1.png'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../../static/header/header_1.png'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../../static/header/header_1.png'),
            title: '魅族PRO 6s'
          }
        ],
        phone1: [
          {
            img: require('../assets/images/header/1_1.png'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/1_2.png'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/1_3.png'),
            title: '魅族PRO 6s'
          },
        ],
        phone2: [
          {
            img: require('../assets/images/header/2_1.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/2_2.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/2_3.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/2_4.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/2_5.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/2_6.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/2_7.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/2_8.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/2_9.jpg'),
            title: '魅族PRO 6s'
          },
        ],
        phone3: [
          {
            img: require('../assets/images/header/3_1.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/3_2.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/3_3.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/3_4.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/3_5.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/3_6.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/3_7.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/3_8.jpg'),
            title: '魅族PRO 6s'
          },
        ],
        phone4: [
          {
            img: require('../assets/images/header/4_1.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/4_2.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/4_3.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/4_4.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/4_5.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/4_6.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/4_7.jpg'),
            title: '魅族PRO 6s'
          },
          {
            img: require('../assets/images/header/4_8.jpg'),
            title: '魅族PRO 6s'
          },
        ],
        login: true,
        nav2: [],
        tab: '',
        username: ''
//        isShow: false
      }
    },
    mounted (){
      const la = this;
      window.$(la.$el).find('.app').mouseover(function () {
        window.$(".app_show").slideDown();
      });
      window.$(la.$el).find('.app').mouseout(function () {
        window.$(".app_show").slideUp();
      });
      window.$(la.$el).find('.mz_phone').mouseover(function () {
        window.$(this).parents(".mz_phone_tab").show()
      })
    }
//    methods: {
//      top(){
//        window.addEventListener('scroll',()=>{console.log(window.scrollY)});
//        window.scrollBy(0, 400);
//        scrolldelay = setTimeout('pageScroll()', 400);
//      },
//      onSuccessLog (data) {
//        console.log(data)
//        this.username = data.username
//      }
//    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0; /*font-size: 100%;*/
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  /*隐藏的header-div*/
  .mz_phone_tab {
    width: 100%;
    background-color: #fff;
    margin-top: 60px;
    margin-bottom: 10px;
    text-align: center;
    margin-left: 30%;
    > ul {
      > li {
        float: left;
        width: 150px;
      }
    }
  }

  /*top*/
  .top0 {
    z-index: 99;
    position: fixed;
    right: 0%;
    top: 70%;
    a {
      display: block;
      width: 44px;
      height: 44px;
      background-color: rgba(180, 180, 180, .8);
      filter: progid:DXImageTransform.Microsoft.Gradient(startColorstr=#CAb4b4b4, endColorstr=#CAb4b4b4);
      text-align: center;
      line-height: 44px;
      color: #fff;
    }
    .top_login0 {
      margin-bottom: 8px;
      > b {
        font-weight: 600;
      }
    }
  }

  .top0 {
    .app {
      position: relative;
      .app_show {
        display: none;
        position: absolute;
        right: 45px;
        bottom: 0px;
        background-color: #a39a9a;
        overflow: hidden;
        transition: height .2s linear;
        line-height: normal;
        > img {
          width: 145px;
          height: 145px;
          margin: 9px;
        }
        > p {
          margin-bottom: 16px;
          text-align: center;
          font-size: 12px;
        }
      }
      &:hover {
        background-color: #a39a9a;
      }
    }
  }

  /*链接跳转动画*/
  .back-transition {
    transition: transform .5s ease;
  }

  .back-enter {
    transform: translate(100%, 0);
  }

  .back-leave {
    transform: translate(-100%, 0);
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .lf {
    float: left;
  }

  .rt {
    float: right;
  }

  .clearfloat:after {
    content: "";
    display: table;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  body {
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 14px;
  }

  .header {
    width: 100%;
    margin: 0 auto;
    .nav {
      width: 1240px;
      margin: 0 auto;
      padding-top: 30px;
      position: absolute;
      top: 0px;
      left: 10%;
      z-index: 1;
      .nav_rt {
        > li {
          float: left;
          color: #515151;
          > a {
            padding-left: 40px;
            &:hover {
              color: #31a5e7;
            }
          }
        }
      }
      .position {
        &:hover .login {
          display: block;
        }
        position: relative;
        cursor: pointer;
        .login {
          position: absolute;
          top: 14px;
          left: -4px;
          display: none;
          > i {
            display: block;
            /*padding-top: 3px;*/
            color: #fff;
            font-size: 26px;
          }
          > ul {
            position: absolute;
            right: 0;
            z-index: 1;
            width: 94px;
            background-color: #fff;
            top: 15px;
            left: -34px;
            border-radius: 3px;
            box-sizing: border-box;
            text-align: center;
            > li {
              width: 98px;
              font-size: 12px;
              display: block;
              margin: 11px auto;
              float: left;
              > a {
                position: relative;
                z-index: 4;
                &:hover {
                  color: #31a5e7;
                }
              }
            }
          }
        }
      }
    }
    .nav > img {
      width: 115px;
      height: 20px;
      background: url("../assets/images/logolan.png");
    }
  }

  .header1 {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fafafc;
    color: #666;
    font-size: 12px;

    .header1_con {
      width: 1240px;
      margin: 0 auto;
      .header1_lf {
        float: left;
        > li {
          float: left;
          margin-right: 40px;
          > a {
            display: block;
            transition: color .2s linear;
            &:hover {
              color: #00c3f5;
            }
          }
        }
      }
      .header1_rt {
        float: right;
        > li {
          float: left;
          > a {
            padding: 0 20px;
            transition: color .2s linear;
            &:hover {
              color: #00c3f5;
            }
            .news {
              background-color: #ed4462;
              width: 24px;
              height: 13px;
              margin-left: 4px;
              border-radius: 2px;
              margin-top: -1px;
              color: #fff;
              padding-left: 3px;
            }
          }
        }
      }

    }
  }

  .show_layout {
    width: 100%;
    background: #fff;
    .show_con {
      width: 1240px;
      margin: 0 auto;
      > ul {
        margin-left: 10px;
        > li {
          /*<!--animation-delay: -23.08ms !important;-->*/
          float: left;
          padding: 5px 5px 20px;
          width: 142px;
          text-align: center;
          height: 132px;
          /*opacity: 0;*/
          > a {
            opacity: 1;
            transition: opacity .3s ease-in-out;
            .p_lf {
              margin: 0;
              padding: 0;
              list-style: none;
              font-weight: 400;
              img {
                /*opacity: 1;*/
                /*transition: opacity .3s ease-in-out;*/
                width: 90px;
                height: 90px;
              }
            }
            .p_rt {
              opacity: 1;
              color: #333;
              margin: 4px 0 3px -6px;
              width: 154px;
              transition: opacity .3s ease-in-out;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }

  /*隐藏的header1_nav*/
  .header1_bottom ul li {
    position: relative;
  }

  .header1_bottom {
    width: 1240px;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    div {
      float: left;
      > a {
        display: block;
        margin-top: 5px;
        margin-right: 100px;
      }
    }
    ul {
      float: left;
      > li {
        float: left;
        margin: 0 15px;
        > a {
          display: block;
          color: #333;
          height: 80px;
          line-height: 80px;
          transition: color .2s linear;
          &:hover {
            color: #00c3f5;
          }
        }
      }
    }
  }

  .meizu_footer_con {
    width: 1240px;
    padding: 20px 0 150px 0;
    border-bottom: 1px solid #f1f1f1;
    margin: 0 auto;
  }

  .meizu_footer_con_top {
    width: 1240px;
    position: relative;
  }

  .meizu_footer_con_ul {
    width: 1000px;
  }

  .meizu_footer_con_right {
    text-align: right;
    margin-top: -18px;
  }

  .meizu_footer_con_right {
    span {
      display: block;
      color: #999;
      font-size: 12px;
      padding-bottom: 10px;
    }
    p {
      color: #00c3f5;
      font-size: 20px;
      font-weight: 400;
    }
    .footer_down {
      width: 110px;
      height: 40px;
      background-color: #00c3f5;
      padding-left: 26px;
      overflow: hidden;
      position: relative;
      text-align: center;
      line-height: 40px;
      color: #fff;
      border-radius: 2px;
      margin-top: 8px;
      display: block;
    }
  }

  .meizu_footer_bottom_ul1 .chinese a {
    display: block;
    .icon_chinese {
      display: block;
      width: 18px;
      height: 18px;
      background: url("../assets/background/chinese.png") no-repeat 0px 0px;
      background-size: 18px 300px;
      margin: -3px 10px 0 0;
    }
    &:hover {
      color: #515151;
    }
  }

  .footer_down img {
    position: absolute;
    width: 20px;
    top: 8px;
    left: 18px;
  }

  .meizu_footer_con_ul li {
    float: left;
    text-align: center;
    width: 240px;
    height: 58px;
    > a {
      display: block;
      overflow: hidden;
      line-height: 27px;
      font-size: 12px;
      color: #666;
      > img {
        float: left;
        width: 30px;
        margin-right: 3px;
      }
    }
  }

  .meizu_footer_con_ul li a span {
    float: left;
    line-height: 30px;
    color: #999;
  }

  .meizu_footer_bottom {
    margin: 0 auto;
    padding-top: 30px;
    width: 1240px;
    height: 60px;
    font-size: 12px;
  }

  .meizu_footer_bottom_ul1 li {
    float: left;
    color: #999;
    > a {
      padding: 0 8px;
      &:hover {
        color: #31a5e7;

      }
    }
  }

  .meizu_footer_bottom_ul2 li {
    margin-top: 15px;
    float: left;
    color: #999;
    padding-right: 20px;
    > a {
      &:hover {
        color: #31a5e7;
      }
    }
  }

  .meizu_footer_bottom_rt li {
    float: left;
    color: #999;
    padding-left: 10px;
    > a {
      > i {
        font-size: 20px;
      }
      &:hover .one {
        color: #FF6B6B;
      }
      &:hover .two {
        color: #6FC749;
      }
      &:hover .three {
        color: #ECC339;
      }
    }
  }

  .two {
    position: relative;
    &:hover .ewm {
      display: block;
    }
    .ewm {
      display: none;
      position: absolute;
      top: -185px;
      left: -80px;
      > img {
        width: 180px;
        height: 180px;
      }
    }
  }

  .footer1 {
    width: 100%;
    background: #FAFAFC;
    .footer1_main {
      width: 1240px;
      margin: 0 auto;
      .footer1_top {
        border-bottom: 1px solid #e5e5e5;
        padding: 38px 8px 26px;
        li {
          position: relative;
          float: left;
          width: 203px;
          text-align: center;
          i {
            font-size: 36px;
          }
          p {
            margin-top: 12px;
            color: #666666;
            span {
              font-weight: bolder;
              margin-right: 5px;
            }
          }
        }
      }
      .footer1_con {
        padding: 30px 0;
        border-bottom: 1px solid #e5e5e5;
        > li {
          float: left;
          width: 244px;
          margin-left: 5px;
          text-align: center;
          > p {
            color: #333;
            margin-bottom: 10px;
          }
          > ul {
            line-height: 22px;
            font-size: 12px;
            > li {
              :last-child {
                p {
                  :first-child {
                    font-size: 14px;
                    margin-bottom: 10px;
                  }
                  :nth-child(2) {
                    a {
                      font-size: 24px;
                      color: #1fa7ea;
                      margin: 20px;
                    }
                  }
                  :last-child {
                    a {
                      display: inline-block;
                      border-radius: 4px;
                      color: #fff;
                      font-size: 12px;
                      height: 34px;
                      width: 160px;
                      line-height: 34px;
                      margin-top: 14px;
                      text-align: center;
                      text-decoration: none;
                      background-color: #1fa7ea;
                      transition: all .2s linear;
                    }
                  }
                }
              }
              > a {
                color: #666;
                transition: color .2s linear;
                &:hover {
                  color: #00c3f5;
                }
              }
            }
          }
        }
        .right {
          .p2 {
            font-weight: 400;
            margin-top: 15px;
            > a {
              font-size: 24px;
              color: #1fa7ea;
              margin: 20px;
            }
          }
          .p3 {
            > a {
              display: inline-block;
              border-radius: 4px;
              color: #fff;
              font-size: 12px;
              height: 34px;
              width: 160px;
              line-height: 34px;
              margin-top: 5px;
              text-align: center;
              text-decoration: none;
              background-color: #1fa7ea;
              transition: all .3s linear;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
      .footer1_bottom {
        margin: 38px 0 56px 56px;
        text-align: center;
        color: #666;
        font-size: 12px;
        li {
          float: left;
          margin-right: 20px;
        }
      }
    }
  }

  .footer2 {
    width: 100%;
    height: 132px;
    border-top: 1px solid #e5e5e5;
    color: #999;
    > div {
      width: 1240px;
      margin: 0 auto;
      > ul {
        height: 78px;
        line-height: 78px;
        .csh {
          span {
            display: inline-block;
            width: 66px;
            height: 20px;
            border-radius: 2px;
            line-height: 20px;
            text-align: center;
            color: #fff;
            background: #027af6;
            cursor: pointer;
          }
        }
        .chinese {
          padding-right: 40px;
          background: url(../assets/images/lang-choice.png) no-repeat 64px 40px;
          cursor: pointer;
          position: relative;
          margin-left: 30px;
          &:hover .china {
            display: block;
          }
          .china {
            display: none;
            position: absolute;
            bottom: 62px;
            left: -30px;
            width: 140px;
            height: 204px;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            box-shadow: 0 0 10px #d9d9d9;
            text-align: left;
            background: #fff;
            li {
              height: 40px;
              line-height: 40px;
              border-top: 1px solid #d9d9d9;
              a {
                width: 100%;
                line-height: 40px;
                color: #111;
                display: inline-block;
                i {
                  margin: 0 10px 0 12px;
                  width: 21px;
                  height: 21px;
                  background: url(../assets/images/flyme_footer.png) no-repeat;
                  vertical-align: middle;
                  display: inline-block;
                }
                span {
                  font-size: 14px;
                  vertical-align: middle;
                  display: inline-block;
                }
              }
            }
          }
        }
        > li {
          float: left;
          display: inline;
          margin-right: 38px;
          font-size: 15px;
          color: #999;
          > a {
            &:hover {
              color: #027af6;
            }
          }
        }
      }
      .right {
        height: 78px;
        line-height: 78px;
        font-size: 15px;
        .a1 {
          display: inline-block;
          color: #999;
          position: relative;
          .icon {
            width: 32px;
            height: 32px;
            display: inline-block;
            margin: 0 10px;
            display: inline-block;
            font-size: 15px;
            vertical-align: middle;
            background: url('../assets/images/flyme_footer.png') no-repeat -64px 0;
          }
          img {
            width: 200px;
            height: 200px;
            position: absolute;
            top: -200px;
            left: -50px;
            display: none;
          }
          &:hover span {
            color: #01a50b;
          }
          &:hover .icon {
            background: url('../assets/images/flyme_footer.png') no-repeat -96px 0;
          }
          &:hover img {
            display: block;
          }
        }
        .a2 {
          display: inline-block;
          color: #999;
          margin-left: 20px;
          &:hover span {
            color: #ee3939;
          }
          &:hover .icon1 {
            background: url('../assets/images/flyme_footer.png') no-repeat -32px 0;
          }
          .icon1 {
            width: 32px;
            height: 32px;
            display: inline-block;
            margin: 0 10px;
            display: inline-block;
            font-size: 15px;
            vertical-align: middle;
            background: url('../assets/images/flyme_footer.png') no-repeat 0px 0;
          }
        }
      }
    }
    .bottom {
      width: 1240px;
      text-align: center;
      font-size: 13px;
      .a5 {
        background: url(../assets/images/ghs.png) no-repeat;
        background-size: 15px 14px;
        padding-left: 18px;
        background-position-y: center;
      }
    }
  }


</style>
