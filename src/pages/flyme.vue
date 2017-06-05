<template>
  <div class="flyme">
    <slide-showB :slides="slides" :inv="slideSpeed"></slide-showB>
    <ul class="main clearfloat">
      <li><a title="Flyme 博客" href=""><img src="../assets/images/flyme.jpg" alt=""></a></li>
      <li><a title="云服务" href=""><img src="../assets/images/flyme.jpg" alt=""></a></li>
      <li><a title="开放平台" href=""><img src="../assets/images/flyme.jpg" alt=""></a></li>
      <li><a title="应用商店" href=""><img src="../assets/images/flyme.jpg" alt=""></a></li>
      <li style="margin-right: 0"><a title="查找手机" href=""><img src="../assets/images/flyme.jpg" alt=""></a></li>
    </ul>
  </div>
</template>

<script>
  //  魅族商城的轮播
  import slideShowB from '../components/slideShowb.vue'

  export default{
    components: {
      slideShowB,
    },
    data(){
      return {
        slideSpeed: 3000,
        slides: [
          {
            src: require('../assets/banner/flyme_banner1.jpg'),
          },
          {
            src: require('../assets/banner/flyme_banner2.jpg'),
          },
          {
            src: require('../assets/banner/flyme_banner3.jpg'),
          }
        ],
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .flyme {
    width: 100%;
    margin: 0 auto;
    .main {
      width: 1240px;
      margin: 0 auto;
      padding: 29px 0;
      li {
        float: left;
        display: inline-block;
        width: 232px;
        height: 210px;
        margin-right: 20px;
        vertical-align: middle;
        a {
          display: block;
          width: 100%;
          height: 100%;
          color: #000;
        }
      }
    }
  }
</style>
