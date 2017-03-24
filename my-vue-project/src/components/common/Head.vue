<template>
    <div class="head">
      <div class="head-container">
        <div class="pull-right head-right">
          <!--<span v-text="myMessage"></span>-->
          <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span>你好：</span><b>{{username}}</b> <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a  @click.prevent="out">退出</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      name: 'lucy',
      username: localStorage['u_name']
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

<style>
  .head{
    position: absolute;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    background-color: #fafafa;
  }
  .head-right{
    margin-right: 80px;
  }
  .btn{
    margin-top: 20px;
    border: 0;
  }
  .btn.btn-default:hover,
  .btn.btn-default:focus,
  .btn.btn-default:active{
    background-color: #fff;
  }
  .btn-group ul li a{
    cursor: pointer;
  }
</style>
