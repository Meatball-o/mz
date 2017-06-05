<template>
  <div class="detail_con">
    <div class="nav">
      <ul class="clearfloat">
        <li><a href="">商品详情</a></li>
        <li><a href="">规格参数</a></li>
        <li><a href="">常见问题</a></li>
      </ul>
    </div>
    <div v-for="item in mx6" class="con">
      <img :src="item.img" alt="">
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        mx6:[
          {
            img: require('../../assets/detail/mx6/mx6_1.jpg'),
          },
          {
            img: require('../../assets/detail/mx6/mx6_2.jpg'),
          },
          {
            img: require('../../assets/detail/mx6/mx6_3.jpg'),
          },
          {
            img: require('../../assets/detail/mx6/mx6_4.jpg'),
          },
          {
            img: require('../../assets/detail/mx6/mx6_5.jpg'),
          },
          {
            img: require('../../assets/detail/mx6/mx6_6.jpg'),
          },
          {
            img: require('../../assets/detail/mx6/mx6_7.jpg'),
          },
          {
            img: require('../../assets/detail/mx6/mx6_8.jpg'),
          },
          {
            img: require('../../assets/detail/mx6/mx6_9.jpg'),
          },
          {
            img: require('../../assets/detail/mx6/mx6_10.jpg'),
          },
          {
            img: require('../../assets/detail/mx6/mx6_11.jpg'),
          },
          {
            img: require('../../assets/detail/mx6/mx6_1.jpg'),
          },
        ]
      }
    },
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
.detail_con{
  width: 1240px;
  margin: 0 auto;
  .nav{
    margin-top: 60px;
    height: 62px;
    >ul{
      border-bottom: 1px solid #dcdcdc;
      >li{
        margin-right: 35px;
        float: left;
        >a{
          display: block;
          padding: 0 20px;
          line-height: 59px;
          font-size: 16px;
          color: #333;
          text-decoration: none;
          transition: color .3s;
          &:hover{
            color: #00c3f5;
          }
        }
      }
    }
  }
  .con{
    img{
      width: 1240px;
    }
  }
}
</style>
