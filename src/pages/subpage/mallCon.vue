<template>
  <div class="bg">
    <div class="toggle ">
      <div v-for="item in myslider" class="toggle_nav clearfloat">
        <!--左上角title-->
        <h2 class="toggle_nav_h2 lf">{{item.title}}</h2>
        <!--切换列表-->
        <!--更多-->
        <span class="rt">更多&gt;</span>
      </div>
      <div v-for="item in toggleOneFirst" class="toggle_bottom clearfloat">
        <!--图片-->
        <ul class="toggle_bottom_img style1 lf clearfloat">
          <!--列表第一个图片-->
          <li v-for="item in mysliderUl">
            <a href="">
              <img class="tobble_bottom_img" :src="item.img">
              <h4>{{ item.h4 }}</h4>
              <h6>
                <span v-if="true">{{ item.span }}</span>
                {{ item.h6 }}
              </h6>
              <p>
                <span>{{item.p}}</span>
                <b>{{item.p1}}</b>
              </p>
              <div v-if="item.hot" class="hot">{{item.div}}</div>
            </a>
          </li>
        </ul>
        <div v-for="item in banner1" class="banner_1">
          <a href="">
            <img :src="item.img">
          </a>
        </div>
      </div>
    </div>
    <div class="toggle">
      <div v-for="item in toggleOne" class="toggle_nav clearfloat">
        <!--左上角title-->
        <h2 class="toggle_nav_h2 lf">{{item.title}}</h2>
        <!--切换列表-->
        <ul v-for="item in toggleOneUl" class="toggle_nav_ul lf clearfloat">
          <li class="active"><a href="">{{item.title}}</a></li>
        </ul>
        <!--更多-->
        <span class="rt">更多&gt;</span>
      </div>
      <div v-for="item in toggleOneFirst" class="toggle_bottom clearfloat">
        <!--图片-->
        <ul class="toggle_bottom_img style2 lf clearfloat">
          <!--列表第一个图片-->
          <li><a class="lf" href=""><img style="width: 244px; height: 338px;margin-top: 0px;margin-left: -10px;"
                                         :src="item.img"></a></li>
          <li v-for="item in toggleOneImg">
            <a href="">
              <img class="tobble_bottom_img " :src="item.img">
              <h4>{{ item.h4 }}</h4>
              <h6>
                <span v-if="true">{{ item.span }}</span>
                {{ item.h6 }}
              </h6>
              <p>
                <span>{{item.p}}</span>
                <b>{{item.p1}}</b>
              </p>
              <div v-if="item.hot" class="hot">{{item.div}}</div>
            </a>
          </li>
        </ul>
        <div v-for="item in banner1" class="banner_1">
          <a href="">
            <img :src="item.img">
          </a>
        </div>
      </div>
    </div>
    <div class="toggle">
      <div v-for="item in commend" class="toggle_nav clearfloat">
        <!--左上角title-->
        <h2 class="toggle_nav_h2 lf">{{item.title}}</h2>
        <!--切换列表-->
        <ul class="toggle_nav_ul lf clearfloat">
          <li @mouseover="tab='commend'" :class="{'active':tab=='commend'}"><a href="">超值推荐</a></li>
          <li @mouseover="tab='headset'" :class="{'active':tab=='headset'}"><a href="">耳机/音箱</a></li>
          <li @mouseover="tab='storage'" :class="{'active':tab=='storage'}"><a href="">办公存储</a></li>
          <li @mouseover="tab='parts'" :class="{'active':tab=='parts'}"><a href="">手机配件</a></li>
          <li @mouseover="tab='keyset'" :class="{'active':tab=='keyset'}"><a href="">键盘鼠标</a></li>
        </ul>
        <!--更多-->
        <span class="rt">更多&gt;</span>
      </div>
      <div v-if="tab=='commend' " v-for="item in commend1" class="toggle_bottom clearfloat">
        <!--图片-->
        <ul class="toggle_bottom_img lf clearfloat">
          <!--列表第一个图片-->
          <li><a class="lf" href=""><img style="width: 244px; height: 338px;margin-top: 0px;margin-left: -10px;"
                                         :src="item.img"></a></li>
          <li v-for="item in commend2">
            <a href="">
              <img class="tobble_bottom_img" :src="item.img">
              <h4>{{ item.h4 }}</h4>
              <h6>
                <span v-if="item.red">{{ item.span }}</span>
                {{ item.h6 }}
              </h6>
              <p>
                <span>{{item.p}}</span>
                <b>{{item.p1}}</b>
              </p>
              <div v-if="item.hot" class="hot">{{ item.div }}</div>
            </a>
          </li>
        </ul>
      </div>
      <div v-if="tab=='headset' " class="toggle_bottom clearfloat">
        <!--图片-->
        <ul class="toggle_bottom_img lf clearfloat">
          <li v-for="item in headset">
            <a href="">
              <img class="tobble_bottom_img" :src="item.img">
              <h4>{{ item.h4 }}</h4>
              <h6>
                <span v-if="false">{{ item.span }}</span>
                {{ item.h6 }}
              </h6>
              <p>
                <span>{{item.p}}</span>
                <b>{{item.p1}}</b>
              </p>
              <!--<div v-if="item.hot" class="hot">{{item.div}}</div>-->
            </a>
          </li>
        </ul>
      </div>
      <div v-if="tab=='storage' " class="toggle_bottom clearfloat">
        <!--图片-->
        <ul class="toggle_bottom_img lf clearfloat">
          <li v-for="item in storage">
            <a href="">
              <img class="tobble_bottom_img" :src="item.img">
              <h4>{{ item.h4 }}</h4>
              <h6>
                <span v-if="false">{{ item.span }}</span>
                {{ item.h6 }}
              </h6>
              <p>
                <span>{{item.p}}</span>
                <b>{{item.p1}}</b>
              </p>
              <!--<div class="hot">{{item.div}}</div>-->
            </a>
          </li>
        </ul>
      </div>
      <div v-if="tab=='parts' " class="toggle_bottom clearfloat">
        <!--图片-->
        <ul class="toggle_bottom_img lf clearfloat">
          <li v-for="item in parts">
            <a href="">
              <img class="tobble_bottom_img" :src="item.img">
              <h4>{{ item.h4 }}</h4>
              <h6>
                <span v-if="false">{{ item.span }}</span>
                {{ item.h6 }}
              </h6>
              <p>
                <span>{{item.p}}</span>
                <b>{{item.p1}}</b>
              </p>
              <!--<div class="hot">{{item.div}}</div>-->
            </a>
          </li>
        </ul>
      </div>
      <div v-if="tab=='keyset' " class="toggle_bottom clearfloat">
        <!--图片-->
        <ul class="toggle_bottom_img lf clearfloat">
          <li v-for="item in keyset">
            <a href="">
              <img class="tobble_bottom_img" :src="item.img">
              <h4>{{ item.h4 }}</h4>
              <h6>
                <span v-if="false">{{ item.span }}</span>
                {{ item.h6 }}
              </h6>
              <p>
                <span>{{item.p}}</span>
                <b>{{item.p1}}</b>
              </p>
              <!--<div class="hot">{{item.div}}</div>-->
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        myslider: [
          {
            title: '热品推荐 '
          }
        ],
        mysliderUl: [
          {
            img: '../static/list1_1.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699',
            div: '冠军',
            hot: true
          },
          {
            img: '../static/list1_2.jpg',
            h4: '魅蓝 E2',
            h6: '64版三色限量首发 ',
            span: ' 特惠',
            p: '¥1299',
//            p1: '¥2699'
            div: '亚军',
            hot: true

          },
          {
            img: '../static/list1_3.jpg',
            h4: '魅蓝 Note5',
            h6: '购机享12期免息 ',
            span: ' 特惠',
            p: '¥999起',
//            p1: '¥2699'
            div: '季军',
            hot: true
          },
          {
            img: '../static/list1_4.png',
            h4: '魅蓝 E',
            h6: '领取减100元 赠199元耳机 ',
            span: ' 限时',
            p: '¥1299起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/list1_4.png',
            h4: '魅蓝 E',
            h6: '领取减100元 赠199元耳机 ',
            span: ' 限时',
            p: '¥1299起',
//            p1: '¥2699'
//            div:'直降'
          },
        ],
        toggleOne: [
          {
            title: '手机 '
          }
        ],
        toggleOneUl: [
          {
            title: '热销机型'
          }
        ],
        toggleOneFirst: [
          {
            img: '../static/mall_con_img1.jpg'
          }
        ],
        toggleOneImg: [
          {
            img: '../static/list1_1.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699',
            div: '直降',
            hot: true
          },
          {
            img: '../static/list1_2.jpg',
            h4: '魅蓝 E2',
            h6: '64版三色限量首发 ',
            span: ' 特惠',
            p: '¥1299',
//            p1: '¥2699'
            div: '特惠',
            hot: true

          },
          {
            img: '../static/list1_3.jpg',
            h4: '魅蓝 Note5',
            h6: '购机享12期免息 ',
            span: ' 特惠',
            p: '¥999起',
//            p1: '¥2699'
            div: '新品',
            hot: true

          },
          {
            img: '../static/list1_4.png',
            h4: '魅蓝 E',
            h6: '领取减100元 赠199元耳机 ',
            span: ' 限时',
            p: '¥1299起',
//            p1: '¥2699'
            div: '直降',
            hot: true


          },
          {
            img: '../static/list1_5.png',
            h4: '魅蓝 5S',
            h6: '32G礼盒版赠送耳机 ',
            span: ' 限量',
            p: '¥799起',
//            p1: '¥2699'
//            div:'直降',
//            hot:true
          },
          {
            img: '../static/list1_6.jpg',
            h4: '魅族PRO 6 Plus',
            h6: '购64G赠防爆膜+软胶壳 ',
            span: ' 特惠',
            p: '¥2499起',
//            p1: '¥2699'
            div: '免息'
          },
          {
            img: '../static/list1_7.png',
            h4: '魅族PRO 6',
            h6: '最高600元 64G版标配耳机 ',
            span: ' 立减',
            p: '¥2499起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/list1_8.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/list1_9.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          }
        ],
        banner1: [
          {
            img: '../static/mall_banner1.jpg'
          }
        ],
//        二列表第一个
        commend: [
          {
            title: '数码配件',
          }
        ],
        commend1: [
          {
            img: '../static/mall_list2/list2_0.jpg'
          }
        ],
        commend2: [
          {
            img: '../static/mall_list2/list2_1.jpg',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699',
            div: '免息',
            hot: 'true',

          },
          {
            img: '../static/mall_list2/list2_2.jpg',
            h4: '魅蓝 E2',
            h6: '64版三色限量首发 ',
            span: '免息',
            p: '¥1299',
//            p1: '¥2699'
            div: '新品',
            red: 'true',
          },
          {
            img: '../static/mall_list2/list2_3.jpg',
            h4: '魅蓝 Note5',
            h6: '购机享12期免息 ',
            span: ' 特惠',
            p: '¥999起',
            hot: 'true',
//            p1: '¥2699'
            div: '领券'
          },
          {
            img: '../static/mall_list2/list2_4.jpg',
            h4: '魅蓝 E',
            h6: '领取减100元 赠199元耳机 ',
            span: ' 限时',
            p: '¥1299起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall_list2/list2_5.jpg',
            h4: '魅蓝 5S',
            h6: '32G礼盒版赠送耳机 ',
            span: ' 限量',
            p: '¥799起',
            red: 'true',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall_list2/list2_6.jpg',
            h4: '魅族PRO 6 Plus',
            h6: '购64G赠防爆膜+软胶壳 ',
            span: ' 特惠',
            p: '¥2499起',
//            p1: '¥2699'
            div: '免息'
          },
          {
            img: '../static/mall_list2/list2_7.jpg',
            h4: '魅族PRO 6',
            h6: '最高600元 64G版标配耳机 ',
            span: ' 立减',
            p: '¥2499起',
            hot: 'true',
//            p1: '¥2699'
            div: '立减'
          },
          {
            img: '../static/mall_list2/list2_8.jpg',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699',
            hot: 'true',
            div: '免息'
          },
          {
            img: '../static/mall_list2/list2_9.jpg',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 立减',
            p: '¥2499',
            p1: '¥2699',
            red: 'true',
//            div:'直降'
          }
        ],
        banner2: [
          {
            img: '../static/mall_list2/banner2.jpg'
          }
        ],
        tab: 'commend',
        //        二列表第二个
        headset: [
          {
            img: '../static/mall_list2/list21_0.jpg',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699',
            div: '直降',
            hot:true
          },
          {
            img: '../static/mall_list2/list21_1.jpg',
            h4: '魅蓝 E2',
            h6: '64版三色限量首发 ',
            span: ' 特惠',
            p: '¥1299',
//            p1: '¥2699'
            div: '新品',
            hot:false

          },
          {
            img: '../static/mall_list2/list21_2.jpg',
            h4: '魅蓝 Note5',
            h6: '购机享12期免息 ',
            span: ' 特惠',
            p: '¥999起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall_list2/list21_3.jpg',
            h4: '魅蓝 E',
            h6: '领取减100元 赠199元耳机 ',
            span: ' 限时',
            p: '¥1299起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall_list2/list21_4.jpg',
            h4: '魅蓝 5S',
            h6: '32G礼盒版赠送耳机 ',
            span: ' 限量',
            p: '¥799起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall_list2/list21_5.jpg',
            h4: '魅族PRO 6 Plus',
            h6: '购64G赠防爆膜+软胶壳 ',
            span: ' 特惠',
            p: '¥2499起',
//            p1: '¥2699'
            div: '免息',
            hot:true

          },
          {
            img: '../static/mall_list2/list21_6.jpg',

            h4: '魅族PRO 6',
            h6: '最高600元 64G版标配耳机 ',
            span: ' 立减',
            p: '¥2499起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall_list2/list21_7.jpg',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall_list2/list21_8.jpg',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall_list2/list21_9.jpg',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          }
        ],
        //        二列表第三个
        storage: [
          {
            img: '../static/mall/storage/1.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699',
            div: '直降'
          },
          {
            img: '../static/mall/storage/2.png',
            h4: '魅蓝 E2',
            h6: '64版三色限量首发 ',
            span: ' 特惠',
            p: '¥1299',
//            p1: '¥2699'
            div: '新品'
          },
          {
            img: '../static/mall/storage/3.png',
            h4: '魅蓝 Note5',
            h6: '购机享12期免息 ',
            span: ' 特惠',
            p: '¥999起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/storage/4.png',
            h4: '魅蓝 E',
            h6: '领取减100元 赠199元耳机 ',
            span: ' 限时',
            p: '¥1299起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/storage/5.png',
            h4: '魅蓝 5S',
            h6: '32G礼盒版赠送耳机 ',
            span: ' 限量',
            p: '¥799起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/storage/6.png',
            h4: '魅族PRO 6 Plus',
            h6: '购64G赠防爆膜+软胶壳 ',
            span: ' 特惠',
            p: '¥2499起',
//            p1: '¥2699'
            div: '免息'
          },
          {
            img: '../static/mall/storage/7.png',
            h4: '魅族PRO 6',
            h6: '最高600元 64G版标配耳机 ',
            span: ' 立减',
            p: '¥2499起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/storage/8.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/storage/9.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/storage/10.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          }
        ],
        //        二列表第四个
        parts: [
          {
            img: '../static/mall/parts/1.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699',
            div: '直降'
          },
          {
            img: '../static/mall/parts/2.png',
            h4: '魅蓝 E2',
            h6: '64版三色限量首发 ',
            span: ' 特惠',
            p: '¥1299',
//            p1: '¥2699'
            div: '新品'
          },
          {
            img: '../static/mall/parts/3.png',
            h4: '魅蓝 Note5',
            h6: '购机享12期免息 ',
            span: ' 特惠',
            p: '¥999起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/parts/4.png',
            h4: '魅蓝 E',
            h6: '领取减100元 赠199元耳机 ',
            span: ' 限时',
            p: '¥1299起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/parts/5.png',
            h4: '魅蓝 5S',
            h6: '32G礼盒版赠送耳机 ',
            span: ' 限量',
            p: '¥799起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/parts/6.png',
            h4: '魅族PRO 6 Plus',
            h6: '购64G赠防爆膜+软胶壳 ',
            span: ' 特惠',
            p: '¥2499起',
//            p1: '¥2699'
            div: '免息'
          },
          {
            img: '../static/mall/parts/7.png',
            h4: '魅族PRO 6',
            h6: '最高600元 64G版标配耳机 ',
            span: ' 立减',
            p: '¥2499起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/parts/8.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/parts/9.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/parts/10.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          }
        ],
        //        二列表第五个
        keyset: [
          {
            img: '../static/mall/keyset/1.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699',
            div: '直降'
          },
          {
            img: '../static/mall/keyset/2.png',
            h4: '魅蓝 E2',
            h6: '64版三色限量首发 ',
            span: ' 特惠',
            p: '¥1299',
//            p1: '¥2699'
            div: '新品'
          },
          {
            img: '../static/mall/keyset/3.png',
            h4: '魅蓝 Note5',
            h6: '购机享12期免息 ',
            span: ' 特惠',
            p: '¥999起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/keyset/4.png',
            h4: '魅蓝 E',
            h6: '领取减100元 赠199元耳机 ',
            span: ' 限时',
            p: '¥1299起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/keyset/5.png',
            h4: '魅蓝 5S',
            h6: '32G礼盒版赠送耳机 ',
            span: ' 限量',
            p: '¥799起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/keyset/6.png',
            h4: '魅族PRO 6 Plus',
            h6: '购64G赠防爆膜+软胶壳 ',
            span: ' 特惠',
            p: '¥2499起',
//            p1: '¥2699'
            div: '免息'
          },
          {
            img: '../static/mall/keyset/7.png',
            h4: '魅族PRO 6',
            h6: '最高600元 64G版标配耳机 ',
            span: ' 立减',
            p: '¥2499起',
//            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/keyset/8.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/keyset/9.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          },
          {
            img: '../static/mall/keyset/10.png',
            h4: '魅族PRO 6s',
            h6: '12期免息 赠EP2X耳机 ',
            span: ' 特惠',
            p: '¥2499',
            p1: '¥2699'
//            div:'直降'
          }
        ],
      }
    },
    methods: {
      show(index) {
        this.show(index)
      },
    },
  }
</script>
<style>
  .bg .toggle .toggle_nav .toggle_nav_ul .active {
    color: #00c3f5;
    border-bottom: 2px solid #00c3f5;
  }
</style>
<style scoped rel="stylesheet/scss" lang="scss">
  .style1 li:nth-child(2) > a .hot {
    background-color: #f59646;
  }
  .style1 li:nth-child(3) > a .hot {
    background-color: #00afbe;
  }
  .style2 li:nth-child(4) > a .hot {
    background-color: #00afbe;
  }
  .toggle_nav {
    padding-top: 40px;
    h2 {
      font-size: 24px;
      color: #333;
    }
    ul > li {
      float: left;
      margin-left: 30px;
      line-height: 20px;
      transition: color .2s linear;
      padding-bottom: 3px;
      border-bottom: 2px solid transparent;
      /*color: #00c3f5;*/
      /*border-bottom-color: #00c3f5;*/
    }
  }
  $width: 1240px;
  .bg {
    width: 100%;
    background: #F5F5F5;
    margin-top: 30px;
    padding-bottom: 40px;
    .toggle {
      width: $width;
      margin: 0 auto;
    }
    .toggle_bottom {
      width: $width;
      margin: 0 auto;
      .toggle_bottom_img {
        margin-top: 20px;
        margin-bottom: 30px;
        li {
          float: left;
          margin-right: 5px;
          margin-bottom: 5px;
          width: 244px;
          height: 338px;
          text-align: center;
          transition: all .3s linear 0s;
          background: #fff;
          position: relative;
          a {
            display: block;
            padding: 0 10px;
            img {
              display: block;
              width: 180px;
              height: 180px;
              margin: 36px auto 0;
            }
            h4 {
              font-size: 14px;
              color: #555757;
              margin-top: 40px;
            }
            h6 {
              color: #f14361;
              font-size: 12px;
              margin-top: 8px;
              margin-bottom: 9px;
              span {
                margin-right: 5px;
                padding: 0 5px;
                color: #fff;
                background-color: #f14361;
              }
            }
            p {
              font-size: 12px;
              span {
                padding-right: 2px;
                margin: 0 4px;
                font-size: 14px;
                color: #e02b41;
              }
              b {
                color: #b2b2b2;
                text-decoration: line-through;
              }
            }
          }
          &:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
            transform: translate(0, -3px);
            transition-duration: 0.3s;
          }
        }
        :nth-child(5) {
          margin-right: 0px;
        }
        :nth-child(10) {
          margin-right: 0px;
        }
      }
    }
  }
  .hot {
    background-color: #F0415F;
    position: absolute;
    top: 16px;
    right: 16px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
    line-height: 40px;
    text-align: center;
  }
</style>
