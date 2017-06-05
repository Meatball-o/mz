<template>
  <div class="store_con">
    <div class="banner">
      <div class="pic">
        <img src="../assets/banner/store_banner.jpg" alt="">
      </div>
    </div>
    <div class="main">
      <ul class="nav clearfloat">
        <li><a href="">专卖店</a></li>
        <li><a href="">优秀专卖店</a></li>
        <li><a href="">形象销售店</a></li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default{
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
.store_con{
  margin-top: 80px;
  .banner{
    width: 100%;
    background: #f7f7f7;
    .pic{
      width: 1240px;
      margin: 0 auto;
    }
  }
  .main{
    width: 1240px;
    margin: 0 auto;
    .nav{
      border-bottom: #e4e4e4 2px solid;
      padding: 70px 0 5px;
      li{
        float: left;
        margin-right: 70px;
        a{
          border-color: #00c3f5;
          color: #666;
          font-size: 22px;
          padding-bottom: 8px;

        }
      }
    }
  }
}
</style>
