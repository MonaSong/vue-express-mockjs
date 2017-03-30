<template>
    <div class="head">
      <div class="head-container">
        <div class="pull-left head-left">
          <h3>{{systemname}}</h3>
        </div>
        <div class="pull-right head-right">
          <!--<span v-text="myMessage"></span>-->
          <div>
            <div class="drop-title" :class="{active:show}">
              <p @click="show =!show"><span>您好：</span><b>{{username}}</b><i class="caret"></i></p>
            </div>
            <transition name="fade" mode="out-in">
              <div class="drop-down-info" v-if="show">
                <ul>
                  <li  @click.prevent="out">退出</li>
                </ul>
              </div>
            </transition>
          </div>
        </div>
      </div>          
    </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      systemname: '后台管理系统',
      name: 'lucy',
      username: localStorage['u_name'],
      show: false
    }
  },
  props: ['myMessage'],
  methods: {
    out () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
  .head{
    position: absolute;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    background-color: #00acac;
  }
  .head-container{
    padding-left: 250px;
     h3{
      margin-top: 20px;
      color: #fff;
     }
  }

  .head-right{
    margin-right: 50px;
  }

  .drop-down-info{
    margin-top: 0;
    border: 1px solid #fafafa;
    background-color: #fff;
    ul li{
      height: 40px;
      line-height:40px;
      text-align: center;
      padding: 0;
      list-style: none;
      margin-left: 0;
      cursor: pointer;
      transition:background-color .2s linear;
        &:hover{
          background-color: #fafafa;
        }
    }
  }
 
  .drop-title{
    padding-left:15px;
    padding-right: 15px;
    cursor: pointer;
    background-color: #00acac;
    line-height: 70px;
    height: 70px;
    color: #fff;
    &:hover,
    &.active{
      background-color: #008a8a;
    }
  }
</style>
