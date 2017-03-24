<template>
  <div class="container-box">
    <div class="test-animate">
      <transition name="fade">
        <div class="test-box test-box-red"></div>
      </transition >
      <br>
      <br>
      <br>
      <p class="text-left">
        <button @click="show = !show" class="btn btn-primary">
            点击切换状态
        </button>
      </p>
      <transition name="slide-fade">
        <div class="test-box test-box-blue" v-if="show"></div>
      </transition >
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: true
      }
    }
  }
</script>

<style lang="" scoped>
  .test-box{
    width: 100px;
    height: 70px;
  }
  .test-box-red{
    background-color: #f30026;
  }
  .test-box-blue{
    background-color: #428bca;
  }
</style>
