<template>
  <div class="mall_con">
    <slide-showA :slides="slides" :inv="slideSpeed"></slide-showA>
    <div class="mall_con1">
      <ul class="mall_con1_nav_lf ">
        <li><a href="">手机</a>
          <div  class="show clearfloat">
            <div class="show_lf lf">
              <a href="">魅族手机<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in phoneImg">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">魅蓝手机<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in phoneImg1">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div v-for="item in phoneRightTop" class="show_rt lf">
              <a class="rt_top" href="">
                <img :src="item.img">
              </a>
              <a v-for="item in phoneRightBottom" class="rt_bottom" href="">
                <img :src="item.img">
              </a>
            </div>
          </div>
        </li>
        <li><a href="">智能设备</a>
          <div  class="show clearfloat">
            <div class="show_lf lf">
              <a href="">智能健康<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in deviceImg">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">智能生活<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in deviceImg1">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div class="show_lf lf">
              <a href="">智能出行<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in deviceImg1">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">智能娱乐<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in deviceImg">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div v-for="item in deviceRightTop" class="show_rt lf">
              <a class="rt_top" href="">
                <img :src="item.img">
              </a>
              <a v-for="item in deviceRightBottom" class="rt_bottom" href="">
                <img :src="item.img">
              </a>
            </div>
          </div>
        </li>
        <li><a href="">智能穿戴</a>
          <div  class="show clearfloat">
            <div class="show_lf lf">
              <a href="">手表<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in dressImg">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">手环<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in dressImg1">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">智能VR<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in dressImg">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div v-for="item in dressRightTop" class="show_rt lf">
              <a class="rt_top" href="">
                <img :src="item.img">
              </a>
              <a v-for="item in dressRightBottom" class="rt_bottom" href="">
                <img :src="item.img">
              </a>
            </div>
          </div>
        </li>
        <li><a href="">游戏设备</a>
          <div  class="show clearfloat">
            <div class="show_lf lf">
              <a href="">游戏手柄<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in gameImg">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">游戏键鼠标<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in gameImg1">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div class="show_lf lf">
              <a href="">游戏手柄<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in gameImg2">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">游戏键鼠标<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in gameImg3">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div v-for="item in gameRightTop" class="show_rt lf">
              <a class="rt_top" href="">
                <img :src="item.img">
              </a>
              <a v-for="item in gameRightBottom" class="rt_bottom" href="">
                <img :src="item.img">
              </a>
            </div>
          </div>
        </li>
        <li><a href="">数码影音</a>
          <div  class="show clearfloat">
            <div class="show_lf lf">
              <a href="">耳机<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in numberImg">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">音箱<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in numberImg1">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div class="show_lf lf">
              <a href="">播放器<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in numberImg2">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">麦克风<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in numberImg3">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div v-for="item in numberRightTop" class="show_rt lf">
              <a class="rt_top" href="">
                <img :src="item.img">
              </a>
              <a v-for="item in numberRightBottom" class="rt_bottom" href="">
                <img :src="item.img">
              </a>
            </div>
          </div>
        </li>
        <li><a href="">手机设备/移动电源</a>
          <div  class="show clearfloat">
            <div class="show_lf lf">
              <a href="">数据线<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in moveImg">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">移动电源<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in moveImg1">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">保护套/后盖/贴膜<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in moveImg2">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li><a href="">移动存储/办公设备</a>
          <div  class="show clearfloat">
            <div class="show_lf lf">
              <a href="">智能健康<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in deviceImg">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">智能生活<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in deviceImg1">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div class="show_lf lf">
              <a href="">智能出行<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in deviceImg1">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">智能娱乐<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in deviceImg">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div v-for="item in deviceRightTop" class="show_rt lf">
              <a class="rt_top" href="">
                <img :src="item.img">
              </a>
              <a v-for="item in deviceRightBottom" class="rt_bottom" href="">
                <img :src="item.img">
              </a>
            </div>
          </div>
        </li>
        <li><a href="">生活周边</a>
          <div  class="show clearfloat">
            <div class="show_lf lf">
              <a href="">耳机<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in numberImg">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">音箱<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in numberImg1">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div class="show_lf lf">
              <a href="">播放器<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in numberImg2">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
              <a href="">麦克风<i class="iconfont icon-jiantouyou "></i> </a>
              <ul class="clearfloat">
                <li v-for="item in numberImg3">
                  <a class="clearfloat" href="">
                    <img :src="item.img">
                    <b>{{ item.title}}</b>
                  </a>
                </li>
              </ul>
            </div>
            <div v-for="item in numberRightTop" class="show_rt lf">
              <a class="rt_top" href="">
                <img :src="item.img">
              </a>
              <a v-for="item in numberRightBottom" class="rt_bottom" href="">
                <img :src="item.img">
              </a>
            </div>
          </div>
        </li>
      </ul>



    </div>
    <div class="mall_con2">
      <ul class="clearfloat">
        <li class="mall_bg clearfloat">
          <a href=""><i class="iconfont icon-555 "></i> <br> <span>M码通道</span></a>
          <a href=""><i class="iconfont icon-444 "></i> <br> <span>以旧换新</span></a>
          <a href=""><i class="iconfont icon-222 "></i> <br> <span>魅族意外保</span></a>
          <a href=""><i class="iconfont icon-333 "></i> <br> <span>回购单查询</span></a>
        </li>
        <li class="callimg" v-for="item in callImg"><a href=""><img :src="item.img" alt=""></a></li>
      </ul>
    </div>
    <div class="mall_con3">
      <!--<div class="slide_title">热品推荐</div>-->
      <div class="slide">
        <ul class="slide_ul">
          <li>
            <a href="">
              <img src="" alt="">
              <h4></h4>
              <h6></h6>
              <p></p>
              <span></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <mall-con></mall-con>
  </div>
