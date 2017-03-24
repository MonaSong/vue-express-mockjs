<template>
    <div class="sidebar">
        <!--<span v-text="myMessage"></span>-->
        <div class="user-info">
          <span><img src="../../../static/images/woman-user.png" alt=""></span>
        </div>
        <div class="sidebar-container">
          <ul>
            <li><span><router-link to="/readme">前言</router-link></span></li>
            <li><span><router-link to="/readme/about">关于</router-link></span></li>
            <li><span><router-link to="/readme/account">账户</router-link></span></li>
            <li><router-link to="/readme/animate">动画</router-link></li>
            <li><a href="javascript:void(0)">菜单5</a></li>
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
    props: ['myMessage']
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
  .sidebar ul li{
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    transition: background-color .3s linear;
  }
  .sidebar ul li:hover{
    background-color: #000;
  }
  .user-info {
    height: 150px;
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
