<template>
  <div class="index_con">
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
      <!--首页banner2-->
      <carousel></carousel>
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
            span: '各种惊喜等你开启'

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
        ]
      }
    }
  }
</script>

<style scoped scoped rel="stylesheet/scss" lang="scss">
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
    border-top: 1px solid #eee;
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
    margin-bottom: 50px;
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
</style>
