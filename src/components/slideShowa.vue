<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <!--<h2>{{slides[nowIndex].title}}</h2>-->
    <ul class="slide-pages">
      <!--<li @click="goto(prevIndex)">&lt;</li>-->
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{on: index === nowIndex}">{{index + 1}}</a>
      </li>
      <!--<li @click="goto(nextIndex)">&gt;</li>-->
    </ul>

  </div>
</template>
<script>
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
//        default: 1200
      }
    },
    data () {
      return {
        nowIndex: 0,
        isShow: true
      }
    },
//    轮播点击向左向右切换  计算属性
    computed: {
      prevIndex(){
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        }
        else {
          return this.nowIndex - 1
        }
      },
      nextIndex(){
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        }
        else {
          return this.nowIndex + 1
        }
      },
    },
//    轮播点击1234会切换
    methods: {
      goto (index) {
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
          this.nowIndex = index
        }, 10)
      },
//      自动切换
      runInv(){
        this.invId = setInterval(() => {
//          console.log(123)
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv(){
        clearInterval(this.invId)
      }
    },
    mounted(){
      this.runInv()
    }
  }
</script>
<style scoped rel="stylesheet/scss" lang="scss">
  .slide-trans-enter-active {
    transition: opacity .4s
  }
  .slide-trans-old-leave-active {
    transition: all 2.0s;
    opacity: 0
  }
  .slide-show {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 480px;
    overflow: hidden;
  }
  .slide-show h2 {
    position: absolute;
    width: 100%;
    color: #fff;
    bottom: 0;
    height: 30px;
    text-align: left;
    padding-left: 15px;
  }

  .slide-img {
    width: 100%;
    img {
      margin: 0 auto;
      width: 100%;
      height: 680px;
      position: absolute;
      top: 0;
      left:0;

    }
  }

  .slide-pages {
    position: absolute;
    width: 100%;
    color: #fff;
    bottom: 0;
    text-align: center;
    margin-bottom: 10px;
    .left{
     color: #fff;
      width: 20px;
      height: 20px;
      border-radius: 0px;
    }
    li {
      display: inline-block;
      margin: 0 10px;
      cursor: pointer;
      color: transparent;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #fff;
      background: #fff;
      .on {
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #00C3F5;
        margin-top: -1px;
        margin-left: -1px;
      }
    }

  }
</style>

