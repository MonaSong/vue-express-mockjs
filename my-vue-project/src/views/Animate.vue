<template>
  <div class="container-box">
    <div class="test-animate">
      <transition name="fade">
        <div class="test-box test-box-red"></div>
      </transition >
      <br>
      <br>
      <br>
       <button @click="show = !show">
          Toggle render
      </button>
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
