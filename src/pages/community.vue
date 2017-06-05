<template>
  <!--大的100%-->
  <div class="community">
    <!--1040-->
    <div class="con">
      <!--top  nav-->
      <div class="top clearfloat">
        <ul class="nav clearfloat lf">
          <li v-for="item in nav"><a href="">{{ item.title }}</a></li>
        </ul>
        <div class="input rt clearfloat">
          <input type="text" value="搜索话题和用户">
          <button>
            <i class="iconfont icon-ren "></i>
          </button>
        </div>
      </div>
      <!--main-->
      <div class="main clearfloat">
        <!--main  left-->
        <div class="left lf">
          <!--轮播-->
          <div class="banner">
            <slide-showC :slides="slides" :inv="slideSpeed"></slide-showC>
          </div>
          <!--社区热帖-->
          <div class="lf_con">
            <div class="lf_con_nav clearfloat">
              <h3 class="lf">社区热帖</h3>
              <ul class="lf_nav_rt rt clearfloat">
                <li>
                  <p>今日发帖：
                    <span>30814 丨</span>
                  </p>
                </li>
                <li>
                  <p>今日发帖：
                    <span>30814丨</span>
                  </p>
                </li>
                <li>
                  <p>今日发帖：
                    <span>30814</span>
                  </p>
                </li>

              </ul>
            </div>
            <div class="lf_con_main">
              <ul class="clearfloat">
                <li v-for="item in hot" class="clearfloat">
                  <div class="img_lf lf"><a href=""> <img :src="item.img"></a></div>
                  <div class="img_rt lf clearfloat">
                    <a href="">{{ item.top }}</a><br>
                    <span>{{ item.con }}</span>
                    <b><i class="iconfont icon-ren "></i>{{ item.look }}</b>
                    <b><i class="iconfont icon-ren "></i>{{ item.info }}</b>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="list">
            <ul class="list_ul">
              <li v-for="item in list" class="list_li clearfloat">
                <a class="box_lf lf" href=""><img :src="item.img"></a>
                <div class="box_rt lf">
                  <div class="title">综合讨论</div>
                  <br>
                  <div class="two"><a href="">{{ item.title }}</a></div>
                  <div class="box_center cleafloat">
                    <ul class="lf_nav_rt lf clearfloat">
                      <li>
                        <i class="iconfont icon-ren "></i>
                        11052
                      </li>
                      <li>
                        <i class="iconfont icon-ren "></i>
                        11052
                      </li>
                      <li><a href="">{{item.user}}</a></li>
                      <li><a href="">{{item.time}}</a></li>
                    </ul>
                    <a class="rt" href="">阅读全文</a>
                  </div>
                  <br>
                  <div class="bottom lf">{{ item.bottom }}</div>
                  <br>
                  <a href="">
                    <i class="iconfont icon-ren "></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--main  right-->
        <div class="right rt">
          <div class="right_con">
            <div class="rt_top">
              <div class="green">
                <a href="" class="clearfloat">
                  <div class="five">星期五</div>
                  <div class="qd">签到</div>
                </a>
              </div>
              <div style="margin-top:10px;" class="clearfloat">
                <a class="lf" href=""><img src="../assets/images/shop.png" alt=""></a>
                <a class="rt" href=""><img src="../assets/images/shop.png" alt=""></a>
              </div>
            </div>
            <div class="rt_ban">
              <img src="../assets/images/qr-right-side-1.png" alt="">
            </div>
            <div class="rt_con">
              <p>热门版块</p>
              <table>
                <tbody>
                <tr>
                  <td>
                    <a href="">综合讨论</a>
                  </td>
                  <td>
                    <a href="">魅族手机</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="">综合讨论</a>
                  </td>
                  <td>
                    <a href="">魅族手机</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div class="rt_con1">
              <div>
                <span>最新活动</span>
              </div>
              <ul>
                <li class="clearfloat">
                  <div class="lf left_img"><img src="../assets/images/180904n2862x6xxzphpbll.jpg" alt=""></div>
                  <div class="lf right_zi">
                    <p>魅蓝 Note5</p>
                    <b>购 64G 享 12 期免息分期 0 首付 0 手续费</b> <br>
                    <a href="">立即参加</a>
                  </div>
                </li>
                <li class="clearfloat">
                  <div class="lf left_img"><img src="../assets/images/180904n2862x6xxzphpbll.jpg" alt=""></div>
                  <div class="lf right_zi">
                    <p>魅蓝 Note5</p>
                    <b>购 64G 享 12 期免息分期 0 首付 0 手续费</b> <br>
                    <a href="">立即参加</a>
                  </div>
                </li>
                <a href=""></a>
              </ul>
            </div>
            <div class="rt_con2">
              <div>
                <span>新人课堂</span>
              </div>
              <a href=""> <img src="../assets/images/900744453c88d90ad094cdf01117de47.jpg" alt=""> </a>
              <ul class="clearfloat">
                <li><a href="">系统教程</a></li>
                <li><a href="">系统教程</a></li>
                <li><a href="">系统教程</a></li>
                <li><a href="">系统教程</a></li>
                <li><a href="">系统教程</a></li>
                <li><a href="">系统教程</a></li>
              </ul>
            </div>
            <div class="rt_bottom">
              <div class="toggle">
                <div  class="ty">
                  <a href="">体验版系统</a>
                  <a href="">体验版系统</a>
                </div>

                <ul class="show">
                  <li>Flyme 6.7.5.23 beta</li>
                </ul>
                <ul class="hide">
                  <li> 6.7.5.23 beta</li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import slideShowC from '../components/slideShowC'
  export default{
    components: {
      slideShowC
    },
    data(){
      return {
//        isA: flase,
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
        nav: [
          {title: '首页'},
          {title: '综合讨论'},
          {title: '魅蓝手机'},
          {title: '摄影天地'},
          {title: '全部版块'},
          {title: '魅玩帮'},
          {title: '魅友家'},
          {title: '社区APP'}
        ],
        hot: [
          {
            img: require('../assets/images/me.jpg'),
            top: '魅族端广告要这么玩',
            con: '就说你呢_瞅啥呢',
            look: '186',
            info: '11'
          },
          {
            img: require('../assets/images/me.jpg'),
            top: '魅族端广告要这么玩',
            con: '就说你呢_瞅啥呢',
            look: '186',
            info: '11'
          },
          {
            img: require('../assets/images/me.jpg'),
            top: '魅族端广告要这么玩',
            con: '就说你呢_瞅啥呢',
            look: '186',
            info: '11'
          },
          {
            img: require('../assets/images/me.jpg'),
            top: '魅族端广告要这么玩',
            con: '就说你呢_瞅啥呢',
            look: '186',
            info: '11'
          },
          {
            img: require('../assets/images/me.jpg'),
            top: '魅族端广告要这么玩',
            con: '就说你呢_瞅啥呢',
            look: '186',
            info: '11'
          },
          {
            img: require('../assets/images/me.jpg'),
            top: '魅族端广告要这么玩',
            con: '就说你呢_瞅啥呢',
            look: '186',
            info: '11'
          },
          {
            img: require('../assets/images/me.jpg'),
            top: '魅族端广告要这么玩',
            con: '就说你呢_瞅啥呢',
            look: '186',
            info: '11'
          },
          {
            img: require('../assets/images/me.jpg'),
            top: '魅族端广告要这么玩',
            con: '就说你呢_瞅啥呢',
            look: '186',
            info: '11'
          },
          {
            img: require('../assets/images/me.jpg'),
            top: '魅族端广告要这么玩',
            con: '就说你呢_瞅啥呢',
            look: '186',
            info: '11'
          },
          {
            img: require('../assets/images/me.jpg'),
            top: '魅族端广告要这么玩',
            con: '就说你呢_瞅啥呢',
            look: '186',
            info: '11'
          }
        ],
        list: [
          {
            img: require('../assets/images/list_lf1.png'),
            title: '脑洞帖：给手机加个外设，能变成什么？',
            user: '/ 花轮_张',
            time: '/4月24日',
            bottom: '智能手机堪称身负十八般武艺，再加上这些脑洞大开的外设……'
          },
          {
            img: require('../assets/images/list_lf1.png'),
            title: '脑洞帖：给手机加个外设，能变成什么？',
            user: '/ 花轮_张',
            time: '/4月24日',
            bottom: '智能手机堪称身负十八般武艺，再加上这些脑洞大开的外设……'
          },
        ],
      }
    },
//    methods:{
//      toggle:function () {
//        this.isA=!this.isA
//      }
//    }
  }
