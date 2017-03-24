<template>
    <div class="sidebar">
        <!--<span v-text="myMessage"></span>-->
        <div class="user-info">
          <span></span>
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
    background-color: #eaeaea;
  }
  .sidebar-container{
    margin-top: 50px;
  }
  .sidebar ul{
    margin-left: 0;
  }
  .sidebar ul li{
    height: 40px;
    line-height: 40px;
    background-color: #fafafa;
    border-bottom: 1px solid #eaeaea;
    cursor: pointer;
    transition: background-color .3s linear;
  }
  .sidebar ul li:hover{
    background-color: #eee;
  }
  .user-info {
    background-color: #428bca;
    padding-top: 3px;
    padding-bottom: 2px;
  }
  .user-info span{
    display: inline-block;
    height: 60px;
    width: 60px;
    background-color: #eaeaea;
    border-radius: 100%;
  }
</style>
