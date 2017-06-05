<template>
  <div>
    <div class="detail">
      <section class="section">
        <a href="">首页 &gt; &nbsp;&nbsp;</a>魅蓝 E2
      </section>
      <div class="row clearfloat">
        <detail-lf></detail-lf>
        <detail-rt slot="detailRt" class="right rt">
          <div class="right">
            <div v-for="item in optionHeader" class="option_header">
              <h1>{{ item.title }} </h1>
              <p>{{ item.write }}</p>
            </div>
            <div class="option_sell">
              <dl v-for="item in optionSell" class="clearfloat">
                <dt>{{ item.title }}</dt>
                <dd class="">
                  <div class="price">
                    <em>{{ item.em }}</em>
                    <span>{{ item.span }}</span>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="option_toggle">
              <dl v-for="item in optionToggle" class="clerfloat">
                <dt>{{ item.title }}</dt>
                <dd class="clerfloat">
                  <a class="mx" href="">{{ item.mx }}</a>
                  <a class="pro" href="">{{ item.pro}}</a>
                </dd>
              </dl>
            </div>
            <div class="option_set">
              <dl v-for="item in set1" class="cleearfloat">
                <dt>{{ item.title}}</dt>
                <dd><a href="">
                  <span>{{ item.span}}</span>
                </a></dd>
              </dl>
              <dl v-for="item in set2" class="cleearfloat">
                <dt>{{ item.title }}</dt>
                <dd @click="color1"><a id="padding" href=""><img src="../assets/images/color.png"
                                                                           alt="">{{item.color1}}</a></dd>
                <dd ><a id="padding" href=""><img src="../assets/images/color.png"
                                                                           alt="">{{item.color2}}</a></dd>
                <dd ><a id="padding" href=""><img src="../assets/images/color.png"
                                                                           alt="">{{item.color3}}</a></dd>
                <dd ><a id="padding" href=""><img src="../assets/images/color.png"
                                                                           alt="">{{item.color4}}</a></dd>
              </dl>
              <dl v-for="item in set3" class="cleearfloat">
                <dt>{{item.title}}</dt>
                <dd><a href="">
                  <span>{{item.span1}}</span>
                </a></dd>
                <dd><a href="">
                  <span>{{item.span2}}</span>
                </a></dd>
              </dl>
              <dl v-for="item in set4" class="cleearfloat">
                <dt>{{ item.title }}</dt>
                <dd><a href="">
                  <span> {{item.span1}}<em>{{item.em}}</em></span>
                </a></dd>
                <dd><a href="">
                  <span>{{item.span2}}<b>{{item.b}}</b></span>
                </a></dd>
              </dl>
            </div>
            <div class="option_service">
              <dl class="clearfloat">
                <dt>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 持：</dt>
                <dd>
                  <span>&nbsp;<i></i>花呗分期</span>
                  <span><i></i>百城速达</span>
                  <span><i></i>顺丰包邮</span>
                  <span><i></i>7天无理由退款</span>
                </dd>
              </dl>
            </div>
            <div class="option_site">
              <dl class="clearfloat">
                <dt class="lf">配送&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至：</dt>
                <dd>
                  <div class="site">
                    <div class="text">延安市 富县【请选择】</div>
                    <div class="select"></div>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="option_serve">
              <dl class="clearfloat">
                <dt class="lf">服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务：</dt>
                <dd>本商品由 魅族 负责发货并提供售后服务</dd>
              </dl>
            </div>
            <div class="option_buy">
              <dl class="clearfloat">
                <dt class="lf">数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</dt>
                <dd class="clearfloat">
                  <div class="more">
                    <input type="text" v-model="number" @keyup="fixNumber">
                    <div @click="minus" class="min" >-</div>
                    <div @click="add" class="max" >+</div>
                  </div>
                  <div class="buy lf">
                    <a href="">立即购买</a>
                  </div>
                  <div class="house lf">
                    <a href="">
                      <i class="iconfont icon-pingfenwujiaoxing"></i>收藏
                    </a>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </detail-rt>
      </div>
      <detail-con></detail-con>
    </div>
  </div>
</template>

<script>
  import detailLf from './detail/detailLf.vue'
  import detailRt from './detail/detailRt.vue'
  import detailCon from './detail/detailCon.vue'

  export default{
    components: {
      detailLf,
      detailRt,
      detailCon
    },
    props: {
      max: {
        type: Number,
        default: 5
      },
      min: {
        type: Number,
        default: 1
      },
      color1: {

      },
    },
    data(){
      return {
        optionHeader: [
          {
            title: '魅族 MX6',
            write: '稀缺颜色开售 顺丰包邮 19点前付款当天发货',
          }
        ],
        optionSell: [
          {
            title: '价格：',
            em: '¥',
            span: '1599.00'
          }
        ],
        optionToggle: [
          {
            title: '型号：',
            mx: 'MX6',
            pro: 'PRO 6 Plus',
          },
        ],
        set1: [
          {
            title: '网络类型：',
            span: '全网公开版',
          }
        ],
        set2: [
          {
            title: '颜色分类：',
            color1: '玫瑰金',
            color2: '香槟金',
            color3: '月光银',
            color4: '星空灰',
          }
        ],
        set3: [
          {
            title: '内存容量：',
            span1: '3GB+32GB',
            span2: '4GB+32GB',
          }
        ],
        set4: [
          {
            title: '套餐：',
            span1: '官方标配',
            em: '无优惠',
            span2: '电信优惠购机 ',
            b: '0元'
          }
        ],
        tab: '',
        number: this.min
      }
    },
    watch: {
      number () {
        this.$emit('on-change', this.number)
      }
    },
    methods: {
      fixNumber () {
        let fix
        if (typeof this.number === 'string') {
          fix = Number(this.number.replace( /[^0-9]/ig, ''))
        }
        else {
          fix = this.number
        }
        if (fix > this.max || fix < this.min) {
          fix = this.min
        }
        this.number = fix
      },
      minus () {
        if (this.number <= this.min) {
          return
        }
        this.number --
      },
      add () {
        if (this.number >= this.max) {
          return
        }
        this.number ++
      }
    }
  }
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .detail {
    width: 1240px;
    margin: 0 auto;
    .section {
      width: 1240px;
      height: 40px;
      line-height: 40px;
      text-align: left;
      > a {
        color: #999;
      }
    }
  }
</style>