</template>
<script>
  //  魅族商城的轮播
  import slideShowA from '../components/slideShowa.vue'
  //魅族商城切换
  import mallCon from './subpage/mallCon.vue'
  export default{
    components: {
      slideShowA,
      mallCon
    },
    created: function () {
      this.$http.get('api/nav2')
        .then(function (data) {
          console.log(data)
          this.nav2 = data
        }, function (err) {
          console.log(err)
        })
    },
    data(){
      return {
        callImg: [
          {
            img: require('../assets/images/mall_con2_1.jpg'),
          },
          {
            img: require('../assets/images/mall_con2_2.jpg'),
          },
          {
            img: require('../assets/images/mall_con2_3.jpg'),
          },
          {
            img: require('../assets/images/mall_con2_4.jpg'),
          },
        ],
        slideSpeed: 3000,
        slides: [
          {
            src: require('../assets/banner/mall_banner1.jpg'),
            title: '魅族1',
            href: ''
          },
          {
            src: require('../assets/banner/mall_banner2.jpg'),
            title: '魅族2',
            href: ''
          },
          {
            src: require('../assets/banner/mall_banner3.jpg'),
            title: '魅族3',
            href: ''
          },
          {
            src: require('../assets/banner/mall_banner4.jpg'),
            title: '魅族4',
            href: ''
          },
          {
            src: require('../assets/banner/mall_banner5.jpg'),
            title: '魅族5',
            href: ''
          }
        ],
//        nav第一个列表
        phoneImg: [
          {
            img: require('../assets/images/nav_1/nav_1.png'),
            title: '魅族PRO 6 Plus'
          },
          {
            img: require('../assets/images/nav_1/nav_2.png'),
            title: '魅族 PRO 6s'
          },
          {
            img: require('../assets/images/nav_1/nav_3.png'),
            title: '魅族 MX6'
          },
          {
            img: require('../assets/images/nav_1/nav_4.png'),
            title: '魅族PRO 6'
          },
        ],
        phoneImg1: [
          {
            img: require('../assets/images/nav_1/nav_5.png'),
            title: '魅族 E2'
          },
          {
            img: require('../assets/images/nav_1/nav_6.png'),
            title: '魅族  5s'
          },
          {
            img: require('../assets/images/nav_1/nav_3.png'),
            title: '魅族 Note5'
          },
          {
            img: require('../assets/images/nav_1/nav_7.png'),
            title: '魅族 5'
          },
          {
            img: require('../assets/images/nav_1/nav_2.png'),
            title: '魅族 3'
          },
          {
            img: require('../assets/images/nav_1/nav_6.png'),
            title: '魅族 X'
          },
          {
            img: require('../assets/images/nav_1/nav_3.png'),
            title: '魅族 E'
          },
          {
            img: require('../assets/images/nav_1/nav_7.png'),
            title: '魅族 Max'
          },
        ],
        phoneRightTop: [
          {
            img: require('../assets/images/nav_3/nav_rt1.png'),
          }
        ],
        phoneRightBottom: [
          {
            img: require('../assets/images/nav_3/nav_rt2.png'),
          },
          {
            img: require('../assets/images/nav_2/nav_rt3.png'),
          },
          {
            img: require('../assets/images/nav_3/nav_rt4.png'),
          },
          {
            img: require('../assets/images/nav_2/nav_rt5.png'),
          },
        ],
//        nav第二个列表
        deviceImg: [
          {
            img: require('../assets/images/nav_2/nav_1.png'),
            title: '麦开 智能水杯'
          },
          {
            img: require('../assets/images/nav_2/nav_2.png'),
            title: '乐心体脂称'
          },
          {
            img: require('../assets/images/nav_2/nav_3.png'),
            title: '乐范魔力贴'
          },
          {
            img: require('../assets/images/nav_2/nav_7.png'),
            title: '智能肌肤喷雾仪'
          },
          {
            img: require('../assets/images/nav_2/nav_5.png'),
            title: '职能环境检测仪'
          },
          {
            img: require('../assets/images/nav_2/nav_9.png'),
            title: '乐范魔力贴'
          },
        ],
        deviceImg1: [
          {
            img: require('../assets/images/nav_2/nav_5.png'),
            title: '麦开 智能水杯'
          },
          {
            img: require('../assets/images/nav_2/nav_4.png'),
            title: '乐心体脂称'
          },
          {
            img: require('../assets/images/nav_2/nav_6.png'),
            title: '乐范魔力贴'
          },
          {
            img: require('../assets/images/nav_2/nav_8.png'),
            title: '智能肌肤喷雾仪'
          },
          {
            img: require('../assets/images/nav_2/nav_1.png'),
            title: '职能环境检测仪'
          },
          {
            img: require('../assets/images/nav_2/nav_4.png'),
            title: '乐范魔力贴'
          },
        ],
        deviceRightTop: [
          {
            img: require('../assets/images/nav_2/nav_rt1.png'),
          }
        ],
        deviceRightBottom: [
          {
            img: require('../assets/images/nav_2/nav_rt2.png'),
          },
          {
            img: require('../assets/images/nav_2/nav_rt3.png'),
          },
          {
            img: require('../assets/images/nav_2/nav_rt4.png'),
          },
          {
            img: require('../assets/images/nav_2/nav_rt5.png'),
          },
        ],
//        nav第三个列表
        dressImg: [
          {
            img: require('../assets/images/nav_3/nav_1.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_3/nav_2.png'),
            title: '阿巴 儿童手表'
          }
        ],
        dressImg1: [
          {
            img: require('../assets/images/nav_3/nav_3.png'),
            title: '魅族 手环'
          },
          {
            img: require('../assets/images/nav_3/nav_4.png'),
            title: '乐心 运动手环'
          },
          {
            img: require('../assets/images/nav_3/nav_5.png'),
            title: '唯乐 智能手环'
          },
          {
            img: require('../assets/images/nav_3/nav_6.png'),
            title: 'Misfit 智能手环'
          }
        ],
        dressRightTop: [
          {
            img: require('../assets/images/nav_3/nav_rt1.png'),
          }
        ],
        dressRightBottom: [
          {
            img: require('../assets/images/nav_2/nav_rt2.png'),
          },
          {
            img: require('../assets/images/nav_3/nav_rt3.png'),
          },
          {
            img: require('../assets/images/nav_3/nav_rt4.png'),
          },
          {
            img: require('../assets/images/nav_2/nav_rt5.png'),
          },
        ],
//        nav第四个列表
        gameImg: [
          {
            img: require('../assets/images/nav_4/nav_1.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_4/nav_2.png'),
            title: '阿巴 儿童手表'
          },
          {
            img: require('../assets/images/nav_4/nav_3.png'),
            title: '魅族 手环'
          },
          {
            img: require('../assets/images/nav_4/nav_4.png'),
            title: '乐心 运动手环'
          },
        ],
        gameImg1: [
          {
            img: require('../assets/images/nav_4/nav_5.png'),
            title: '唯乐 智能手环'
          },
          {
            img: require('../assets/images/nav_3/nav_6.png'),
            title: 'Misfit 智能手环'
          },
          {
            img: require('../assets/images/nav_4/nav_7.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_4/nav_8.png'),
            title: '阿巴 儿童手表'
          }
        ],
        gameImg2: [
          {
            img: require('../assets/images/nav_4/nav_9.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_4/nav_10.png'),
            title: '阿巴 儿童手表'
          }
        ],
        gameImg3: [
          {
            img: require('../assets/images/nav_4/nav_5.png'),
            title: '魅族 手环'
          },
          {
            img: require('../assets/images/nav_4/nav_8.png'),
            title: '乐心 运动手环'
          },
        ],
        gameRightTop: [
          {
            img: require('../assets/images/nav_4/nav_rt1.png'),
          }
        ],
        gameRightBottom: [
          {
            img: require('../assets/images/nav_4/nav_rt2.png'),
          },
          {
            img: require('../assets/images/nav_4/nav_rt3.png'),
          },
          {
            img: require('../assets/images/nav_4/nav_rt4.png'),
          },
          {
            img: require('../assets/images/nav_4/nav_rt5.png'),
          },
        ],
//        nav第五个列表
        numberImg: [
          {
            img: require('../assets/images/nav_5/nav_1.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_5/nav_2.png'),
            title: '阿巴 儿童手表'
          },
          {
            img: require('../assets/images/nav_5/nav_3.png'),
            title: '魅族 手环'
          },
          {
            img: require('../assets/images/nav_5/nav_4.png'),
            title: '乐心 运动手环'
          },
          {
            img: require('../assets/images/nav_5/nav_5.png'),
            title: '唯乐 智能手环'
          },
          {
            img: require('../assets/images/nav_5/nav_6.png'),
            title: 'Misfit 智能手环'
          },
        ],
        numberImg1: [
          {
            img: require('../assets/images/nav_5/nav_7.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_5/nav_8.png'),
            title: '阿巴 儿童手表'
          },
          {
            img: require('../assets/images/nav_5/nav_9.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_5/nav_10.png'),
            title: '阿巴 儿童手表'
          },
          {
            img: require('../assets/images/nav_5/nav_11.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_5/nav_12.png'),
            title: '阿巴 儿童手表'
          }
        ],
        numberImg2: [
          {
            img: require('../assets/images/nav_5/nav_13.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_5/nav_14.png'),
            title: '阿巴 儿童手表'
          },
          {
            img: require('../assets/images/nav_5/nav_15.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_5/nav_16.png'),
            title: '阿巴 儿童手表'
          },
        ],
        numberImg3: [
          {
            img: require('../assets/images/nav_5/nav_17.png'),
            title: '魅族 手环'
          },
          {
            img: require('../assets/images/nav_5/nav_18.png'),
            title: '乐心 运动手环'
          },
        ],
        numberRightTop: [
          {
            img: require('../assets/images/nav_5/nav_rt1.png'),
          }
        ],
        numberRightBottom: [
          {
            img: require('../assets/images/nav_5/nav_rt2.png'),
          },
          {
            img: require('../assets/images/nav_5/nav_rt3.png'),
          },
          {
            img: require('../assets/images/nav_5/nav_rt4.png'),
          },
          {
            img: require('../assets/images/nav_5/nav_rt5.png'),
          },
        ],
//        nav第六个列表
        moveImg: [
          {
            img: require('../assets/images/nav_6/nav_1.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_6/nav_2.png'),
            title: '阿巴 儿童手表'
          }
        ],
        moveImg1: [
          {
            img: require('../assets/images/nav_6/nav_3.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_6/nav_4.png'),
            title: '阿巴 儿童手表'
          }
        ],
        moveImg2: [
          {
            img: require('../assets/images/nav_6/nav_5.png'),
            title: '魅族 轻智能手表'
          },
          {
            img: require('../assets/images/nav_6/nav_6.png'),
            title: '阿巴 儿童手表'
          },
        ],
        tab: '',
        nav2: []
      }
    },
    methods: {
      show(index) {
        this.show(index)
      },
    },
  }
