<template>
  <div class="hello login-container">
       <div class="login-box ">
            <div class="login-title">
                <h4>{{msg}} </h4>
            </div>
            <div class="login-box-container">
              <form class="form-horizontal clearfix" >
                    <div class="form-group">
                      <label for="" class="col-xs-3">用户名称：</label>
                      <div class="col-xs-9">
                            <input type="text" class="form-control" id="" placeholder="name">
                      </div>
                      
                    </div>
                    <div class="form-group">
                      <label for="" class="col-xs-3">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
                      <div class="col-xs-9">
                            <input type="password" class="form-control" id="" placeholder="password">
                      </div>
                    </div>
                    <div class="form-group">
                        <div class="col-xs-9 col-xs-offset-3 text-left">
                            <span  class="btn btn-primary login" @click="submitRuleForm">提交</span>
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
<style scoped>
      .login-container{
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #eaeaea;
      }
     .login-box{
         width:500px;
         height: 300px;
         margin: 100px auto auto auto;
         background-color: #fff;
     }
     .login-box input{
       height: 40px;
       background-color: #fff;
       border-radius: 2px;
     }
     .login-title{
        height: 40px;
        background-color: #00acac;
        margin-bottom: 30px;
     }
     .login-title h4{
       padding-left: 30px;
       text-align: left;
       padding-top: 10px;
       color: #fff;
     }
     .login-box-container{
       padding: 20px;
     }
      .login{
        background-color: #00acac;
        border-color: #00acac;
        width: 100px;
        height: 40px;
        line-height: 25px;
        border-radius: 2px;
        transition: background-color .2s linear;
      }
      .login:hover{
       background-color: #008a8a;
      }
      .from-group label{
       font-size: 16px;
       font-weight: normal;
       color: #999;
      }
      input:-webkit-autofill, 
      textarea:-webkit-autofill, 
      select:-webkit-autofill {
          background-color: rgb(2555, 255, 255);
          background-image: none;
          color: rgb(0, 0, 0);
      }
</style>
