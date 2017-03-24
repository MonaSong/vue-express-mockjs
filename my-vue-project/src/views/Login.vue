<template>
  <div class="hello login-container">
       <div class="login-box ">
            <div class="login-title">
                <h4>{{msg}} </h4>
            </div>
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
                  <span  class="btn btn-primary" @click="submitRuleForm">提交</span>
            </form>
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
        background-color: #428bca;
      }
     .login-box{
         width:500px;
         height: 300px;
         padding:15px;
         margin: 100px auto auto auto;
         background-color: rgba(255,245,235,.6);
         border-radius: 5px;
     }

</style>