</script>
<style scoped rel="stylesheet/scss" lang="scss">
  .community {
    background: #F2F2F2;
    margin-top: 80px;
    .con {
      width: 1040px;
      margin: 0 auto;
      .top {
        padding: 15px 0;
        .nav {
          li {
            float: left;
            height: 36px;
            line-height: 36px;
            font-size: 14px;
            > a {
              padding: 0;
              margin: 0 15px;
              color: #222;
              &:hover {
                color: #00c3f5;
              }
            }
          }
          :first-child a {
            color: #00c3f5;
            margin: 0px;
          }
        }
        .input {
          height: 36px;
          line-height: 36px;
          position: relative;
          input {
            width: 170px;
            height: 28px;
            font-size: 14px;
            padding: 0 10px;
            float: left;
            color: #999999;
            border: 1px solid #999;
            border-radius: 3px;
            vertical-align: middle;
          }
          button {
            width: 36px;
            height: 30px;
            margin: 0;
            border: 1px solid #999;
            padding: 0;
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 156px;
            border-left: 1px solid transparent;
          }
        }
      }
      .main {
        width: 1040px;
        .left {
          width: 716px;
          .banner {
            height: 292px;
            width: 714px;
            overflow: hidden;
            border: 1px solid #e6e6e6;
            background-color: #fff;
            padding-top: 15px;
          }
          .lf_con {
            margin-top: 20px;
            margin-bottom: 20px;
            border: 1px solid #e6e6e6;
            background-color: #fff;
            padding: 0 15px 10px;
            box-shadow: 1px 1px 10px #e2e2e2;
            .lf_con_nav {
              border-bottom: 1px solid #eee;
              h3 {
                height: 24px;
                padding: 18px 0;
                display: inline-block;
                font-size: 18px;
                color: #222;
              }
              .lf_nav_rt {
                margin-right: 20px;
                float: right;
                padding: 21px 0;
                font-size: 12px;
                > li {
                  float: left;
                  margin-left: 14px;
                  color: #222;
                  span {

                  }
                }
              }
            }
            .lf_con_main {
              padding-top: 25px;
              padding-left: 20px;
              > ul {
                > li {
                  float: left;
                  width: 48%;
                  padding-bottom: 20px;
                  vertical-align: top;
                  .img_lf {
                    > a {
                      > img {
                        width: 34px;
                        height: 34px;
                        border: 0;
                        border-radius: 22px;
                      }
                    }
                  }
                  .img_rt {
                    margin-left: 16px;
                    margin-top: 3px;
                    > a {
                      display: inline-block;
                      font-size: 14px;
                      color: #333;
                      overflow: hidden;
                      width: 250px;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      vertical-align: middle;
                      margin-bottom: 10px;
                    }
                    span {
                      float: left;
                      margin-right: 20px;
                      font-size: 12px;
                      color: #999;
                      width: 75px;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      white-space: nowrap;
                    }
                  }
                }
                > :nth-child(odd) {
                  margin-right: 20px;
                }
              }
            }
          }
          .list {
            .list_ul {
              .list_li {
                margin-bottom: 20px;
                overflow: hidden;
                background-color: #fff;
                border: 1px solid #e6e6e6;
                padding: 14px 0 14px 14px;
                box-shadow: 2px 2px 2px #e2dede;
                .box_lf {
                  > a {
                    img {

                    }
                  }
                }
                .box_rt {
                  padding: 0 19px;
                  width: 350px;
                  display: block;
                  .title {
                    background-color: #0daaea;
                    width: 80px;
                    font-size: 16px;
                    color: #fff;
                    height: 34px;
                    line-height: 34px;
                    padding: 0 9px;
                  }
                  .two {
                    color: #333;
                    font-size: 16px;
                    line-height: 30px;
                    font-weight: 700;
                  }
                  .box_center {
                    color: rgb(81, 81, 81);
                    font-size: 12px;
                    margin: 12px 0 10px;
                    text-align: center;
                    vertical-align: middle;
                    .lf_nav_rt {
                      vertical-align: middle;
                      text-align: center;
                      li {
                        float: left;
                        margin-right: 13px;
                      }
                    }
                    > a {
                      color: #32a5e7;
                    }
                  }
                  .bottom {
                    margin: 10px 0;
                    color: rgb(81, 81, 81);
                  }
                }
              }
            }
          }
        }
        .right {
          padding-bottom: 20px;
          width: 304px;
          .right_con {
            float: left;
            border: 1px solid #e6e6e6;
            background-color: #fff;
            padding: 16px;
            box-shadow: 3px 0 4px #cecccc;
            .rt_top {
              position: relative;
              .green {
                width: 268px;
                height: 62px;
                line-height: 52px;
                font-size: 16px;
                border: 1px solid #53D769;
                border-radius: 2px 2px 2px 2px;
                background-color: #43b56b;
                color: #FFFFFF;
                overflow: hidden;
                cursor: pointer;
                .five {
                  display: inline-block;
                  width: 92px;
                  height: 50px;
                  margin: 5px 5px 0 22px;
                  background: url(//bbs.res.meizu.com/resources/php/bbs/static/image/common/main_icon.png) no-repeat scroll -107px -221px;
                  color: #000000;
                  font-size: 18px;
                  padding: 0 0 0 26px;
                  float: left;
                }
                .qd {
                  float: left;
                  font-size: 24px;
                  margin: 5px 0 0 15px;
                  width: 92px;
                  text-align: center;
                  color: #ffffff;
                }
              }
            }
            .rt_ban {
              margin: 20px 0;
              img {
                width: 270px;
              }
            }
            .rt_con {
              > p {
                color: #333;
                height: 50px;
                line-height: 50px;
                padding-bottom: 0;
                padding-top: 0;
                text-align: center;
                font-size: 14px;
                background-color: #fcfcfc;
                border-width: 2px 1px 0;
                border-style: solid;
                border-color: #00c3f5 #eee transparent;
              }
              table {
                width: 270px;
                border-collapse: collapse;
                border-spacing: 0;
                tbody {
                  tr {
                    td {
                      width: 50%;
                      text-align: center;
                      font-size: 14px;
                      color: #333;
                      border: 1px solid #eee;
                      a {
                        display: inline-block;
                        padding: 15px 0;
                        width: 100%;
                      }
                    }
                  }
                  /*:nth-child(add) {*/
                  /*background: #f7f7f7;*/
                  /*}*/
                }
              }
            }
            .rt_con1 {
              margin-top: 20px;
              overflow: hidden;
              width: 270px;
              > div {
                border-bottom: 2px solid #e6e6e6;
                padding: 6px 0;
                span {
                  color: #333 !important;
                  font-size: 16px;
                  display: inline-block;
                  height: 25px;
                  line-height: 25px;
                  font-weight: 700;
                }
              }
              > ul {
                li {
                  margin: 15px 0;
                  .left_img {
                    width: 121px;
                    > img {
                      border: 1px solid #eee;
                    }
                  }
                  .right_zi {
                    font-size: 14px;
                    text-align: left;
                    width: 128px;
                    margin-left: 18px;
                    p {
                      font-size: 14px;
                      font-weight: 700;
                      padding-bottom: 5px;
                    }
                    b {
                      line-height: 20px;
                      height: 44px;
                      width: 128px;
                      overflow: hidden;
                      font-size: 12px;
                      padding: 4px 0;
                    }
                    a {
                      display: block;
                      background-color: #4ebaf2;
                      width: 60px;
                      text-align: center;
                      font-size: 12px;
                      color: #fff;
                      border-radius: 2px;
                      padding: 2px;
                      line-height: 20px;
                      height: 21px;
                      margin-top: 7px;
                    }
                  }
                }
              }
            }
            .rt_con2 {
              overflow: hidden;
              width: 270px;
              > div {
                border-bottom: 2px solid #e6e6e6;
                padding: 6px 0;
                span {
                  color: #333 !important;
                  font-size: 16px;
                  display: inline-block;
                  height: 25px;
                  line-height: 25px;
                  font-weight: 700;
                }
              }
              > a {
                > img {
                  margin-top: 15px;
                  border: 1px solid #ddd;
                }
              }
              > ul {
                > li {
                  float: left;
                  width: 88px;
                  text-align: center;
                  height: 25px;
                  line-height: 20px;
                  font-size: 14px;
                }
              }
            }
            .rt_bottom {
              .toggle {
                .ty {
                  background-color: #fff;
                  margin-bottom: 15px;
                  > a {
                    float: left;
                    width: 133px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    font-size: 16px;
                    color: #222;
                    cursor: pointer;
                    border-bottom: 1px solid #e6e6e6;
                  }
                }

              }
            }
          }
        }
      }
    }
  }
</style>
