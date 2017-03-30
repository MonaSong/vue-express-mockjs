<template>
  <div class="hello login-container">
       <div class="login-box ">
            <div class="login-title">
                <h4>{{msg}} </h4>
            </div>
            <div class="login-box-container">
              <form class="form-horizontal clearfix" >
                    <div class="form-group">
                      <div class="col-xs-12">
                            <input type="text" class="form-control" id="" placeholder="用户名">
                      </div>
                      
                    </div>
                    <div class="form-group">
                      <div class="col-xs-12">
                            <input type="password" class="form-control" id="" placeholder="密码">
                      </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-12 text-left">
                            <span  class="btn btn-primary login" @click="submitRuleForm">登录</span>
                        </div>
                    </div>                  
              </form>
            </div>
       </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '欢迎登陆'
    }
  },
  methods: {
    submitRuleForm () {
      const self = this
      localStorage['u_name'] = 'mona'
      self.$router.push('/readme')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
      @white:#fff;
      @green-blue:#00acac;
      @green-blue-hover:#008a8a;
      @bg-color:#eaeaea;
      @light-dark: #999;

      .login-container{
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('../../static/images/login-bg.jpg');
        background-size: cover;
        background-color: @bg-color;
      }
      .login-box{
         width:500px;
         height: 300px;
         margin: 200px auto auto auto;
         background-color: rgba(255,255,255,.4);
         input{
          height: 40px;
          background-color: @white;
          border-radius: 2px;
        }
      }

      .login-title{
        height: 40px;
        background-color: @green-blue;
        margin-bottom: 30px;
        h4{
          padding-left: 30px;
          text-align: left;
          padding-top: 10px;
          color: @white;
        }
      }
      
      .login-box-container input,
      .login-box-container .login{
        display: block;
      }
      .login-box-container{
       padding: 20px 60px 20px 60px;
      }
      .login{
        background-color: @green-blue;
        border-color: @green-blue;
        height: 40px;
        line-height: 25px;
        border-radius: 2px;
        transition: background-color .2s linear;
        &:hover{
          background-color: @green-blue-hover;
        }
      }

      .from-group label{
       font-size: 16px;
       font-weight: normal;
       color: @light-dark;
      }
      input:-webkit-autofill, 
      textarea:-webkit-autofill, 
      select:-webkit-autofill {
          background-color: rgb(2555, 255, 255);
          background-image: none;
          color: rgb(0, 0, 0);
      }
</style>
