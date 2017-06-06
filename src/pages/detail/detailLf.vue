<template>
  <div class="detail">
    <div class="left lf">
      <div>
        <div v-if="detail=='one' " class="left_top">
          <a href=""><img src="../../assets/detail/mx6/rtbig11.jpg" alt=""></a>
        </div>
        <div v-if="detail=='two' " class="left_top">
          <a href=""><img src="../../assets/detail/mx6/rtbig22.jpg" alt=""></a>
        </div>
        <div v-if="detail=='three' " class="left_top">
          <a href=""><img src="../../assets/detail/mx6/rtbig33.jpg" alt=""></a>
        </div>
        <div v-if="detail=='four' " class="left_top">
          <a href=""><img src="../../assets/detail/mx6/rtbig44.jpg" alt=""></a>
        </div>
        <ul class="left_bottom ">
          <li @mouseover="detail='one'" :class="{'class1':detail=='one'}"><a href="">
            <img src="../../assets/detail/mx6/lfsmall11.jpg" alt="">
          </a></li>
          <li @mouseover="detail='two'" :class="{'class1':detail=='two'}"><a href="">
            <img src="../../assets/detail/mx6/lfsmall22.jpg" alt="">
          </a></li>
          <li @mouseover="detail='three'" :class="{'class1':detail=='three'}"><a href="">
            <img src="../../assets/detail/mx6/lfsmall33.jpg" alt="">
          </a></li>
          <li @mouseover="detail='four'" :class="{'class1':detail=='four'}"><a href="">
            <img src="../../assets/detail/mx6/lfsmall44.jpg" alt="">
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        detail: 'one',
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
  .left .left_bottom .class1 {
    border: 1px solid #dcdcdc;;
  }
</style>
<style scoped rel="stylesheet/scss" lang="scss">

  .detail {
    width: 1240px;
    margin-left: auto;
    margin-right: auto;
    .left {
      width: 495px;
      .left_top {
        margin: 25px 50px;
        width: 395px;
        height: 395px;
        > a {
          img {
            width: 375px;
            height: 375px;
          }
        }
      }
      .right {
        position: relative;
        width: 675px;
        font-size: 12px;
        padding-top: 10px;
      }
    }
  }

  .left_bottom {
    overflow: hidden;
    text-align: center;
    margin-top: 10px;
    li {
      display: inline-block;
      border: 1px solid transparent;
      margin: 0 5px;
      a {
        display: block;
        padding: 5px;
        position: relative;
        overflow: hidden;
        text-align: center;
        img {
          position: relative;
          max-width: 75px;
          max-height: 75px;
          width: 75px;
          height: 75px;
        }
      }
    }
  }
</style>