</script>
<style scoped rel="stylesheet/scss" lang="scss">
  .mall_con1 {
    width: 1240px;
    height: 480px;
    margin: 0 auto;
    margin-top: -480px;
    position: relative;
    z-index: 1;
    .mall_con1_nav_lf {
      width: 244px;
      height: 480px;
      background-color: rgba(248, 247, 247, .8);
      padding-top: 14px;
      > li {
        height: 57px;
        line-height: 57px;
        background-color: transparent;
        transition: all 1.5s;
        &:hover {
          background: #fff;
          height: 57px;
          line-height: 57px;
          transition: all .5s;
        }
        &:hover .show{
          display: block;
        }
        > a {
          display: block;
          color: #333;
          padding: 0 30px;
          height: 100%;
        }
      }
    }
  }

  .show {
    display: none;
    height: 480px;
    position: absolute;
    top: 0;
    left: 244px;
    white-space: nowrap;
    font-size: 0;
    background: #fff;
    border-top: 1px solid #ddd;
    z-index: 5;
    .show_lf {
      margin: 15px 28px 15px 25px;
      width: 320px;
      height: 450px;
      > a {
        display: block;
        position: relative;
        font-size: 14px;
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
        margin-top: 4px;
        height: 40px;
        line-height: 40px;
        color: #333;
        margin-bottom: 16px;
        transition: all .5s;
        overflow: hidden;
        &:hover {
          color: #00c3f5;
        }
        i {
          margin-left: 230px;
          font-size: 22px;
          color: #333;
        }
      }
      ul {
        li {
          float: left;
          a {
            display: block;
            font-size: 12px;
            height: 40px;
            width: 150px;
            line-height: 40px;
            color: #333;
            margin-bottom: 16px;
            transition: all .5s;
            overflow: hidden;
            &:hover b {
              color: #00c3f5;
            }
            img {
              float: left;
              width: 40px;
              height: 40px;
            }
            b {
              float: left;
              margin-left: 6px;
              width: 100px;
              overflow: hidden;
              white-space: nowrap;
              word-break: keep-all;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    .show_rt {
      background-color: #F5F5F5;
      width: 220px;
      height: 480px;
      padding: 0 14px;
      overflow: hidden;
      .rt_top {
        background: #fff;
        margin-top: 14px;
        float: left;
        margin-bottom: 7px;
        img {
          width: 100%;
        }
      }
      .rt_bottom {
        img {
          float: left;
          width: 109px;
          height: 63px;
        }
      }
      :nth-child(even) {
        img {
          margin-right: 2px;
        }
      }
      :nth-child(odd) {
        img {
          margin-bottom: 2px;
        }
      }
    }
  }

  .mall_con2 {
    width: 1240px;
    height: 140px;
    margin: 0 auto;
    margin-top: 6px;

    .mall_bg {
      background: #f9f9f9;
      margin-left: 0px;
      margin-top: 0px;
      > a {
        > i {
          font-weight: 100;
        }
      }
    }
    li {
      float: left;
      width: 244px;
      height: 140px;
      margin-left: 5px;
      margin-top: -15px;
      > a {
        float: left;
        display: block;
        width: 122px;
        height: 40px;
        text-align: center;
        color: #666;
        font-size: 12px;
        padding: 15px 0;
        transition: color .5s;
        &:hover {
          color: #999;
        }
        i {
          display: block;
          font-size: 24px;
          margin-bottom: 2px;
          font-weight: 100;
        }
      }
    }
  }

  .mall_con3 {
    width: 1240px;
    margin: 0 auto;
    .slide_ul {

    }
  }

  .callimg img {
    width: 244px;
    height: 140px;
  }
</style>
