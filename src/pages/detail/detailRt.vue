<template>
  <div>
    <slot>

    </slot>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped rel="stylesheet/scss" lang="scss">
  #padding {
    padding-left: 50px;
  }

  .right {
    position: relative;
    float: left;
    width: 675px;
    font-size: 12px;
    padding-top: 10px;
    color: #666;
    .option_header {
      position: relative;
      padding-top: 20px;
      margin-bottom: 15px;
      > h1 {
        margin-bottom: 10px;
        font-size: 24px;
        line-height: 1.2;
        font-weight: 400;
        color: #000;
        text-align: left;
      }
      > p {
        color: #e22841;
        font-size: 16px;
        text-align: left;

      }
    }
    .option_sell {
      position: relative;
      margin-bottom: 26px;
      background: #f5f5f5;
      > dl {
        height: 55px;
        > dt {
          float: left;
          line-height: 60px;
          padding-left: 10px;
          width: 65px;
          font-size: 12px;
          text-align: left;

        }
        > dd {
          float: left;
          padding-top: 10px;
          .price {
            line-height: 36px;
            margin-right: 8px;
            color: #e02b41;
            font-weight: 400;
            font-size: 24px;
          }
        }
      }
    }
    .option_toggle {
      font-size: 12px;
      > dl {
        width: 570px;
        > dt {
          float: left;
          padding-left: 10px;
          width: 65px;
          font-size: 12px;
          line-height: 34px;
          text-align: left;
        }
        > dd {
          a {
            float: left;
            position: relative;
            min-width: 50px;
            padding: 0 8px;
            margin: 0 6px 10px 0;
            background-color: #fff;
            white-space: nowrap;
            line-height: 32px;
            border: 1px solid #dcdcdc;
            border-radius: 4px;
            color: #666;
            text-align: center;
            text-decoration: none;
          }
        }
      }
    }
    .option_set {
      display: inline-block;
      padding-bottom: 10px;
      > dl {
        width: 675px;
        margin-bottom: 6px;
        display: inline-block;
        > dt {
          float: left;
          padding-left: 10px;
          width: 65px;
          font-size: 12px;
          line-height: 40px;
          text-align: left;
        }
        > dd {
          > a {
            position: relative;
            height: 34px;
            padding-left: 13px;
            padding-right: 13px;
            padding-top: 4px;
            float: left;
            min-width: 50px;
            margin: 0 6px 10px 0;
            background-color: #fff;
            white-space: nowrap;
            line-height: 32px;
            border: 1px solid #dcdcdc;
            border-radius: 4px;
            color: #666;
            text-align: center;
            text-decoration: none;
            > img {
              width: 32px;
              height: 32px;
              position: absolute;
              top: 3px;
              left: 10px;
            }
            > span {
              > em {
                color: #999;
                margin-left: 5px;
              }
              > b {

              }
            }
          }
        }
      }
      :nth-child(2) dd a >i {
        display: block;
        padding-left: 36px;
      }
    }
    .option_service {
      color: #666;
      border-top: 1px solid #dcdcdc;
      padding: 15px 0;
      > dl {
        padding-top: 15px;
        display: inline-block;
        width: 675px;
        > dt {
          float: left;
          padding-left: 10px;
          width: 65px;
          font-size: 12px;
        }
        > dd {
          float: left;
          line-height: 16px;
          display: inline-block;
          padding-left: 5px;

          > span {
            position: relative;
            float: left;
            padding-left: 22px;
            margin-right: 20px;
            > i {
              position: absolute;
              left: 0;
              top: -3px;
              width: 16px;
              height: 16px;
              background: url(../../assets/images/detail_icon.png) no-repeat;
              background-position: 0 -100px;
            }
          }
        }
      }
    }
    .option_site {
      > dl {
        padding-left: 10px;
        > dt {
          line-height: 34px;
        }
        > dd {
          float: left;
          padding-left: 5px;

          .site {
            position: relative;
            .text {
              display: inline-block;
              padding: 0 10px;
              height: 32px;
              min-width: 110px;
              line-height: 32px;
              border-radius: 4px;
              border: 1px solid #dcdcdc;
            }
          }
        }
      }

    }
    .option_serve {
      padding-left: 10px;
      padding-top: 20px;
      padding-bottom: 23px;
      border-bottom: 1px solid #dcdcdc;
      >dl>dd{
        float: left;
        padding-left: 5px;
      }
    }
    .option_buy {
      padding-top: 26px;
      > dl {
        padding-left: 10px;
        > dt {
          line-height: 34px;
        }
        > dd {
          .more {
            float: left;
            position: relative;
            height: 40px;
            width: 80px;
            border-radius: 3px;
            input {
              position: absolute;
              top: 0;
              left: 0;
              width: 53px;
              height: 38px;
              padding: 0;
              line-height: 40px;
              font-size: 12px;
              text-align: center;
              color: #333;
              border: 1px solid #dcdcdc;
            }
            .min {
              position: absolute;
              top: 20px;
              right: 0px;
              width: 20px;
              height: 16px;
              line-height: 16px;
              font-size: 14px;
              text-decoration: none;
              text-align: center;
              border: 1px solid #dcdcdc;
              color: #666;
              cursor: pointer;
            }
            .max {
              position: absolute;
              top: 0px;
              left: 58px;
              right: 0;
              width: 20px;
              height: 16px;
              line-height: 16px;
              font-size: 14px;
              text-decoration: none;
              text-align: center;
              border: 1px solid #dcdcdc;
              color: #666;
              cursor: pointer;
            }
          }
          .buy {
            > a {
              margin: 0 30px;
              padding-top: 15px;
              display: inline-block;
              width: 128px;
              height: 25px;
              text-align: center;
              vertical-align: middle;
              border-radius: 3px;
              color: #fff;
              background-color: #2ac4f6;
              border-color: #12bdf5;
              &:hover {
                color: #fff;
                background-color: #0aaee3;
                border-color: #0894c1;
              }
            }
          }
          .house {
            line-height: 42px;
            a {
              vertical-align: middle;
              position: relative;
              padding-left: 26px;
              > i {
                position: absolute;
                top: -13px;
                left: 0px;
                font-size: 22px;
                color: #FCC800;
              }
            }

          }
        }
      }
    }
  }
</style>
