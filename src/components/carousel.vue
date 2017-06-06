<template>
  <div class="block">
    <!--<span class="demonstration">默认 Hover 指示器触发</span>-->
    <el-carousel height="520px" arrow="always">
      <el-carousel-item>
        <div class="slide clearfloat" v-for="item in slide">
          <a href="">
            <img :src="item.img" alt="">
            <span><br>
            <span>{{ item.title1 }}</span><br>
            <span>{{ item.title2 }}</span><br>
            <em>{{ item.title3 }}</em>
          </span>
          </a>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="slide clearfloat" v-for="item in slide1">
          <a href="">
            <img :src="item.img" alt="">
            <span><br>
            <span>{{ item.title1 }}</span><br>
            <span>{{ item.title2 }}</span><br>
            <em>{{ item.title3 }}</em>
          </span>
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        slide: [
          {
            img: require('../assets/pic/1493041441302.jpg'),
            title1: '魅蓝 E2',
            title2: '6 期免息',
            title3: '¥ 1299起'
          },
          {
            img: require('../assets/pic/1493041441302.jpg'),
            title1: 'PRO 6 Plus',
            title2: '购机赠 EP2X 耳机 12 期免息',
            title3: '￥2999 起'
          },
          {
            img: require('../assets/pic/1493041441302.jpg'),
            title1: 'PRO 6s',
            title2: '直降 200 元 享 12 期免息',
            title3: '￥2299'
          },
          {
            img: require('../assets/pic/1493041441302.jpg'),
            title1: '魅蓝 Note5',
            title2: '16G 版限时特惠 100 元 6 期免息',
            title3: '￥899 起'
          },
        ],
        slide1: [
          {
            img: require('../assets/pic/1493041441302.jpg'),
            title1: 'MX 6',
            title2: '赠标准版移动电源 6 期免息',
            title3: '￥1599 起'
          },
          {
            img: require('../assets/pic/1493041441302.jpg'),
            title1: '魅蓝 5s',
            title2: '购 32G 版领券立减 10 元',
            title3: '￥799 起'
          },
          {
            img: require('../assets/pic/1493041441302.jpg'),
            title1: '魅蓝 X',
            title2: '赠 EP-31 耳机 3 期免息',
            title3: '￥1699 起'
          },
          {
            img: require('../assets/pic/1493041441302.jpg'),
            title1: 'PRO 6',
            title2: '最高立减 600 元 64G 版标配耳机v',
            title3: '￥2299 起'
          },
        ],

      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .el-carousel .el-carousel__container {
    .el-carousel__arrow {
      border: none;
      padding: 0;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(0, 0, 0, .2);
      color: #fff;
      position: absolute;
      top: 40%;
      z-index: 10;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      text-align: center;
      font-size: 20px;
      &:hover {
        background: rgba(0, 0, 0, .5);

      }
    }
  }
</style>
<style scoped rel="stylesheet/scss" lang="scss">
  .slide {
    display: inline-block;
    margin: 0 auto;
    margin-right: 100px;
    a {
      display: inline-block;
      width: 234px;
      text-align: center;
      > span {
        span {
          display: inline-block;
          padding: 5px 0;
        }
      }
      em {
        color: #f0415f;
      }
    }
  }
  :last-child {
    margin-right: 0px;
  }
  .block {
    width: 1240px;
    /*height: 520px;*/
    margin: 0 auto;
  }

  /*.el-carousel__item h3 {*/
    /*color: #475669;*/
    /*font-size: 14px;*/
    /*opacity: 0.75;*/
    /*line-height: 150px;*/
    /*margin: 0;*/
  /*}*/
</style>
