<template>
  <div class="container-box">
    <div class="about">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h4 class="panel-title text-left">个人账户</h4>
        </div>
        <div class="panel-body">
          <div>
            <h4 v-text="msg"
                v-on:click="tips"
                class="text-left"></h4>
            <table class="table">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>年龄</th>
                  <th>性别</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in list">
                  <td align="left">{{item.name}}</td>
                  <td align="left">{{item.age}}</td>
                  <td align="left">{{item.sex}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h4 class="text-left">这里的数据是从mock服务器上面拿到的动态数据</h4>
            <table class="table">
              <thead>
                <tr>
                  <th>用户id</th>
                  <th>用户姓名</th>
                  <th>用户邮箱</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users">
                  <td align="left">{{user.uid}}</td>
                  <td align="left">{{user.name}}</td>
                  <td align="left">{{user.email}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '固定数据',
      toggle: 'a',
      age: '你好',
      list: [
        {
          name: 'lucy',
          age: '23',
          sex: '女'
        },
        {
          name: '张三',
          age: '30',
          sex: '男'
        },
        {
          name: 'lily',
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
    tips() {
      let self = this
      self.msg = '你点了我一下'
      setTimeout(function () {
        self.msg = '这里是个人账户信息'
      }, 1000)
    },
    getUserInfo() {
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
    getUsers(callback) {
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
.clk {
  color: #f30026;
}
</style>
