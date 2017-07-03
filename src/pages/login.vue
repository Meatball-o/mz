<template>
  <div class="login">
    <div class="header">
      <a :href="index"><img src="../assets/images/logolan.png" alt=""></a>
    </div>
    <div class="con">
      <div class="login_con">
        <div class="top clearfloat">
          <a href="">账号登录</a>
          <a href="">短信登录</a>
        </div>
        <br><br>
        <div class="contain">
          <input v-model="usernameModel" type="text" placeholder="手机号/魅族账号">
        </div>
        <span class="error">{{ userErrors.errorText }}</span>
        <div class="contain">
          <input v-model="passwordModel" type="password" placeholder="密码">
        </div>
        <span class="error">{{ passwordErrors.errorText }}</span>
        <button @click="onLogin">登录</button>
        <p>{{ errorText}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        index: 'http://localhost:8080',
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      }
    },
    computed: {
      userErrors() {
        let errorText, status
        if (!/^[a-zA-z]/g.test(this.usernameModel)) {
          status = false
          errorText = '以字母开头'
        }
        else {
          status = true
          errorText = ''
        }
        if(!this.userFlag){
          errorText=''
          this.userFlag=true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors () {
        let errorText, status
        if (!/^\w{1,6}$/g.test(this.passwordModel)) {
          status = false
          errorText = '密码不是1-6位'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin() {
          if(!this.userErrors.status || !this.passwordErrors.status){
              this.errorText='部分选项未通过'
          }else{
            this.errorText=''
            this.$http.get('api/login')
              .then( (res)=>{
                  this.$emit('has-log',res.data)
                  this.$router.replace('/')
              },(error)=>{
                  console.log(error)
              })
          }
      },

    }
  }
</script>
<style scoped rel="stylesheet/scss" lang="scss">
  .error{
    display: block;
    padding-left: 10px;
    margin-top: 15px;
  }
  .login {
    width: 100%;
    background-color: #F8FCFF;
    .header {
      width: 100%;
      height: 68px;
      line-height: 68px;
      background-color: #fff;
      img {
        margin-left: 14%;
      }
    }
    .con {
      width: 1240px;
      min-height: 750px;
      margin: 0 auto;
      background: url("../assets/images/login_banner.png") no-repeat center;
      position: relative;
      .login_con {
        width: 298px;
        position: absolute;
        top: 160px;
        right: 180px;
        background-color: #FFF;
        padding: 35px 35px 10px;
        border-radius: 2px;
        .top {
          > a {
            float: left;
            font-size: 18px;
            margin-top: 35px;
            width: 148px;
            text-align: center;
          }
          :first-child {
            border-right: 2px solid #B3ABAB;
          }
        }
        .contain {
          margin-top: 24px;
          > input {
            vertical-align: middle;
            font-size: 14px;
            width: 90%;
            height: 42px;
            line-height: 22px;
            padding: 0 10px;
          }
        }
        > button {
          margin-top: 30px;
          width: 295px;
          display: block;
          height: 46px;
          font-size: 14px;
          line-height: 46px;
          text-align: center;
          margin-bottom: 10px;
          outline: none;
          cursor: pointer;
          background-color: #32a5e7;
          color: #fff;
          border-radius: 2px;
        }
      }
    }
  }
</style>
