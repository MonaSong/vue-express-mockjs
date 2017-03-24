<template>
  <div class= "container-box">
    <div class="about">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h4 class="panel-title">个人账户</h4>
        </div>
        <div class="panel-body">
          <span v-text="msg" v-on:click="tips"></span>
          <div>
            <p v-for="item in list" >
              <span>{{item.name}}</span>
              <span>{{item.age}}</span>
              <span>{{item.sex}}</span>
            </p>
          </div>
          <input type="number" v-model.number="age">
          <span @click="getUserInfo" class="clk">点击得到用户信息</span>
          <div>
            <p @click="getUsers">这里是用户信息</p>
            <p v-for="user in users">
              <span>用 户 id：{{user.uid}}</span>
              <span>用户姓名：{{user.name}}</span>
              <span>用户邮箱：{{user.email}}</span>
            </p>
          </div>
        </div>
        <div class="panel-footer"><span v-if="seen">如果为true你可以看到我</span>面板脚部位</div>
      </div>
    </div>
  </div>
    
</template>

<script>
  export default {
    data () {
      return {
        msg: '这里是个人账户信息',
        seen: false,
        toggle: 'a',
        age: '你好',
        list: [
          { name: 'lucy',
            age: '23',
            sex: '女'
          },
          { name: '张三',
            age: '30',
            sex: '男'
          },
          { name: 'lily',
            age: '25',
            sex: '女'
          }
        ],
        user: null,
        users: null
      }
    },
    created: function () {
      let seft = this
      this.getUsers(function (data) {
        seft.users = data
      })
    },
    methods: {
      tips () {
        let self = this
        self.msg = '你点了我一下'
        setTimeout(function () {
          self.msg = '这里是个人账户信息'
        }, 1000)
      },
      getUserInfo () {
        //  let contextPath = 'http://localhost:8090'
        this.$ajax({
          method: 'get',
          url: '/api/user',
          params: {
            uid: 233
          }
        }).then(function (res) {
          console.info(res)
        }).catch(function (err) {
          console.info(err)
        })
      },
      getUsers (callback) {
        let curUsers = null
        this.$ajax({
          method: 'get',
          url: '/api/test-demo'
        }).then(function (res) {
          curUsers = res.data.result
          callback(curUsers)
        }).catch(function (err) {
          console.info(err)
        })
      }

    }
  }
</script>

<style scoped>
  .clk{
    color: #f30026;
  }
</style>
