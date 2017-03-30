<template>
    <div class="sidebar">
        <!--<span v-text="myMessage"></span>-->
        <div class="user-info">
          <span><img src="../../../static/images/woman-user.png" alt=""></span>
        </div>
        <div class="sidebar-container">
          <ul>
            <li :class="{active:(onRoutes === 'readme')}"><span><router-link to="/readme">前言</router-link></span></li>
            <li :class="{active:(onRoutes === 'about')}"><span><router-link to="/readme/about">前端技术清单</router-link></span></li>
            <li :class="{active:(onRoutes === 'account')}"><span><router-link to="/readme/account">mock服务</router-link></span></li>
            <li :class="{active:(onRoutes === 'animate')}"><router-link to="/readme/animate">组件</router-link></li>
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

<style lang="less" scoped>
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
    li{
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      transition: background-color .3s linear;
      &:hover{
        background-color: #000;
      }
      &.active{
        background-color: #000;
      }
      a{
        color: #fff;
        &:focus{
          text-decoration: none;
        }
      }
      
    }
  }
 
  .user-info {
    height: 150px;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(255,255,255,.2);
    span{
      display: inline-block;
      height: 60px;
      width: 60px;
      border-radius: 100%;
      img{
        width: 60px;
        height: 60px;
      }
    }
  }

</style>
