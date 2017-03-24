<template>
    <div class="sidebar">
        <!--<span v-text="myMessage"></span>-->
        <div class="user-info">
          <span><img src="../../../static/images/woman-user.png" alt=""></span>
        </div>
        <div class="sidebar-container">
          <ul>
            <li :class="{active:(onRoutes === 'readme')}"><span><router-link to="/readme">前言</router-link></span></li>
            <li :class="{active:(onRoutes === 'about')}"><span><router-link to="/readme/about">关于</router-link></span></li>
            <li :class="{active:(onRoutes === 'account')}"><span><router-link to="/readme/account">账户</router-link></span></li>
            <li :class="{active:(onRoutes === 'animate')}"><router-link to="/readme/animate">动画</router-link></li>
          </ul>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'sidebar'
      }
    },
    props: ['myMessage'],
    computed: {
      onRoutes () {
        let curRoute = this.$route.path
        let firstOne = curRoute.indexOf('/')
        let lastOne = curRoute.lastIndexOf('/')
        let curPath = ''
        if (firstOne === lastOne && firstOne !== -1) {
          curPath = curRoute.replace('/', '')
        } else {
          curPath = curRoute.substring(lastOne + 1, curRoute.length)
        }
        return curPath
      }
    }
  }
</script>

<style scoped>
  .sidebar{
    position: fixed;
    left: 0;
    top: 0;
    width: 220px;
    min-height: 100%;
    background-color: #2d353c;
  }
  .sidebar-container{
    margin-top: 50px;
  }
  .sidebar ul{
    margin-left: 0;
  }
  .sidebar ul li a{
    color: #fff;
  }
  .sidebar ul li a:focus{
    text-decoration: none;
  }
  .sidebar ul li{
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    transition: background-color .3s linear;
  }
  .sidebar ul li:hover{
    background-color: #000;
  }
  .sidebar ul li.active{
    background-color: #000;
  }
  .user-info {
    height: 150px;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(255,255,255,.2)
  }
  .user-info span{
    display: inline-block;
    height: 60px;
    width: 60px;
    border-radius: 100%;
  }
  .user-info span img{
    width: 60px;
    height: 60px;
  }
</style>
